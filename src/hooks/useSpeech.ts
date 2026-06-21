import { useCallback, useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────────────────────────
   Speech: text-to-speech (TTS) + speech recognition (STT)
   - TTS via window.speechSynthesis — always available, free, offline-ish
   - STT via the Web Speech API — only on Chrome/Edge/Safari; graceful fallback
   ──────────────────────────────────────────────────────────────── */

// Minimal typings for the Web Speech API (not in lib.dom by default)
interface SpeechRecognitionLike extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: any) => void) | null;
  onerror: ((e: any) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

function getRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as any;
  return (w.SpeechRecognition || w.webkitSpeechRecognition) ?? null;
}

export interface UseSpeech {
  /** Browser supports speech recognition. */
  recognitionSupported: boolean;
  /** Currently speaking (TTS). */
  speaking: boolean;
  /** Currently listening (STT). */
  listening: boolean;
  /** Speak English text aloud. */
  speak: (text: string, opts?: { rate?: number }) => void;
  /** Start listening. Resolves with the transcript. */
  listen: () => Promise<string>;
  /** Cancel any ongoing TTS. */
  cancelSpeak: () => void;
}

export function useSpeech(): UseSpeech {
  const recognitionSupported = !!getRecognitionCtor();
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // Load voices once (Chrome loads them async)
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = useCallback((text: string, opts?: { rate?: number }) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = opts?.rate ?? 0.9; // slightly slower for learners
    u.pitch = 1;
    // prefer a clean en-US voice if available
    const enVoice = voicesRef.current.find(
      (v) => v.lang === "en-US" || v.lang === "en_GB" || v.lang.startsWith("en")
    );
    if (enVoice) u.voice = enVoice;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  }, []);

  const cancelSpeak = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const listen = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      const Ctor = getRecognitionCtor();
      if (!Ctor) {
        reject(new Error("not-supported"));
        return;
      }
      const rec = new Ctor();
      rec.lang = "en-US";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.continuous = false;

      let resolved = false;
      const done = (val: string) => {
        if (resolved) return;
        resolved = true;
        setListening(false);
        resolve(val);
      };
      const fail = (err: Error) => {
        if (resolved) return;
        resolved = true;
        setListening(false);
        reject(err);
      };

      rec.onstart = () => setListening(true);
      rec.onresult = (e: any) => {
        const transcript = e.results?.[0]?.[0]?.transcript ?? "";
        done(transcript);
      };
      rec.onerror = (e: any) => fail(new Error(e?.error || "recognition-error"));
      rec.onend = () => done(""); // no result → empty

      try {
        rec.start();
      } catch (err) {
        fail(err as Error);
      }
    });
  }, []);

  return { recognitionSupported, speaking, listening, speak, cancelSpeak, listen };
}

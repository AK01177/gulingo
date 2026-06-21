import { useEffect, useMemo, useRef, useState } from "react";
import type {
  ConversationSim,
  FillInTheBlank,
  ListenAndType,
  MatchPairs,
  McqEngToGuj,
  MultiTurnConversation,
  PhotoVocab,
  Question,
  SpeakAndMatch,
  TranslateGujToEng,
  TrueOrFalse,
  WordOrder,
} from "../types";
import type { UseSpeech } from "../hooks/useSpeech";
import { normalize } from "../lib/evaluate";
import { QHeader, Speaker } from "./QHeader";

/* ────────────────────────────────────────────────────────────────
   Each question component calls `onAnswer(rawString)` when the user
   has committed. The parent handles evaluation + feedback.
   `disabled` locks input after an answer is submitted.
   ──────────────────────────────────────────────────────────────── */

export interface QProps<T extends Question = Question> {
  question: T;
  onAnswer: (raw: string) => void;
  speech: UseSpeech;
  disabled: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── 1. TRANSLATE_GUJ_TO_ENG ─────────────────────────────────── */
export function TranslateGujToEngQ({ question, onAnswer, disabled }: QProps<TranslateGujToEng>) {
  const [val, setVal] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} prompt={question.gujarati_sentence} />
      <input
        ref={ref}
        className="text-input"
        placeholder="Type in English…"
        value={val}
        disabled={disabled}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && val.trim() && !disabled) onAnswer(val);
        }}
        aria-label="English translation"
      />
      <div style={{ height: 12 }} />
      <button
        className="btn btn-primary btn-block"
        disabled={disabled || !val.trim()}
        onClick={() => onAnswer(val)}
      >
        ચકાસો
      </button>
    </div>
  );
}

/* ── 2. MCQ_ENG_TO_GUJ ───────────────────────────────────────── */
export function McqEngToGujQ({ question, onAnswer, disabled, speech }: QProps<McqEngToGuj>) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <p className="lesson-prompt" style={{ marginBottom: 0 }}>{question.english_sentence}</p>
        <button
          className="chip"
          onClick={() => speech.speak(question.english_sentence)}
          type="button"
          style={{ cursor: "pointer", background: "#ddf4ff", color: "#0a9bec" }}
        >
          🔈 સાંભળો
        </button>
      </div>
      <div className="options-grid">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={`option ${picked === i ? "selected" : ""}`}
            disabled={disabled}
            onClick={() => {
              setPicked(i);
              onAnswer(opt);
            }}
            type="button"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── 3. FILL_IN_THE_BLANK ────────────────────────────────────── */
export function FillInTheBlankQ({ question, onAnswer, disabled }: QProps<FillInTheBlank>) {
  const [picked, setPicked] = useState<string>("");
  const [typed, setTyped] = useState("");

  if (question.mode === "TYPE") {
    return (
      <div>
        <QHeader instruction={question.instruction_gujarati} prompt={question.sentence_with_blank} />
        <input
          className="text-input"
          placeholder="…"
          value={typed}
          disabled={disabled}
          onChange={(e) => setTyped(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && typed.trim() && !disabled) onAnswer(typed);
          }}
        />
        <div style={{ height: 12 }} />
        <button
          className="btn btn-primary btn-block"
          disabled={disabled || !typed.trim()}
          onClick={() => onAnswer(typed)}
        >
          ચકાસો
        </button>
      </div>
    );
  }

  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} prompt={question.sentence_with_blank} />
      <div className="options-grid">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={`option ${picked === opt ? "selected" : ""}`}
            disabled={disabled}
            onClick={() => {
              setPicked(opt);
              onAnswer(opt);
            }}
            type="button"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── 4. WORD_ORDER ───────────────────────────────────────────── */
export function WordOrderQ({ question, onAnswer, disabled }: QProps<WordOrder>) {
  // shuffled bank, stable per question
  const bank = useMemo(() => shuffle(question.shuffled_words), [question]);
  const [used, setUsed] = useState<boolean[]>(() => bank.map(() => false));
  const [line, setLine] = useState<{ word: string; bankIdx: number }[]>([]);

  const tapBank = (i: number) => {
    if (disabled || used[i]) return;
    const next = [...used];
    next[i] = true;
    setUsed(next);
    setLine((l) => [...l, { word: bank[i], bankIdx: i }]);
  };
  const tapLine = (pos: number) => {
    if (disabled) return;
    const item = line[pos];
    const nextUsed = [...used];
    nextUsed[item.bankIdx] = false;
    setUsed(nextUsed);
    setLine(line.filter((_, i) => i !== pos));
  };

  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} prompt={`„${question.gujarati_meaning}"`} />
      <div className="answer-line">
        {line.map((it, i) => (
          <button key={i} className="word-tile" onClick={() => tapLine(i)} type="button">
            {it.word}
          </button>
        ))}
        {line.length === 0 && <span className="word-bank-empty">નીચેથી શબ્દ પસંદ કરો…</span>}
      </div>
      <div style={{ height: 14 }} />
      <div className="word-bank">
        {bank.map((w, i) => (
          <button
            key={i}
            className={`word-tile ${used[i] ? "word-tile-used" : ""}`}
            onClick={() => tapBank(i)}
            type="button"
            disabled={disabled || used[i]}
          >
            {w}
          </button>
        ))}
      </div>
      <div style={{ height: 12 }} />
      <button
        className="btn btn-primary btn-block"
        disabled={disabled || line.length !== bank.length}
        onClick={() => onAnswer(line.map((l) => l.word).join(" "))}
      >
        ચકાસો
      </button>
    </div>
  );
}

/* ── 5. PHOTO_VOCAB ──────────────────────────────────────────── */
export function PhotoVocabQ({ question, onAnswer, disabled, speech }: QProps<PhotoVocab>) {
  const [picked, setPicked] = useState<string>("");
  const opts = useMemo(
    () => shuffle(question.options.map((o) => o)),
    [question]
  );
  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} />
      <div className="photo-card">
        <span className="emoji-big">{question.image_emoji}</span>
        {question.image_url && (
          <img
            src={question.image_url}
            alt=""
            style={{ maxWidth: 200, borderRadius: 12, marginBottom: 8 }}
          />
        )}
        <p className="photo-desc">{question.image_description_gujarati}</p>
      </div>
      <div className="options-grid">
        {opts.map((opt, i) => (
          <button
            key={i}
            className={`option ${picked === opt ? "selected" : ""}`}
            disabled={disabled}
            onClick={() => {
              setPicked(opt);
              onAnswer(opt);
            }}
            type="button"
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="phonetic" style={{ textAlign: "center", marginTop: 10 }}>
        {question.phonetic_gujarati}
        <button
          className="chip"
          onClick={() => speech.speak(question.correct_answer)}
          type="button"
          style={{ marginLeft: 8, cursor: "pointer" }}
        >
          🔈
        </button>
      </p>
    </div>
  );
}

/* ── 6. LISTEN_AND_TYPE ──────────────────────────────────────── */
export function ListenAndTypeQ({ question, onAnswer, disabled, speech }: QProps<ListenAndType>) {
  const [val, setVal] = useState("");
  // auto-play once on mount
  useEffect(() => {
    const t = setTimeout(() => speech.speak(question.audio_text), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);
  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} />
      <Speaker text={question.audio_text} speak={speech.speak} speaking={speech.speaking} />
      <input
        className="text-input"
        placeholder="જે સાંભળ્યું તે લખો…"
        value={val}
        disabled={disabled}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && val.trim() && !disabled) onAnswer(val);
        }}
      />
      <div style={{ height: 12 }} />
      <button
        className="btn btn-primary btn-block"
        disabled={disabled || !val.trim()}
        onClick={() => onAnswer(val)}
      >
        ચકાસો
      </button>
    </div>
  );
}

/* ── 7. SPEAK_AND_MATCH ──────────────────────────────────────── */
export function SpeakAndMatchQ({ question, onAnswer, disabled, speech }: QProps<SpeakAndMatch>) {
  const [transcript, setTranscript] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [tried, setTried] = useState(false);

  const trySpeak = async () => {
    if (disabled) return;
    setError("");
    setTranscript("");
    if (!speech.recognitionSupported) {
      // Fallback: let them read it & mark as attempted (speaking practice still counts)
      setTried(true);
      setTranscript(question.target_sentence);
      return;
    }
    try {
      const t = await speech.listen();
      if (t.trim()) {
        setTranscript(t);
        setTried(true);
      } else {
        setError("કંઈ સાંભળાયું નહીં. ફરી બોલો.");
      }
    } catch {
      setError("માઈકથી સાંભળાયું નહીં. ફરી પ્રયત્ન કરો.");
    }
  };

  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} />
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <p className="lesson-prompt" style={{ fontSize: 22 }}>{question.target_sentence}</p>
        <p className="phonetic">{question.phonetic_gujarati}</p>
        <button
          className="chip"
          onClick={() => speech.speak(question.target_sentence)}
          type="button"
          style={{ cursor: "pointer", marginTop: 6 }}
        >
          🔈 સાંભળો
        </button>
      </div>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <button
          className={`mic-btn ${speech.listening ? "recording" : ""}`}
          onClick={trySpeak}
          type="button"
          disabled={disabled}
          aria-label="બોલો"
        >
          🎤
        </button>
        <p style={{ marginTop: 10, fontWeight: 700, color: "var(--text-soft)", fontSize: 14 }}>
          {speech.listening ? "સાંભળી રહ્યા છીએ… બોલો!" : "બોલવા માટે દબાવો"}
        </p>
        {!speech.recognitionSupported && (
          <p style={{ fontSize: 12, color: "var(--text-faint)", marginTop: 4 }}>
            (આ બ્રાઉઝરમાં માઈક સપોર્ટ નથી — વાંચીને બોલો અને ચકાસો.)
          </p>
        )}
      </div>
      {transcript && (
        <p style={{ textAlign: "center", fontWeight: 800, color: "var(--duo-blue-dark)" }}>
          તમે બોલ્યા: "{transcript}"
        </p>
      )}
      {error && <p style={{ textAlign: "center", color: "var(--duo-red-dark)", fontWeight: 700 }}>{error}</p>}
      <div style={{ height: 12 }} />
      <button
        className="btn btn-primary btn-block"
        disabled={disabled || !tried}
        onClick={() => onAnswer(transcript || question.target_sentence)}
      >
        ચકાસો
      </button>
    </div>
  );
}

/* ── 8. MATCH_PAIRS ──────────────────────────────────────────── */
export function MatchPairsQ({ question, onAnswer, disabled }: QProps<MatchPairs>) {
  const left = useMemo(() => shuffle(question.pairs.map((p) => p.gujarati)), [question]);
  const right = useMemo(() => shuffle(question.pairs.map((p) => p.english)), [question]);
  const [selL, setSelL] = useState<string | null>(null);
  const [selR, setSelR] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set()); // store joined "guj|eng"
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const map = useMemo(() => {
    const m = new Map<string, string>();
    for (const p of question.pairs) m.set(p.gujarati, p.english);
    return m;
  }, [question]);

  // when both selected, check
  useEffect(() => {
    if (selL && selR) {
      const correct = map.get(selL) === selR;
      if (correct) {
        const next = new Set(matched);
        next.add(`${selL}|${selR}`);
        setMatched(next);
        setSelL(null);
        setSelR(null);
        if (next.size === question.pairs.length) {
          // all matched — emit success
          setTimeout(() => onAnswer("MATCH_OK"), 250);
        }
      } else {
        setWrongFlash(`${selL}|${selR}`);
        setTimeout(() => {
          setWrongFlash(null);
          setSelL(null);
          setSelR(null);
        }, 450);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selL, selR]);

  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} />
      <div className="match-grid">
        {left.map((g) => {
          const isMatched = [...matched].some((m) => m.startsWith(g + "|"));
          return (
            <button
              key={g}
              className={`match-cell ${selL === g ? "selected" : ""} ${isMatched ? "matched" : ""} ${
                wrongFlash?.startsWith(g + "|") ? "wrong" : ""
              }`}
              onClick={() => !disabled && !isMatched && setSelL(g)}
              type="button"
              disabled={disabled || isMatched}
            >
              {g}
            </button>
          );
        })}
        {right.map((e) => {
          const isMatched = [...matched].some((m) => m.endsWith("|" + e));
          return (
            <button
              key={e}
              className={`match-cell ${selR === e ? "selected" : ""} ${isMatched ? "matched" : ""} ${
                wrongFlash?.endsWith("|" + e) ? "wrong" : ""
              }`}
              onClick={() => !disabled && !isMatched && setSelR(e)}
              type="button"
              disabled={disabled || isMatched}
            >
              {e}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── 9. CONVERSATION_SIM ─────────────────────────────────────── */
export function ConversationSimQ({ question, onAnswer, disabled, speech }: QProps<ConversationSim>) {
  const [val, setVal] = useState("");
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");

  // AI's line is spoken on mount
  useEffect(() => {
    const t = setTimeout(() => speech.speak(question.ai_says), 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  const speak = async () => {
    setError("");
    setTranscript("");
    if (!speech.recognitionSupported) {
      setError("આ બ્રાઉઝરમાં માઈક નથી — નીચે લખીને ચકાસો.");
      return;
    }
    try {
      const t = await speech.listen();
      if (t.trim()) {
        setTranscript(t);
        setVal(t);
      } else setError("કંઈ સાંભળાયું નહીં. ફરી બોલો.");
    } catch {
      setError("માઈકથી સાંભળાયું નહીં. ફરી પ્રયત્ન કરો.");
    }
  };

  return (
    <div>
      <div
        style={{
          background: "#fff8e1",
          border: "2px solid #ffe082",
          borderRadius: 12,
          padding: "12px 14px",
          marginBottom: 16,
        }}
      >
        <p style={{ fontSize: 13, color: "var(--duo-yellow-dark)", fontWeight: 800, marginBottom: 4 }}>
          🎭 {question.scenario_gujarati}
        </p>
        <p style={{ fontSize: 12, color: "var(--text-soft)", marginBottom: 8 }}>
          {question.ai_role} → {question.user_role}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="chip" style={{ background: "#fff", border: "1px solid #ffe082" }}>
            {question.ai_role}
          </span>
          <p style={{ fontWeight: 800, flex: 1 }}>{question.ai_says}</p>
          <button
            className="chip"
            onClick={() => speech.speak(question.ai_says)}
            type="button"
            style={{ cursor: "pointer" }}
          >
            🔈
          </button>
        </div>
      </div>

      <QHeader instruction={question.instruction_gujarati} prompt={question.expected_hint_gujarati} />

      <input
        className="text-input"
        placeholder="અંગ્રેજીમાં જવાબ લખો અથવા બોલો…"
        value={val}
        disabled={disabled}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && val.trim() && !disabled) onAnswer(val);
        }}
      />

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <button
          className={`mic-btn ${speech.listening ? "recording" : ""}`}
          onClick={speak}
          type="button"
          disabled={disabled}
          style={{ width: 60, height: 60, fontSize: 24 }}
          aria-label="બોલો"
        >
          🎤
        </button>
        <button
          className="btn btn-primary btn-block"
          disabled={disabled || !val.trim()}
          onClick={() => onAnswer(val)}
        >
          ચકાસો
        </button>
      </div>
      {transcript && (
        <p style={{ textAlign: "center", marginTop: 10, fontWeight: 800, color: "var(--duo-blue-dark)" }}>
          તમે બોલ્યા: "{transcript}"
        </p>
      )}
      {error && <p style={{ textAlign: "center", color: "var(--duo-red-dark)", fontWeight: 700 }}>{error}</p>}
    </div>
  );
}

/* ── 10. TRUE_OR_FALSE ───────────────────────────────────────── */
export function TrueOrFalseQ({ question, onAnswer, disabled }: QProps<TrueOrFalse>) {
  const [picked, setPicked] = useState<boolean | null>(null);
  return (
    <div>
      <QHeader instruction={question.instruction_gujarati} prompt={`„${question.statement}"`} />
      <div className="tf-grid">
        <button
          className={`tf-btn ${picked === true ? "selected" : ""}`}
          disabled={disabled}
          onClick={() => {
            setPicked(true);
            onAnswer("true");
          }}
          type="button"
        >
          <span className="tf-emoji">✅</span>
          સાચું
        </button>
        <button
          className={`tf-btn ${picked === false ? "selected" : ""}`}
          disabled={disabled}
          onClick={() => {
            setPicked(false);
            onAnswer("false");
          }}
          type="button"
        >
          <span className="tf-emoji">❌</span>
          ખોટું
        </button>
      </div>
    </div>
  );
}

/* ── 11. MULTI_TURN_CONVERSATION ─────────────────────────────── */
export function MultiTurnConversationQ({ question, onAnswer, disabled, speech }: QProps<MultiTurnConversation>) {
  // Track which user-turn index we're on (0 = first user turn)
  const [currentTurnIdx, setCurrentTurnIdx] = useState(
    question.turns.findIndex((t) => t.speaker === "user")
  );
  const [val, setVal] = useState("");
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");
  const [chatLog, setChatLog] = useState<
    { speaker: "ai" | "user"; text: string; ok?: boolean }[]
  >([]);
  const [turnResults, setTurnResults] = useState<boolean[]>([]);

  const userTurns = question.turns.filter((t) => t.speaker === "user");
  const currentTurn = userTurns[currentTurnIdx];
  const allDone = turnResults.length >= question.required_turns;
  const totalPassed = turnResults.filter(Boolean).length;

  // Auto-speak the first AI line
  useEffect(() => {
    const firstAi = question.turns.find((t) => t.speaker === "ai");
    if (firstAi) {
      const t = setTimeout(() => speech.speak(firstAi.line), 400);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When advancing to a new user turn, speak any AI line that precedes it
  const advanceTurn = (passed: boolean) => {
    setTurnResults((r) => [...r, passed]);
    setChatLog((log) => [...log, { speaker: "user" as const, text: val, ok: passed }]);

    const nextUserIdx = currentTurnIdx + 1;
    // Add the next AI line to the chat log and speak it
    const aiLine = question.turns.find(
      (t, i) => t.speaker === "ai" && i > question.turns.indexOf(currentTurn)
    );
    if (aiLine) {
      setChatLog((log) => [...log, { speaker: "ai" as const, text: aiLine.line }]);
      setTimeout(() => speech.speak(aiLine.line), 300);
    }

    if (nextUserIdx < userTurns.length) {
      setCurrentTurnIdx(nextUserIdx);
    }
    setVal("");
    setTranscript("");
    setError("");
  };

  const checkTurnAnswer = () => {
    if (!val.trim() || !currentTurn) return;
    const norm = val.toLowerCase().trim();
    const kws = currentTurn.acceptable_keywords ?? [];
    const need = Math.max(1, Math.ceil(kws.length / 2));
    const hit = kws.filter((k) => norm.includes(k.toLowerCase())).length;
    const ok =
      hit >= need ||
      (currentTurn.acceptable_responses?.some(
        (a) => norm === a.toLowerCase().trim() || norm === normalize(a)
      ) ??
        false);
    advanceTurn(ok);
  };

  const trySpeak = async () => {
    setError("");
    setTranscript("");
    if (!speech.recognitionSupported) {
      setError("માઈક નથી — નીચે લખીને ચકાસો.");
      return;
    }
    try {
      const t = await speech.listen();
      if (t.trim()) {
        setTranscript(t);
        setVal(t);
      } else setError("કંઈ સાંભળાયું નહીં. ફરી બોલો.");
    } catch {
      setError("માઈકથી સાંભળાયું નહીં.");
    }
  };

  // When enough turns done, auto-submit
  useEffect(() => {
    if (allDone && !disabled) {
      const ok = totalPassed >= question.required_turns;
      onAnswer(ok ? "CONVO_OK" : "CONVO_FAIL");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDone, disabled]);

  if (disabled && allDone) {
    return null;
  }

  return (
    <div>
      {/* Scenario banner */}
      <div
        style={{
          background: "#e8f5e9",
          border: "2px solid #a5d6a7",
          borderRadius: 12,
          padding: "10px 14px",
          marginBottom: 12,
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 800, color: "#2e7d32", marginBottom: 2 }}>
          🎭 {question.scenario_gujarati}
        </p>
        <p style={{ fontSize: 12, color: "var(--text-soft)" }}>
          {question.ai_role} &amp; {question.user_role} · {currentTurnIdx + 1}/{userTurns.length}
        </p>
      </div>

      {/* Chat transcript */}
      <div
        style={{
          background: "var(--bg-soft)",
          borderRadius: 12,
          padding: 12,
          marginBottom: 14,
          maxHeight: 260,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* Show all past turns + current AI context */}
        {(() => {
          const visibleTurns = question.turns.slice(
            0,
            question.turns.indexOf(currentTurn) + 1
          );
          return visibleTurns.map((t, i) => {
            const logEntry = chatLog.find((c) => c.text === t.line);
            const isAi = t.speaker === "ai";
            return (
              <div
                key={i}
                style={{
                  alignSelf: isAi ? "flex-start" : "flex-end",
                  background: isAi ? "#fff" : "var(--duo-blue)",
                  color: isAi ? "var(--text)" : "#fff",
                  border: isAi ? "1px solid var(--border)" : "none",
                  borderRadius: 12,
                  padding: "8px 12px",
                  maxWidth: "85%",
                  fontSize: 14,
                  fontWeight: 700,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    opacity: 0.6,
                    display: "block",
                    marginBottom: 2,
                  }}
                >
                  {isAi ? question.ai_role : question.user_role}
                </span>
                {t.line}
                {logEntry?.ok === false && (
                  <span style={{ marginLeft: 6, color: "var(--duo-red)" }}>❌</span>
                )}
                {logEntry?.ok === true && (
                  <span style={{ marginLeft: 6, color: "var(--duo-green)" }}>✅</span>
                )}
                {isAi && (
                  <button
                    className="chip"
                    onClick={() => speech.speak(t.line)}
                    type="button"
                    style={{ cursor: "pointer", marginLeft: 6, fontSize: 11 }}
                  >
                    🔈
                  </button>
                )}
              </div>
            );
          });
        })()}

        {/* Show user's submitted answers */}
        {chatLog
          .filter((c) => c.speaker === "user")
          .map((c, i) => (
            <div
              key={`log-${i}`}
              style={{
                alignSelf: "flex-end",
                background: "var(--duo-blue)",
                color: "#fff",
                borderRadius: 12,
                padding: "8px 12px",
                maxWidth: "85%",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  opacity: 0.6,
                  display: "block",
                  marginBottom: 2,
                }}
              >
                {question.user_role}
              </span>
              {c.text}
              {c.ok === false && (
                <span style={{ marginLeft: 6 }}>❌</span>
              )}
              {c.ok === true && (
                <span style={{ marginLeft: 6 }}>✅</span>
              )}
            </div>
          ))}
      </div>

      {/* Hint for current turn */}
      {currentTurn && !disabled && (
        <div
          style={{
            background: "#fff8e1",
            border: "2px solid #ffe082",
            borderRadius: 12,
            padding: "10px 14px",
            marginBottom: 12,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 800, color: "var(--duo-yellow-dark)" }}>
            💡 {currentTurn.hint_gujarati ?? question.instruction_gujarati}
          </p>
          {currentTurn.phonetic_gujarati && (
            <p className="phonetic" style={{ marginTop: 4 }}>
              {currentTurn.phonetic_gujarati}
            </p>
          )}
        </div>
      )}

      {/* Input area */}
      {!disabled && currentTurn && (
        <>
          <input
            className="text-input"
            placeholder="અંગ્રેજીમાં જવાબ લખો અથવા બોલો…"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && val.trim()) checkTurnAnswer();
            }}
          />
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button
              className={`mic-btn ${speech.listening ? "recording" : ""}`}
              onClick={trySpeak}
              type="button"
              style={{ width: 60, height: 60, fontSize: 24 }}
              aria-label="બોલો"
            >
              🎤
            </button>
            <button
              className="btn btn-primary btn-block"
              disabled={!val.trim()}
              onClick={checkTurnAnswer}
            >
              જવાબ આપો →
            </button>
          </div>
          {transcript && (
            <p
              style={{
                textAlign: "center",
                marginTop: 8,
                fontWeight: 800,
                color: "var(--duo-blue-dark)",
              }}
            >
              તમે બોલ્યા: "{transcript}"
            </p>
          )}
          {error && (
            <p
              style={{
                textAlign: "center",
                color: "var(--duo-red-dark)",
                fontWeight: 700,
              }}
            >
              {error}
            </p>
          )}
        </>
      )}

      {/* Progress dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
        {userTurns.map((_, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background:
                i < turnResults.length
                  ? turnResults[i]
                    ? "var(--duo-green)"
                    : "var(--duo-red)"
                  : i === currentTurnIdx
                    ? "var(--duo-blue)"
                    : "var(--border)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Dispatcher ──────────────────────────────────────────────── */
export function QuestionView(props: QProps) {
  const { question } = props;
  switch (question.type) {
    case "TRANSLATE_GUJ_TO_ENG":
      return <TranslateGujToEngQ {...props} question={question as TranslateGujToEng} />;
    case "MCQ_ENG_TO_GUJ":
      return <McqEngToGujQ {...props} question={question as McqEngToGuj} />;
    case "FILL_IN_THE_BLANK":
      return <FillInTheBlankQ {...props} question={question as FillInTheBlank} />;
    case "WORD_ORDER":
      return <WordOrderQ {...props} question={question as WordOrder} />;
    case "PHOTO_VOCAB":
      return <PhotoVocabQ {...props} question={question as PhotoVocab} />;
    case "LISTEN_AND_TYPE":
      return <ListenAndTypeQ {...props} question={question as ListenAndType} />;
    case "SPEAK_AND_MATCH":
      return <SpeakAndMatchQ {...props} question={question as SpeakAndMatch} />;
    case "MATCH_PAIRS":
      return <MatchPairsQ {...props} question={question as MatchPairs} />;
    case "CONVERSATION_SIM":
      return <ConversationSimQ {...props} question={question as ConversationSim} />;
    case "TRUE_OR_FALSE":
      return <TrueOrFalseQ {...props} question={question as TrueOrFalse} />;
    case "MULTI_TURN_CONVERSATION":
      return <MultiTurnConversationQ {...props} question={question as MultiTurnConversation} />;
    default:
      return null;
  }
}

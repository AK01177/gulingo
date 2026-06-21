import {
  CORRECT_ENCOURAGEMENT,
  WRONG_ENCOURAGEMENT,
  type Difficulty,
  type EvaluationResult,
  type Question,
} from "../types";

/* ────────────────────────────────────────────────────────────────
   Answer evaluation + adaptive difficulty engine
   ──────────────────────────────────────────────────────────────── */

/** Normalize a user answer for fair comparison. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:"'`]+$/g, "") // trailing punctuation
    .replace(/\s+/g, " ") // collapse whitespace
    .replace(/\bu\b/g, "you") // common texting shortcuts
    .replace(/\bim\b/g, "i'm")
    .replace(/\bdont\b/g, "don't")
    .replace(/\bcant\b/g, "can't")
    .replace(/\bwont\b/g, "won't")
    .trim();
}

/** Word-level Jaccard similarity — forgiving for spoken answers. */
function similarity(a: string, b: string): number {
  const aw = new Set(normalize(a).split(" ").filter(Boolean));
  const bw = new Set(normalize(b).split(" ").filter(Boolean));
  if (aw.size === 0 || bw.size === 0) return 0;
  let inter = 0;
  for (const w of aw) if (bw.has(w)) inter++;
  return inter / Math.max(aw.size, bw.size);
}

/** Pull the set of correct answers + display answer for a question. */
function getAnswerSet(q: Question): { accepted: string[]; display: string } {
  switch (q.type) {
    case "TRANSLATE_GUJ_TO_ENG":
      return {
        accepted: [q.correct_answer, ...q.acceptable_answers],
        display: q.correct_answer,
      };
    case "MCQ_ENG_TO_GUJ":
      return { accepted: [q.options[q.correct_index]], display: q.options[q.correct_index] };
    case "FILL_IN_THE_BLANK":
      return { accepted: [q.correct_answer], display: q.correct_answer };
    case "WORD_ORDER":
      return { accepted: [q.correct_sentence], display: q.correct_sentence };
    case "PHOTO_VOCAB":
      return { accepted: [q.correct_answer], display: q.correct_answer };
    case "LISTEN_AND_TYPE":
      return {
        accepted: [q.correct_answer, ...(q.acceptable_answers ?? [])],
        display: q.correct_answer,
      };
    case "TRUE_OR_FALSE":
      return { accepted: [q.is_true ? "true" : "false"], display: q.is_true ? "સાચું (True)" : "ખોટું (False)" };
    case "SPEAK_AND_MATCH":
      return { accepted: [q.target_sentence], display: q.target_sentence };
    case "CONVERSATION_SIM": {
      // keyword-based: user must hit enough of the required keywords
      return {
        accepted: [...q.acceptable_responses, q.keywords.join(" ")],
        display: q.acceptable_responses[0],
      };
    }
    case "MATCH_PAIRS":
      return { accepted: [], display: "બધી જોડી સાચી!" };
    case "MULTI_TURN_CONVERSATION":
      // multi-turn handles itself in the component; evaluation is per-turn
      return { accepted: [], display: "CONVO_OK" };
    default:
      return { accepted: [], display: "" };
  }
}

/**
 * The core evaluator. Returns whether the answer is correct, the display
 * answer, Gujarati feedback, XP earned, and the next difficulty.
 */
export function evaluateAnswer(
  q: Question,
  rawUserAnswer: string,
  ctx: {
    correctStreak: number;
    wrongStreak: number;
    currentDifficulty: Difficulty;
    hintUsed?: boolean;
  }
): EvaluationResult {
  const { accepted, display } = getAnswerSet(q);
  const userNorm = normalize(rawUserAnswer);

  let isCorrect = false;

  if (q.type === "CONVERSATION_SIM") {
    // Keyword match: at least ceil(half) of keywords present, or strong similarity
    const userLower = userNorm;
    const hit = q.keywords.filter((k) => userLower.includes(normalize(k))).length;
    const need = Math.max(1, Math.ceil(q.keywords.length / 2));
    isCorrect = hit >= need || accepted.some((a) => similarity(a, userLower) >= 0.6);
  } else if (q.type === "MATCH_PAIRS") {
    // handled in the component; treat empty as wrong
    isCorrect = rawUserAnswer.trim() === "MATCH_OK";
  } else {
    isCorrect = accepted.some((a) => normalize(a) === userNorm);
    // fallback fuzzy match for spoken/typed answers
    if (!isCorrect) {
      isCorrect = accepted.some((a) => similarity(a, userNorm) >= 0.8);
    }
  }

  const xpEarned = computeXp(q, isCorrect, !!ctx.hintUsed);
  const newDifficulty = nextDifficulty(
    ctx.currentDifficulty,
    ctx.correctStreak,
    ctx.wrongStreak,
    isCorrect
  );

  const encouragement =
    (isCorrect ? CORRECT_ENCOURAGEMENT : WRONG_ENCOURAGEMENT)[
      Math.floor(Math.random() * (isCorrect ? CORRECT_ENCOURAGEMENT.length : WRONG_ENCOURAGEMENT.length))
    ];

  return {
    isCorrect,
    correctAnswer: display,
    feedback_gujarati: encouragement,
    grammar_tip_gujarati: q.explanation_gujarati || "",
    xpEarned,
    newDifficulty,
  };
}

/** XP per the spec: 10 base, 5 after hint, 15 for speaking/conversation. */
export function computeXp(q: Question, isCorrect: boolean, hintUsed: boolean): number {
  if (!isCorrect) return 0;
  if (q.type === "SPEAK_AND_MATCH" || q.type === "CONVERSATION_SIM") return 15;
  if (hintUsed) return 5;
  return 10;
}

/** Adaptive difficulty engine from the master spec. */
export function nextDifficulty(
  current: Difficulty,
  correctStreak: number,
  wrongStreak: number,
  isCorrect: boolean
): Difficulty {
  let next = current;
  if (correctStreak >= 3) next = Math.min(5, current + 1) as Difficulty;
  if (wrongStreak >= 2) next = Math.max(1, current - 1) as Difficulty;
  // keep within bounds
  if (next < 1) next = 1;
  if (next > 5) next = 5;
  void isCorrect;
  return next;
}

/** Pick a hint line for a question (Gujarati). */
export function getHint(q: Question): string {
  switch (q.type) {
    case "TRANSLATE_GUJ_TO_ENG":
      return q.hint_gujarati || "";
    case "FILL_IN_THE_BLANK":
      return q.grammar_note_gujarati || "";
    case "MCQ_ENG_TO_GUJ":
      return `સાચો અર્થ: "${q.options[q.correct_index]}"`;
    case "PHOTO_VOCAB":
      return `${q.image_description_gujarati} — ઉચ્ચાર: ${q.phonetic_gujarati}`;
    case "WORD_ORDER":
      return `અર્થ: ${q.gujarati_meaning}`;
    case "LISTEN_AND_TYPE":
      return `પ્રથમ શબ્દ: "${q.correct_answer.split(" ")[0]}"`;
    case "SPEAK_AND_MATCH":
      return `ઉચ્ચાર: ${q.phonetic_gujarati}`;
    case "TRUE_OR_FALSE":
      return q.is_true ? "આ વાક્ય સાચું છે." : "આ વાક્ય ખોટું છે.";
    case "CONVERSATION_SIM":
      return q.expected_hint_gujarati;
    case "MATCH_PAIRS":
      return "એક ગુજરાતી શબ્દ પસંદ કરો, પછી તેનો અંગ્રેજી જોડકો.";
    default:
      return "";
  }
}

/* ────────────────────────────────────────────────────────────────
   Gulingo — core domain types
   ──────────────────────────────────────────────────────────────── */

/** The 11 question types defined by the Gulingo pedagogy. */
export type QuestionType =
  | "TRANSLATE_GUJ_TO_ENG"
  | "MCQ_ENG_TO_GUJ"
  | "FILL_IN_THE_BLANK"
  | "WORD_ORDER"
  | "PHOTO_VOCAB"
  | "LISTEN_AND_TYPE"
  | "SPEAK_AND_MATCH"
  | "MATCH_PAIRS"
  | "CONVERSATION_SIM"
  | "TRUE_OR_FALSE"
  | "MULTI_TURN_CONVERSATION";

/** Difficulty scale 1–5 per the master spec. */
export type Difficulty = 1 | 2 | 3 | 4 | 5;

/** Shared fields every question carries. */
interface QuestionBase {
  id: string;
  type: QuestionType;
  /** Gujarati instruction shown above the question. */
  instruction_gujarati: string;
  /** Difficulty 1–5 — drives the adaptive engine. */
  difficulty?: Difficulty;
  /** Gujarati explanation shown after answering. */
  explanation_gujarati?: string;
}

/* ── Per-type question shapes ────────────────────────────────── */

export interface TranslateGujToEng extends QuestionBase {
  type: "TRANSLATE_GUJ_TO_ENG";
  gujarati_sentence: string;
  correct_answer: string;
  acceptable_answers: string[];
  hint_gujarati?: string;
}

export interface McqEngToGuj extends QuestionBase {
  type: "MCQ_ENG_TO_GUJ";
  english_sentence: string;
  options: string[];
  correct_index: number;
}

export interface FillInTheBlank extends QuestionBase {
  type: "FILL_IN_THE_BLANK";
  sentence_with_blank: string;
  correct_answer: string;
  options: string[];
  mode?: "MCQ" | "TYPE";
  grammar_note_gujarati?: string;
}

export interface WordOrder extends QuestionBase {
  type: "WORD_ORDER";
  shuffled_words: string[];
  correct_sentence: string;
  gujarati_meaning: string;
}

export interface PhotoVocab extends QuestionBase {
  type: "PHOTO_VOCAB";
  /** Emoji used as the always-available offline visual. */
  image_emoji: string;
  /** Optional remote image URL (Unsplash etc.) for richer visuals. */
  image_url?: string;
  image_description_gujarati: string;
  correct_answer: string;
  options: string[];
  phonetic_gujarati: string;
}

export interface ListenAndType extends QuestionBase {
  type: "LISTEN_AND_TYPE";
  audio_text: string;
  correct_answer: string;
  acceptable_answers?: string[];
  phonetic_gujarati: string;
}

export interface SpeakAndMatch extends QuestionBase {
  type: "SPEAK_AND_MATCH";
  target_sentence: string;
  phonetic_gujarati: string;
}

export interface MatchPairs extends QuestionBase {
  type: "MATCH_PAIRS";
  pairs: { gujarati: string; english: string }[];
}

export interface ConversationSim extends QuestionBase {
  type: "CONVERSATION_SIM";
  scenario_gujarati: string;
  ai_role: string;
  user_role: string;
  ai_says: string;
  expected_hint_gujarati: string;
  acceptable_responses: string[];
  /** Keywords that must appear in the user's spoken/typed answer. */
  keywords: string[];
}

export interface TrueOrFalse extends QuestionBase {
  type: "TRUE_OR_FALSE";
  statement: string;
  is_true: boolean;
  correction?: string;
}

/** Full multi-turn dialogue — user has back-and-forth conversation via type/speak. */
export interface MultiTurnConversation extends QuestionBase {
  type: "MULTI_TURN_CONVERSATION";
  scenario_gujarati: string;
  ai_role: string;
  user_role: string;
  /** Ordered dialogue turns. AI speaks, user responds, AI replies, user responds… */
  turns: MultiTurn[];
  /** How many turns must be completed (user responses) for the conversation to be "passed". */
  required_turns: number;
}

export interface MultiTurn {
  /** Who speaks: "ai" or "user". */
  speaker: "ai" | "user";
  /** The line (AI's scripted, or the user's expected). */
  line: string;
  /** For AI turns: Gujarati hint shown after the AI line. */
  hint_gujarati?: string;
  /** For user turns: acceptable response keywords (lenient). */
  acceptable_keywords?: string[];
  /** Full acceptable responses for exact matching. */
  acceptable_responses?: string[];
  /** Gujarati phonetic guide for this line. */
  phonetic_gujarati?: string;
}

/** Discriminated union of every question type. */
export type Question =
  | TranslateGujToEng
  | McqEngToGuj
  | FillInTheBlank
  | WordOrder
  | PhotoVocab
  | ListenAndType
  | SpeakAndMatch
  | MatchPairs
  | ConversationSim
  | TrueOrFalse
  | MultiTurnConversation;

/* ── Lesson / Unit / Curriculum ──────────────────────────────── */

export interface Lesson {
  id: string;
  unit: number;
  level: number;
  title_gujarati: string;
  intro_gujarati: string;
  questions: Question[];
  topics_covered: string[];
}

export interface UnitMeta {
  n: number;
  guj: string;
  eng: string;
  topics: string;
  grammar: string;
  color: string;
}

/* ── Progress (persisted in localStorage) ────────────────────── */

export interface Progress {
  /** Lesson ids the user has completed. */
  completedLessons: string[];
  totalXp: number;
  /** Current day-streak (consecutive days with ≥1 lesson). */
  streak: number;
  /** ISO date string (yyyy-mm-dd) of last activity. */
  lastActiveDate: string;
  /** Number of lessons completed today. */
  lessonsToday: number;
  /** ISO date string for the "today" counter reset. */
  today: string;
  /** Hearts available (Duolingo-style). Max refills over time. */
  hearts: number;
  /** Maximum hearts. */
  maxHearts: number;
  /** Soft currency for streak-freeze etc. */
  gems: number;
}

/* ── Answer evaluation result ────────────────────────────────── */

export interface EvaluationResult {
  isCorrect: boolean;
  /** The canonical correct answer to display. */
  correctAnswer: string;
  /** Gujarati feedback line. */
  feedback_gujarati: string;
  /** Gujarati grammar/explanation tip. */
  grammar_tip_gujarati: string;
  /** XP earned for this answer. */
  xpEarned: number;
  /** Next difficulty suggested by the adaptive engine. */
  newDifficulty: Difficulty;
}

/** Encouragement strings (clean Gujarati — fixed from the original prompt). */
export const CORRECT_ENCOURAGEMENT = [
  "ઉત્કૃષ્ટ! 🌟 ઘણું સારું!",
  "વાહ! ઘણું સારું કર્યું! 🎉",
  "ચાલુ રાખો! 💪 Perfect!",
  "શાબાશ! 🏆 ઉત્તમ!",
  "બહુ બહુ સરસ! 🔥",
];

export const WRONG_ENCOURAGEMENT = [
  "કોઈ વાત નહીં! ફરી પ્રયત્ન કરો. 💪",
  "થોડી ભૂલ થઈ — બસ, એટલું જ! 😊",
  "ચિંતા નહીં, શીખવાનું છે. આગળ વધો!",
  "એક ભૂલથી શીખો — બહુ સારું! 👍",
];

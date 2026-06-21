import { useState } from "react";
import type { Difficulty, EvaluationResult, Lesson } from "../types";
import { useSpeech } from "../hooks/useSpeech";
import { evaluateAnswer, getHint } from "../lib/evaluate";
import { QuestionView } from "./questions";

interface Props {
  lesson: Lesson;
  onComplete: (xp: number, perfect: boolean) => void;
  onQuit: () => void;
}

type Phase = "playing" | "feedback" | "done";

export function LessonPlayer({ lesson, onComplete, onQuit }: Props) {
  const speech = useSpeech();
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("playing");
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [hintUsed, setHintUsed] = useState(false);
  const [hintText, setHintText] = useState("");
  const [correctStreak, setCorrectStreak] = useState(0);
  const [wrongStreak, setWrongStreak] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>(
    (lesson.questions[0]?.difficulty ?? 1) as Difficulty
  );
  const [correctCount, setCorrectCount] = useState(0);
  const [totalXp, setTotalXp] = useState(0);

  const q = lesson.questions[idx];
  const total = lesson.questions.length;

  const handleAnswer = (raw: string) => {
    const r = evaluateAnswer(q, raw, {
      correctStreak,
      wrongStreak,
      currentDifficulty: difficulty,
      hintUsed,
    });
    setResult(r);
    setPhase("feedback");
    setTotalXp((x) => x + r.xpEarned);

    if (r.isCorrect) {
      setCorrectCount((c) => c + 1);
      setCorrectStreak((s) => s + 1);
      setWrongStreak(0);
    } else {
      setWrongStreak((s) => s + 1);
      setCorrectStreak(0);
      // hearts disabled
    }
    setDifficulty(r.newDifficulty);
  };

  const next = () => {
    if (idx + 1 >= total) {
      const perfect = correctCount === total;
      const bonus = perfect ? 25 : 0;
      onComplete(totalXp + bonus, perfect);
      setPhase("done");
      return;
    }
    setIdx((i) => i + 1);
    setResult(null);
    setPhase("playing");
    setHintUsed(false);
    setHintText("");
  };

  const useHintNow = () => {
    if (hintUsed) return;
    setHintUsed(true);
    setHintText(getHint(q));
  };



  if (phase === "done") {
    const perfect = correctCount === total;
    return <LessonDone correct={correctCount} total={total} perfect={perfect} onContinue={onQuit} />;
  }

  const progress = ((idx + (phase === "feedback" ? 1 : 0)) / total) * 100;

  return (
    <div className="lesson">
      <div className="lesson-header">
        <span className="lesson-x" onClick={onQuit} role="button" aria-label="બહાર">
          ✕
        </span>
        <div className="lesson-progress">
          <div className="lesson-progress-fill" style={{ width: `${progress}%` }} />
        </div>

      </div>

      <div className="lesson-body" key={idx}>
        <QuestionView question={q} onAnswer={handleAnswer} speech={speech} disabled={phase === "feedback"} />

        {phase === "playing" && (
          <div style={{ marginTop: 18 }}>
            {!hintText ? (
              <button
                className="btn btn-yellow btn-block"
                onClick={useHintNow}
                type="button"
                style={{ background: "#fff", color: "var(--duo-yellow-dark)", border: "2px solid #ffd84d" }}
              >
                💡 મદદ (Hint) — ૫ XP ઓછા
              </button>
            ) : (
              <div
                style={{
                  background: "#fff8e1",
                  border: "2px solid #ffe082",
                  borderRadius: 12,
                  padding: "12px 14px",
                  fontWeight: 700,
                  color: "var(--duo-yellow-dark)",
                }}
              >
                💡 {hintText}
              </div>
            )}
          </div>
        )}
      </div>

      {phase === "feedback" && result && (
        <FeedbackBar result={result} onContinue={next} />
      )}
    </div>
  );
}

function FeedbackBar({ result, onContinue }: { result: EvaluationResult; onContinue: () => void }) {
  return (
    <div className={`feedback ${result.isCorrect ? "feedback-correct" : "feedback-wrong"}`}>
      <div className="feedback-icon">{result.isCorrect ? "✅" : "❌"}</div>
      <div style={{ flex: 1 }}>
        <p className={result.isCorrect ? "feedback-title-correct" : "feedback-title-wrong"}>
          {result.feedback_gujarati}
        </p>
        {!result.isCorrect && (
          <p className="feedback-answer">
            સાચો જવાબ: <b>{result.correctAnswer}</b>
          </p>
        )}
        <p className="feedback-explain">{result.grammar_tip_gujarati}</p>
      </div>
      <button className="btn btn-primary" onClick={onContinue} type="button">
        ચાલુ
      </button>
    </div>
  );
}

function LessonDone({
  correct,
  total,
  perfect,
  onContinue,
}: {
  correct: number;
  total: number;
  perfect: boolean;
  onContinue: () => void;
}) {
  return (
    <div className="complete-screen">
      <div className="complete-mascot">{perfect ? "🏆" : "🎉"}</div>
      <h1 className="complete-title">{perfect ? "Perfect! શાબાશ!" : "પાઠ પૂર્ણ!"}</h1>
      <p className="complete-sub">
        {correct} / {total} સાચા જવાબ
      </p>
      <div className="complete-stats">

        <div className="complete-stat">
          <span className="complete-stat-val" style={{ color: "var(--duo-green-dark)" }}>
            {correct}
          </span>
          <span className="complete-stat-label">સાચા</span>
        </div>
        <div className="complete-stat">
          <span className="complete-stat-val" style={{ color: "var(--duo-blue-dark)" }}>
            {perfect ? "+25" : "0"}
          </span>
          <span className="complete-stat-label">બોનસ</span>
        </div>
      </div>
      <button className="btn btn-primary btn-lg btn-block" style={{ maxWidth: 320 }} onClick={onContinue}>
        ચાલુ રાખો
      </button>
    </div>
  );
}



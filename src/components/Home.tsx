import { useMemo } from "react";
import { UNITS } from "../data/units";
import { ALL_LESSONS, lessonsForUnit, TOTAL_LESSONS } from "../data/lessons";
import type { Progress } from "../types";

interface Props {
  progress: Progress;
  onStartLesson: (lessonId: string) => void;
}

/** Visual rotation of node colors for the zig-zag path. */
const NODE_COLORS = ["path-node-start", "path-node-blue", "path-node-purple", "path-node-yellow"];

export function Home({ progress, onStartLesson }: Props) {
  // Flatten all lessons into a single ordered path
  const path = useMemo(() => ALL_LESSONS, []);
  const done = new Set(progress.completedLessons);

  // find the first not-done lesson — that's the "current"
  const currentIndex = path.findIndex((l) => !done.has(l.id));
  const firstIncomplete = currentIndex === -1 ? path.length : currentIndex;

  return (
    <div className="home">
      {/* Daily goal banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #58cc02 0%, #46a300 100%)",
          color: "#fff",
          borderRadius: 16,
          padding: "16px 18px",
          marginBottom: 24,
          boxShadow: "0 4px 0 #3a8a00",
        }}
      >
        <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>🎯 આજનું લક્ષ્ય</p>
        <p style={{ fontSize: 13, opacity: 0.95 }}>
          આજે {progress.lessonsToday} પાઠ પૂર્ણ કર્યા · {TOTAL_LESSONS - done.size} પાઠ બાકી
        </p>
      </div>

      {UNITS.map((unit) => {
        const unitLessons = lessonsForUnit(unit.n);
        const unitDone = unitLessons.filter((l) => done.has(l.id)).length;
        const unitComplete = unitDone === unitLessons.length;
        return (
          <section className="unit-card" key={unit.n}>
            <div className="unit-banner" style={{ background: unit.color }}>
              <div>
                <div>
                  Unit {unit.n} · {unit.eng}
                </div>
                <div className="unit-banner-sub">{unit.guj}</div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 800 }}>
                {unitDone}/{unitLessons.length}
              </span>
            </div>

            <div className="path">
              {unitLessons.map((lesson, i) => {
                const flatIdx = path.findIndex((p) => p.id === lesson.id);
                const isDone = done.has(lesson.id);
                // unlock rule: previous lesson done (or first lesson of unit 1)
                const prevDone =
                  flatIdx === 0 ? true : done.has(path[flatIdx - 1].id);
                const isLocked = !isDone && !prevDone;
                const isCurrent = flatIdx === firstIncomplete;
                const colorClass = isDone
                  ? "path-node-done"
                  : NODE_COLORS[i % NODE_COLORS.length];

                return (
                  <button
                    key={lesson.id}
                    className={`path-node ${isLocked ? "path-node-locked" : colorClass}`}
                    onClick={() => !isLocked && onStartLesson(lesson.id)}
                    type="button"
                    aria-label={lesson.title_gujarati}
                    style={{ marginTop: i === 0 ? 8 : 0 }}
                  >
                    {isCurrent && <span className="path-node-label">{lesson.title_gujarati}</span>}
                    <span style={{ fontSize: 28 }}>{iconFor(isDone, isLocked, unitComplete)}</span>
                    <span
                      className="path-node-num"
                      style={{ color: isLocked ? "#afafaf" : unit.color }}
                    >
                      {i + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      <div style={{ textAlign: "center", padding: "20px 0", color: "var(--text-faint)", fontSize: 13 }}>
        🦜 Gulingo · ગુજરાતીથી અંગ્રેજી · {TOTAL_LESSONS} પાઠ
      </div>
    </div>
  );
}

function iconFor(done: boolean, locked: boolean, unitComplete: boolean): string {
  if (locked) return "🔒";
  if (done) return unitComplete ? "⭐" : "✓";
  return "▶";
}

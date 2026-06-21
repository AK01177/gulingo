import { useState } from "react";
import { useProgress } from "./hooks/useProgress";
import { getLesson } from "./data/lessons";
import { TopBar, BottomNav, type Tab } from "./components/Shell";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { LessonPlayer } from "./components/LessonPlayer";

export default function App() {
  const { progress, completeLesson, addGems, reset } = useProgress();
  const [tab, setTab] = useState<Tab>("home");
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  const lesson = activeLessonId ? getLesson(activeLessonId) : null;

  // ── Lesson mode ──────────────────────────────────────────────
  if (lesson) {
    return (
      <div className="app-shell">
        <LessonPlayer
          lesson={lesson}

          onComplete={(xp, perfect) => {
            completeLesson(lesson.id, xp);
            if (perfect) addGems(5);
          }}
          onQuit={() => setActiveLessonId(null)}
        />
      </div>
    );
  }

  // ── App mode (home / profile) ────────────────────────────────
  return (
    <div className="app-shell">
      <TopBar progress={progress} />
      {tab === "home" && <Home progress={progress} onStartLesson={(id) => setActiveLessonId(id)} />}
      {tab === "profile" && <Profile progress={progress} onReset={reset} />}
      <BottomNav tab={tab} onChange={setTab} />
    </div>
  );
}

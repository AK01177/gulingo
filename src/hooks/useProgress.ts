import { useCallback, useEffect, useState } from "react";
import type { Progress } from "../types";

const KEY = "gulingo:progress:v1";

const today = () => new Date().toISOString().slice(0, 10);

function defaultProgress(): Progress {
  return {
    completedLessons: [],
    totalXp: 0,
    streak: 0,
    lastActiveDate: "",
    lessonsToday: 0,
    today: today(),
    hearts: 5,
    maxHearts: 5,
    gems: 20,
  };
}

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress();
    const p = { ...defaultProgress(), ...(JSON.parse(raw) as Partial<Progress>) } as Progress;
    // daily reset
    if (p.today !== today()) {
      p.today = today();
      p.lessonsToday = 0;
    }
    // refill one heart if it's been a while (simple time-based regen)
    const lastTs = p.lastActiveDate ? Date.parse(p.lastActiveDate) : 0;
    const hoursSince = (Date.now() - lastTs) / 3_600_000;
    if (hoursSince >= 2 && p.hearts < p.maxHearts) {
      p.hearts = Math.min(p.maxHearts, p.hearts + Math.floor(hoursSince / 2));
    }
    return p;
  } catch {
    return defaultProgress();
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => load());

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch {
      /* ignore quota errors */
    }
  }, [progress]);

  /** Mark a lesson complete with XP + streak update. */
  const completeLesson = useCallback((lessonId: string, xp: number) => {
    setProgress((prev) => {
      const t = today();
      const already = prev.completedLessons.includes(lessonId);
      const completed = already ? prev.completedLessons : [...prev.completedLessons, lessonId];

      // streak logic: first activity ever, or new day
      let streak = prev.streak;
      let lastActive = prev.lastActiveDate;
      if (prev.lastActiveDate !== t) {
        const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
        if (prev.lastActiveDate === yesterday || prev.lastActiveDate === "") {
          streak = prev.streak + 1;
        } else {
          streak = 1; // reset, but count today
        }
        lastActive = t;
      } else if (prev.lastActiveDate === "") {
        streak = 1;
        lastActive = t;
      }

      return {
        ...prev,
        completedLessons: completed,
        totalXp: prev.totalXp + xp,
        streak,
        lastActiveDate: lastActive,
        today: t,
        lessonsToday: already ? prev.lessonsToday : prev.lessonsToday + 1,
      };
    });
  }, []);

  /** Lose a heart (wrong answer). */
  const loseHeart = useCallback(() => {
    setProgress((prev) => ({ ...prev, hearts: Math.max(0, prev.hearts - 1) }));
  }, []);

  /** Practice refill: +1 heart (used by the practice button). */
  const refillHeart = useCallback(() => {
    setProgress((prev) => ({ ...prev, hearts: Math.min(prev.maxHearts, prev.hearts + 1) }));
  }, []);

  /** Award gems (e.g. on perfect lesson). */
  const addGems = useCallback((n: number) => {
    setProgress((prev) => ({ ...prev, gems: prev.gems + n }));
  }, []);

  /** Full reset. */
  const reset = useCallback(() => setProgress(defaultProgress()), []);

  return { progress, completeLesson, loseHeart, refillHeart, addGems, reset };
}

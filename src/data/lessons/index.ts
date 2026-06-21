import type { Lesson } from "../../types";
import { unit1 } from "./unit1";
import { unit2 } from "./unit2";
import { unit3 } from "./unit3";
import { unit4 } from "./unit4";
import { unit5 } from "./unit5";
import { unit6 } from "./unit6";
import { unit7 } from "./unit7";
import { unit8 } from "./unit8";
import { unit9 } from "./unit9";
import { unit10 } from "./unit10";

/** All lessons, ordered by unit → level. */
export const ALL_LESSONS: Lesson[] = [
  ...unit1,
  ...unit2,
  ...unit3,
  ...unit4,
  ...unit5,
  ...unit6,
  ...unit7,
  ...unit8,
  ...unit9,
  ...unit10,
];

/** Lookup a lesson by id. */
export function getLesson(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

/** Lessons for a single unit. */
export function lessonsForUnit(n: number): Lesson[] {
  return ALL_LESSONS.filter((l) => l.unit === n);
}

/** Total lesson count. */
export const TOTAL_LESSONS = ALL_LESSONS.length;

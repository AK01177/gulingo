# 🦜 Gulingo — ગુજરાતીથી અંગ્રેજી શીખો

A Duolingo-style, gamified **Gujarati → English** learning web app, built for an
adult Gujarati-native learner who wants real-world conversational fluency.

All instructions, hints, and explanations are in **Gujarati**. All learning
content (words, sentences, dialogues) is in **English**.

## ✨ Features

- **10 units × lessons** — full curriculum from greetings → advanced fluency and mastery
- **11 question types** — translate, MCQ, fill-blank, word-order, photo vocab,
  listen & type, speak & match, match pairs, conversation sim, true/false, multi-turn conversation
- **Free & offline** — no API key, no server, no internet needed to learn
- **Audio (🔊)** — every English sentence speaks aloud via Web Speech TTS
- **Speaking (🎤)** — speech recognition with graceful fallback
- **Adaptive difficulty** — ramps up on a 3-correct streak, eases on 2-wrong
- **Gamification** — XP, daily streak, hearts, gems, perfect-lesson bonus
- **Mobile-first PWA** — installable on phone, works like an app
- **Persistence** — progress saved in localStorage

## 🚀 Run it

```bash
npm install
npm run dev      # development at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 🎤 About speech features

- **Listen (🔊)** works in every modern browser — always available.
- **Speak (🎤)** uses the Web Speech API and works best in **Chrome** or **Edge**
  with microphone permission. On unsupported browsers the speaking questions
  fall back gracefully (read aloud + check).

## 📚 Curriculum

| Unit | Title | Topics |
|------|-------|--------|
| 1 | પ્રારંભ (Beginnings) | Greetings, numbers, days, months, introductions |
| 2 | રોજિંદી જિંદગી (Daily Life) | Routines, time, meals |
| 3 | ઘર અને પરિવાર (Home & Family) | Family, rooms, possessives |
| 4 | ખાવા-પીવું (Food & Drinks) | Ordering, restaurant, simple past |
| 5 | બજાર (Shopping) | Prices in ₹, bargaining, future tense |
| 6 | પ્રવાસ (Travel) | Directions, transport, present continuous |
| 7 | આરોગ્ય (Health) | Doctor, symptoms, modals |
| 8 | વ્યવહારિક વાર્તાલાપ (Real Conversations) | Phone, polite speech, idioms |
| 9 | વાર્તાલાપમાં નિપુણતા (Conversation Mastery) | Real-life dialogues, interviews, banking, travel |
| 10 | અંગ્રેજીમાં માસ્ટરી (English Mastery) | Complex scenarios, crisis management, advanced fluency |

## 🗂️ Project structure

```
src/
├── types.ts                  # Question discriminated union + domain types
├── lib/evaluate.ts           # answer evaluator + adaptive difficulty + XP
├── hooks/
│   ├── useProgress.ts        # localStorage persistence, streaks, hearts
│   └── useSpeech.ts          # TTS (speechSynthesis) + STT (recognition)
├── data/
│   ├── units.ts              # 10-unit curriculum metadata
│   └── lessons/              # lesson content (extend here to add lessons)
│       ├── index.ts
│       └── unit1..10.ts
├── components/
│   ├── Shell.tsx             # TopBar + BottomNav
│   ├── Home.tsx              # learning path
│   ├── Profile.tsx           # stats + reset
│   ├── LessonPlayer.tsx      # orchestrator + feedback + complete screen
│   ├── QHeader.tsx           # shared header + speaker button
│   └── questions.tsx         # all 10 question-type components
├── App.tsx                   # root: app ↔ lesson mode switching
├── main.tsx
└── styles.css                # Duolingo-inspired global styles
```

## ➕ Adding more lessons

Each lesson lives in `src/data/lessons/unitN.ts` as plain data. A lesson is:

```ts
{
  id: "u1l6",            // unique
  unit: 1, level: 6,
  title_gujarati: "…",
  intro_gujarati: "…",
  topics_covered: ["…"],
  questions: [ /* Question objects per the type schemas in types.ts */ ],
}
```

Add the lesson to the unit array and it automatically appears on the learning
path with proper unlocking.

/** Shared header for each question: instruction + prompt. */
export function QHeader({
  instruction,
  prompt,
}: {
  instruction: string;
  prompt?: string;
}) {
  return (
    <>
      <p className="lesson-instruction">{instruction}</p>
      {prompt && <p className="lesson-prompt">{prompt}</p>}
    </>
  );
}

/** Small speaker button that reads text aloud. */
export function Speaker({
  text,
  speak,
  speaking,
}: {
  text: string;
  speak: (t: string) => void;
  speaking: boolean;
}) {
  return (
    <button
      className={`audio-btn ${speaking ? "playing" : ""}`}
      onClick={() => speak(text)}
      aria-label="સાંભળો"
      type="button"
    >
      <span style={{ fontSize: 34 }}>{speaking ? "🔊" : "🔈"}</span>
      <span>સાંભળો</span>
    </button>
  );
}

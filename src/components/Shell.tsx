import type { Progress } from "../types";

export type Tab = "home" | "profile";

/** Sticky top bar with streak, gems, hearts. */
export function TopBar({ progress }: { progress: Progress }) {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span style={{ fontSize: 24 }}>🦜</span>
        <span>Gulingo</span>
      </div>
      <div className="spacer" />
      <div className="topbar-stat stat-fire">
        🔥 <span className="stat-num">{progress.streak}</span>
      </div>
      <div className="topbar-stat stat-gem">
        💎 <span className="stat-num">{progress.gems}</span>
      </div>
      <div className="topbar-stat stat-heart">
        ❤️ <span className="stat-num">{progress.hearts}</span>
      </div>
    </header>
  );
}

/** Fixed bottom navigation. */
export function BottomNav({
  tab,
  onChange,
}: {
  tab: Tab;
  onChange: (t: Tab) => void;
}) {
  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${tab === "home" ? "active" : ""}`}
        onClick={() => onChange("home")}
        type="button"
      >
        <span className="nav-icon">🏠</span>
        ઘર
      </button>
      <button
        className={`nav-item ${tab === "profile" ? "active" : ""}`}
        onClick={() => onChange("profile")}
        type="button"
      >
        <span className="nav-icon">👤</span>
        પ્રોફાઈલ
      </button>
    </nav>
  );
}

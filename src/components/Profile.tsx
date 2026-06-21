import { ALL_LESSONS } from "../data/lessons";
import type { Progress } from "../types";

interface Props {
  progress: Progress;
  onReset: () => void;
}

export function Profile({ progress, onReset }: Props) {
  const done = new Set(progress.completedLessons);
  const pct = Math.round((done.size / ALL_LESSONS.length) * 100);
  const accuracyStub = progress.totalXp > 0 ? Math.min(100, Math.round((progress.totalXp / Math.max(1, done.size)) * 2)) : 0;

  return (
    <div className="profile">
      <div
        style={{
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <div style={{ fontSize: 72 }}>🦜</div>
        <h1 style={{ fontSize: 22, fontWeight: 900, margin: "6px 0 2px" }}>શિક્ષક</h1>
        <p className="muted" style={{ fontSize: 14 }}>ગુજરાતી → અંગ્રેજી શીખનાર</p>
      </div>

      <div className="stat-row">
        <div className="stat-card">
          <div className="stat-card-val" style={{ color: "var(--duo-orange)" }}>🔥 {progress.streak}</div>
          <div className="stat-card-label">દિવસ સ્ટ્રીક</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-val" style={{ color: "var(--duo-yellow-dark)" }}>⭐ {progress.totalXp}</div>
          <div className="stat-card-label">કુલ XP</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-val" style={{ color: "var(--duo-blue-dark)" }}>💎 {progress.gems}</div>
          <div className="stat-card-label">રત્ન</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-val" style={{ color: "var(--duo-green-dark)" }}>✅ {done.size}</div>
          <div className="stat-card-label">પાઠ પૂર્ણ</div>
        </div>
      </div>

      <h2 className="section-title">📊 પ્રગતિ</h2>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontWeight: 800, fontSize: 14 }}>કુલ અભ્યાસક્રમ</span>
          <span style={{ fontWeight: 800, color: "var(--duo-green-dark)" }}>{pct}%</span>
        </div>
        <div className="lesson-progress" style={{ height: 14 }}>
          <div
            className="lesson-progress-fill"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="muted" style={{ fontSize: 12, marginTop: 8 }}>
          {done.size} / {ALL_LESSONS.length} પાઠ પૂર્ણ
        </p>
      </div>

      {accuracyStub > 0 && (
        <>
          <h2 className="section-title">🎯 આંકડા</h2>
          <div className="card">
            <p style={{ fontSize: 13, color: "var(--text-soft)", marginBottom: 8 }}>
              આજ સુધીમાં {progress.lessonsToday} પાઠ આજે પૂર્ણ.
            </p>
            <p style={{ fontSize: 13, color: "var(--text-soft)" }}>
              છેલ્લું સક્રિય: {progress.lastActiveDate || "હજુ શરૂ નથી કર્યું"}
            </p>
          </div>
        </>
      )}

      <h2 className="section-title">ℹ️ મદદ</h2>
      <div className="card">
        <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.6, marginBottom: 8 }}>
          🎤 બોલવાના પ્રશ્નો માટે Chrome અથવા Edge બ્રાઉઝર વાપરો અને માઈકની પરવાનગી આપો.
        </p>
        <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.6 }}>
          🔈 દરેક અંગ્રેજી વાક્ય સાંભળી શકાય છે — 🔈 બટન દબાવો.
        </p>
      </div>

      <button
        className="btn btn-white btn-block"
        style={{ marginTop: 24 }}
        onClick={() => {
          if (confirm("શું તમે ખરેખર બધી પ્રગતિ કાઢી નાખવા માંગો છો?")) onReset();
        }}
        type="button"
      >
        ફરીથી શરૂ કરો (Reset)
      </button>
    </div>
  );
}

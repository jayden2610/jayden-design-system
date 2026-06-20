/* TimerPanel — the left column: progress ring, candle, controls, quick-time editor,
   today's stats, and the Spotify connect row. Faithful to production index.html. */
function TimerPanel({ secsLeft, total, running, mode, onToggle, onReset, work, brk, setWork, setBrk, sessions, focusMins, burn }) {
  const R = 84;
  const C = 2 * Math.PI * R;
  const pct = total > 0 ? secsLeft / total : 1;
  const offset = C * (1 - pct);
  const mm = String(Math.floor(secsLeft / 60)).padStart(2, '0');
  const ss = String(secsLeft % 60).padStart(2, '0');
  const breakMode = mode === 'break';

  return (
    <div className="timer-panel">
      <div className="ring-wrap">
        <svg className="ring-svg" viewBox="0 0 180 180">
          <circle className="ring-track" cx="90" cy="90" r={R} />
          <circle className="ring-fill" cx="90" cy="90" r={R}
            strokeDasharray={C} strokeDashoffset={offset} />
        </svg>
        <div className="ring-center">
          <div className="timer-time">{mm}:{ss}</div>
          <div className="timer-sublabel">{breakMode ? 'Break' : running ? 'Focus' : 'Ready'}</div>
        </div>
      </div>

      <div className="candle-wrap">
        <window.Candle burn={burn} breakMode={breakMode} />
        <span className="candle-sublabel">{Math.round((1 - burn) * 100)}% remaining</span>
      </div>

      <div className="controls">
        <button className="btn btn-primary" onClick={onToggle}>{running ? 'Pause' : 'Start'}</button>
        <button className="btn" onClick={onReset}>Reset</button>
      </div>

      <div className="quick-time-row">
        <div className="qte-group">
          <span className="qte-label">Focus</span>
          <input className="qte-input" type="number" value={work} min="1" max="90"
            onChange={(e) => setWork(Math.max(1, +e.target.value || 1))} disabled={running} />
        </div>
        <div className="qte-divider"></div>
        <div className="qte-group">
          <span className="qte-label">Break</span>
          <input className="qte-input" type="number" value={brk} min="1" max="30"
            onChange={(e) => setBrk(Math.max(1, +e.target.value || 1))} disabled={running} />
        </div>
      </div>

      <div className="stats-today-label">Today</div>
      <div className="stats-row">
        <div className="stat-pill"><span className="stat-pill-icon">🍅</span><span className="stat-val">{sessions}</span><span className="stat-lbl">sessions</span></div>
        <div className="stat-pill"><span className="stat-pill-icon">⏱</span><span className="stat-val">{focusMins}m</span><span className="stat-lbl">focus</span></div>
      </div>

      <div className="spotify-connect">
        <svg className="spotify-logo" width="18" height="18" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.3c-.2.36-.66.48-1 .28-2.74-1.68-6.2-2.06-10.26-1.12-.42.1-.82-.16-.92-.56-.1-.42.16-.82.58-.92 4.44-1 8.26-.58 11.32 1.3.36.2.48.66.28 1.04zm1.46-3.26c-.26.42-.82.56-1.24.3-3.14-1.92-7.92-2.5-11.62-1.36-.48.14-1-.12-1.14-.6-.14-.48.12-1 .6-1.14 4.24-1.28 9.5-.64 13.12 1.58.42.24.56.82.28 1.22zm.12-3.4C15.24 8.34 8.84 8.12 5.2 9.24c-.58.18-1.2-.16-1.36-.74-.18-.58.16-1.2.74-1.38 4.18-1.26 11.26-1 15.74 1.66.52.3.7.98.38 1.5-.3.54-.98.72-1.5.4z"/></svg>
        <span className="spotify-connect-label">Connect Spotify</span>
      </div>
    </div>
  );
}
window.TimerPanel = TimerPanel;

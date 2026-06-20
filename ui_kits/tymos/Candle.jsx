/* Candle — Tymos's signature "time spent is wax gone" visual.
   `burn` is 0..1 (0 = full candle, 1 = burned down). The flame sits on top of the wax,
   flickering; goes blue during breaks. Markup mirrors the production about.html candle. */
function Candle({ burn = 0.32, breakMode = false, width = 46, fullHeight = 120 }) {
  const W = width;
  const maxWax = fullHeight - 24;          // wax travel range
  const waxH = Math.max(14, maxWax * (1 - burn));
  const baseY = fullHeight - 4;            // candle sits on this line
  const waxTop = baseY - waxH;
  const wickTop = waxTop - 10;
  const flameBottom = waxTop;
  const flameTop = flameBottom - 15;
  const cx = W / 2;
  const bodyW = W - 14;
  const flameOuter = breakMode ? '#2a6080' : '#e8a840';
  const flameInner = breakMode ? '#5a8ca0' : '#f5d080';
  const flameGlow  = breakMode ? 'rgba(168,208,224,0.45)' : 'rgba(255,220,100,0.4)';

  return (
    <svg width={W} height={fullHeight} viewBox={`0 0 ${W} ${fullHeight}`} style={{ overflow: 'visible', display: 'block' }}>
      {/* wick */}
      <line x1={cx} y1={wickTop} x2={cx} y2={waxTop} stroke="#2e1f0d" strokeWidth="1.6" strokeLinecap="round" />
      {/* flame */}
      <g className="flame">
        <path d={`M${cx} ${flameTop} C${cx-4} ${flameTop+6} ${cx-6} ${flameTop+12} ${cx} ${flameBottom} C${cx+6} ${flameTop+12} ${cx+4} ${flameTop+6} ${cx} ${flameTop}Z`} fill={flameOuter} />
        <path d={`M${cx} ${flameTop+4} C${cx-2} ${flameTop+9} ${cx-1.5} ${flameTop+13} ${cx} ${flameBottom-1} C${cx+1.5} ${flameTop+13} ${cx+2} ${flameTop+9} ${cx} ${flameTop+4}Z`} fill={flameInner} />
        <ellipse cx={cx} cy={flameBottom-1} rx="4" ry="1.6" fill={flameGlow} />
      </g>
      {/* wax body */}
      <rect x="7" y={waxTop} width={bodyW} height={waxH} rx="6" fill="#ece4d5" stroke="rgba(120,95,65,0.25)" strokeWidth="1.2" />
      <rect x="12" y={waxTop+3} width="6" height={Math.max(0, waxH-6)} rx="3" fill="rgba(255,255,255,0.28)" />
    </svg>
  );
}
window.Candle = Candle;

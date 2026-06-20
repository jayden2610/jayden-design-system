/* TymosApp — composes the real Tymos timer screen: header, timer panel, task panel.
   Interactive: start/pause the countdown, switch to break on completion, add/complete/
   focus/delete tasks, edit focus & break lengths. State is in-memory (kit, not production). */
function TymosApp() {
  const [work, setWork] = React.useState(25);
  const [brk, setBrk] = React.useState(5);
  const [mode, setMode] = React.useState('focus');     // 'focus' | 'break'
  const [running, setRunning] = React.useState(false);
  const [secsLeft, setSecsLeft] = React.useState(25 * 60);
  const [sessions, setSessions] = React.useState(3);
  const [focusMins, setFocusMins] = React.useState(75);
  const [burn, setBurn] = React.useState(0.34);
  const [notif, setNotif] = React.useState('');

  const [tasks, setTasks] = React.useState([
    { id: 1, title: 'Finish the quarterly report', priority: 'high', est: 4, focusMins: 50, done: false },
    { id: 2, title: 'Review pull requests', priority: 'medium', est: 2, focusMins: 25, done: false },
    { id: 3, title: 'Reply to design feedback', priority: 'low', est: 1, focusMins: 0, done: false },
    { id: 4, title: 'Water the plants', priority: 'low', est: 1, focusMins: 0, done: true },
  ]);
  const [activeId, setActiveId] = React.useState(1);

  const total = (mode === 'focus' ? work : brk) * 60;

  // keep body class in sync for break theming
  React.useEffect(() => {
    document.body.classList.toggle('break', mode === 'break');
  }, [mode]);

  // reset clock when length/mode changes while paused
  React.useEffect(() => {
    if (!running) setSecsLeft((mode === 'focus' ? work : brk) * 60);
  }, [work, brk, mode]); // eslint-disable-line

  // countdown
  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSecsLeft((s) => {
        if (s <= 1) { complete(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, mode]); // eslint-disable-line

  function toast(msg) { setNotif(msg); setTimeout(() => setNotif(''), 2200); }

  function complete() {
    setRunning(false);
    if (mode === 'focus') {
      setSessions((n) => n + 1);
      setFocusMins((m) => m + work);
      setBurn((b) => Math.min(0.96, b + 0.03));
      if (activeId != null) {
        setTasks((ts) => ts.map((t) => t.id === activeId ? { ...t, focusMins: t.focusMins + work } : t));
      }
      setMode('break');
      setSecsLeft(brk * 60);
      toast('Session complete — take a break ☕');
    } else {
      setMode('focus');
      setSecsLeft(work * 60);
      toast('Break over — back to it 🍅');
    }
  }

  const toggle = () => setRunning((r) => !r);
  const reset = () => { setRunning(false); setSecsLeft(total); };

  const addTask = (title) =>
    setTasks((ts) => [...ts, { id: Date.now(), title, priority: 'medium', est: 1, focusMins: 0, done: false }]);
  const toggleDone = (id) => setTasks((ts) => ts.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  const focusTask = (id) => { setActiveId(id); toast('Now focusing on this task'); };
  const deleteTask = (id) => { setTasks((ts) => ts.filter((t) => t.id !== id)); if (id === activeId) setActiveId(null); };

  return (
    <div className="app-frame">
      <header className="header">
        <span className="logo">Tymos<span className="logo-sep">·</span><span className="logo-tag">Pomodoro Timer</span></span>
        <div className="header-actions">
          <button className="hbtn"><i className="ti ti-settings"></i> Settings</button>
          <button className="hbtn"><i className="ti ti-chart-bar"></i> Report</button>
          <button className="hbtn signed"><i className="ti ti-flame"></i> Acolyte</button>
        </div>
      </header>
      <div className="main">
        <window.TimerPanel
          secsLeft={secsLeft} total={total} running={running} mode={mode}
          onToggle={toggle} onReset={reset}
          work={work} brk={brk} setWork={setWork} setBrk={setBrk}
          sessions={sessions} focusMins={focusMins} burn={burn} />
        <div className="divider"></div>
        <window.TaskPanel
          tasks={tasks} activeId={activeId}
          onAdd={addTask} onToggleDone={toggleDone} onFocus={focusTask} onDelete={deleteTask} />
      </div>
      <div className={`notif${notif ? ' show' : ''}`}>{notif}</div>
    </div>
  );
}
window.TymosApp = TymosApp;

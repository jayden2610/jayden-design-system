/* TaskPanel — the right column: glass-tinted task list with priority bars, semantic
   priority badges, per-task focus time, and a focus tag that links a task to the timer.
   Quick-add row creates new tasks. Faithful to production index.html task cards. */
function TaskCard({ task, isActive, onToggleDone, onFocus, onDelete }) {
  const pri = task.priority;
  return (
    <div className={`task-card${task.done ? ' done' : ''}${isActive ? ' is-active-task' : ''}`}>
      <div className="task-card-header">
        <div className={`task-priority-bar pri-${pri}`}></div>
        <div className="task-cb" onClick={(e) => { e.stopPropagation(); onToggleDone(task.id); }}>
          {task.done ? <i className="ti ti-check"></i> : null}
        </div>
        <div className="task-card-body">
          <div className="task-card-title">{task.title}</div>
          <div className="task-card-meta">
            <span className={`task-badge badge-${pri}`}>{pri}</span>
            {task.focusMins > 0 ? <span className="task-focus-badge">{task.focusMins}m focus</span> : null}
            <span style={{ fontSize: 11, color: 'var(--muted)' }}>{task.est} 🍅</span>
          </div>
          {isActive
            ? <span className="focus-tag-active">focusing</span>
            : <span className="focus-tag-idle" onClick={(e) => { e.stopPropagation(); onFocus(task.id); }}><i className="ti ti-target" style={{ fontSize: 11 }}></i> focus this</span>}
        </div>
        <div className="task-card-actions">
          <button className="ghost-icon danger" onClick={(e) => { e.stopPropagation(); onDelete(task.id); }} title="Delete"><i className="ti ti-trash"></i></button>
        </div>
      </div>
    </div>
  );
}

function TaskPanel({ tasks, activeId, onAdd, onToggleDone, onFocus, onDelete }) {
  const [draft, setDraft] = React.useState('');
  const submit = () => { const t = draft.trim(); if (!t) return; onAdd(t); setDraft(''); };

  return (
    <div className="task-panel">
      <div className="task-panel-header">
        <span className="panel-title">Tasks</span>
        <button className="add-task-btn" onClick={() => document.getElementById('quickAdd')?.focus()}>
          <i className="ti ti-plus"></i> Add task
        </button>
      </div>
      <div className="task-list">
        <div className="quick-add-row">
          <i className="ti ti-circle-plus" style={{ fontSize: 18, color: 'var(--accent)' }}></i>
          <input id="quickAdd" value={draft} placeholder="What are you working on?"
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') submit(); }} />
          <span className="quick-add-hint" onClick={submit}>↵ Add</span>
        </div>
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} isActive={t.id === activeId}
            onToggleDone={onToggleDone} onFocus={onFocus} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
window.TaskPanel = TaskPanel;

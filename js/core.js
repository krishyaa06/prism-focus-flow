/* Prism Focus Flow · core logic */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.Core = api;
})(typeof self !== "undefined" ? self : this, function () {
  const PRESETS = { classic: { focus: 25, short: 5, long: 15, every: 4 }, deep: { focus: 50, short: 10, long: 30, every: 3 }, sprint: { focus: 15, short: 3, long: 10, every: 4 }, flow: { focus: 90, short: 20, long: 30, every: 2 } };
  function nextPhase(phase, completedFocus, cfg) {
    if (phase === "focus") return completedFocus > 0 && completedFocus % cfg.every === 0 ? "long" : "short";
    return "focus";
  }
  const minutes = (phase, cfg) => cfg[phase];
  function fmt(ms) { const t = Math.max(0, Math.ceil(ms / 1000)); return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`; }
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  function log(history, entry) { const k = dayKey(new Date(entry.at)); const h = { ...history }; h[k] = [...(h[k] || []), entry]; return h; }
  function summary(history, today = new Date()) {
    const days = []; let streak = 0, counting = true;
    for (let i = 0; i < 7; i++) { const d = new Date(today); d.setDate(d.getDate() - i); const k = dayKey(d); const e = (history[k] || []).filter((x) => x.phase === "focus"); days.unshift({ day: k, sessions: e.length, minutes: e.reduce((m, x) => m + x.minutes, 0) }); }
    for (let i = 0; i < 365 && counting; i++) { const d = new Date(today); d.setDate(d.getDate() - i); const n = (history[dayKey(d)] || []).filter((x) => x.phase === "focus").length; if (n) streak++; else if (i > 0) counting = false; }
    const todayStats = days[days.length - 1];
    const tasks = {}; for (const e of Object.values(history).flat()) if (e.phase === "focus" && e.task) tasks[e.task] = (tasks[e.task] || 0) + e.minutes;
    return { days, streak, today: todayStats, week: days.reduce((m, d) => m + d.minutes, 0), topTasks: Object.entries(tasks).sort((a, b) => b[1] - a[1]).slice(0, 5) };
  }
  return { PRESETS, nextPhase, minutes, fmt, dayKey, log, summary };
});

const test = require("node:test");
const assert = require("node:assert/strict");
const C = require("../js/core.js");
const cfg = C.PRESETS.classic;
test("phase cycle with long break every 4", () => {
  assert.equal(C.nextPhase("focus", 1, cfg), "short");
  assert.equal(C.nextPhase("focus", 4, cfg), "long");
  assert.equal(C.nextPhase("short", 1, cfg), "focus");
});
test("fmt", () => { assert.equal(C.fmt(25 * 6e4), "25:00"); assert.equal(C.fmt(61500), "01:02"); assert.equal(C.fmt(-1), "00:00"); });
test("summary, streak, top tasks", () => {
  const today = new Date("2026-10-26T12:00:00");
  let h = {};
  for (const d of [26, 25, 24, 22]) h = C.log(h, { at: new Date(`2026-10-${d}T10:00:00`).getTime(), phase: "focus", minutes: 25, task: d === 26 ? "api" : "ui" });
  h = C.log(h, { at: new Date("2026-10-26T11:00:00").getTime(), phase: "focus", minutes: 25, task: "api" });
  const s = C.summary(h, today);
  assert.equal(s.streak, 3); assert.equal(s.today.sessions, 2); assert.equal(s.today.minutes, 50); assert.equal(s.week, 125);
  assert.deepEqual(s.topTasks, [["ui", 75], ["api", 50]]);
});

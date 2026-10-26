(() => {
  const { $, $$, store, toast, tabs, esc } = Prism;
  let cfg = store.get("ff:cfg", { ...Core.PRESETS.classic }), hist = store.get("ff:hist", {});
  let S = store.get("ff:s", { phase: "focus", done: 0, endsAt: null, left: cfg.focus * 6e4 });
  const save = () => { store.set("ff:s", S); store.set("ff:cfg", cfg); store.set("ff:hist", hist); };
  const total = () => Core.minutes(S.phase, cfg) * 6e4;
  const remaining = () => (S.endsAt ? S.endsAt - Date.now() : S.left);
  const ding = () => { if (!$("#sound").checked) return; try { const a = new AudioContext(); [660, 880].forEach((f, i) => { const o = a.createOscillator(), g = a.createGain(); o.frequency.value = f; o.connect(g); g.connect(a.destination); const t = a.currentTime + i * .25; g.gain.setValueAtTime(.18, t); g.gain.exponentialRampToValueAtTime(.001, t + .5); o.start(t); o.stop(t + .5); }); } catch {} };
  function setPhase(p, run = false) { S.phase = p; S.left = total(); S.endsAt = run ? Date.now() + S.left : null; save(); draw(); }
  function finish() {
    ding();
    if (S.phase === "focus") { S.done++; hist = Core.log(hist, { at: Date.now(), phase: "focus", minutes: cfg.focus, task: $("#task").value.trim() }); }
    const n = Core.nextPhase(S.phase, S.done, cfg);
    toast(n === "focus" ? "Break over — back to it" : `Nice. ${n === "long" ? "Long" : "Short"} break`);
    try { if (Notification.permission === "granted") new Notification("Prism Focus Flow", { body: n === "focus" ? "Time to focus" : "Take a break" }); } catch {}
    setPhase(n, $("#auto").checked); stats();
  }
  function draw() {
    const r = remaining(); if (S.endsAt && r <= 0) return finish();
    $("#time").textContent = Core.fmt(r); $("#prog").style.strokeDashoffset = 603.2 * (r / total());
    $("#round").textContent = S.phase === "focus" ? `Round ${(S.done % cfg.every) + 1} of ${cfg.every}` : S.phase === "long" ? "Long break" : "Short break";
    $$("#phase button").forEach((b) => b.classList.toggle("on", b.dataset.v === S.phase));
    $("#go").textContent = S.endsAt ? "Pause" : r < total() ? "Resume" : "Start";
    document.title = S.endsAt ? `${Core.fmt(r)} · ${S.phase === "focus" ? "Focus" : "Break"}` : "Prism Focus Flow";
  }
  function stats() {
    const s = Core.summary(hist), max = Math.max(1, ...s.days.map((d) => d.minutes));
    $("#k-s").textContent = s.today.sessions; $("#k-m").textContent = s.today.minutes; $("#k-w").textContent = s.week;
    $("#streak").textContent = `${s.streak}-day streak`;
    $("#bars").innerHTML = s.days.map((d) => `<div title="${d.minutes} min"><i style="height:${(d.minutes / max) * 80}%"></i><small>${"SMTWTFS"[new Date(d.day + "T12:00").getDay()]}</small></div>`).join("");
    $("#top").innerHTML = s.topTasks.length ? s.topTasks.map(([t, m]) => `<div><b>${esc(t)}</b><span>${m} min</span></div>`).join("") : `<p class="muted">Name your task to see where your time goes.</p>`;
  }
  $("#go").onclick = () => { if (S.endsAt) { S.left = remaining(); S.endsAt = null; } else { S.endsAt = Date.now() + S.left; try { Notification.permission === "default" && Notification.requestPermission(); } catch {} } save(); draw(); };
  $("#skip").onclick = () => setPhase(Core.nextPhase(S.phase, S.phase === "focus" ? S.done + 1 : S.done, cfg));
  $("#rst").onclick = () => setPhase(S.phase);
  tabs($("#phase"), (v) => setPhase(v));
  $("#presets").innerHTML = Object.entries(Core.PRESETS).map(([k, p]) => `<button data-p="${k}">${k} ${p.focus}/${p.short}</button>`).join("");
  $$("#presets button").forEach((b) => (b.onclick = () => { cfg = { ...Core.PRESETS[b.dataset.p] }; fillCfg(); setPhase(S.phase); }));
  const fillCfg = () => ["focus", "short", "long", "every"].forEach((k) => ($(`#c-${k}`).value = cfg[k]));
  ["focus", "short", "long", "every"].forEach((k) => ($(`#c-${k}`).onchange = (e) => { cfg[k] = Math.max(1, +e.target.value || 1); if (!S.endsAt) S.left = total(); save(); draw(); }));
  $("#task").value = store.get("ff:task", ""); $("#task").oninput = (e) => store.set("ff:task", e.target.value);
  document.addEventListener("keydown", (e) => { if (e.key === " " && !e.target.closest("input")) { e.preventDefault(); $("#go").click(); } });
  window.prismFocus = { hist: () => hist, set: (h) => { hist = h; save(); stats(); } };
  fillCfg(); draw(); stats(); setInterval(draw, 250);
})();

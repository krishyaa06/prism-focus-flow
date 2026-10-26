<!-- ═════════════ HEADER ═════════════ -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:07060f,50:FF6B9A,100:B388FF&height=200&section=header&text=Prism%20Focus%20Flow&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Pomodoro%20timer%20with%20stats%20%26%20streaks&descAlignY=58&descSize=16" width="100%" alt="Prism Focus Flow" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=19&duration=2600&pause=800&color=FF6B9A&center=true&vCenter=true&width=680&lines=25%3A00+%C2%B7+Round+2+of+4;3-day+focus+streak;Where+did+my+time+go%3F;Space+to+start+%2F+pause" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/krishyaa06/prism-focus-flow/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/krishyaa06/prism-focus-flow/ci.yml?branch=main&style=for-the-badge&label=CI&logo=githubactions&logoColor=white" alt="CI" /></a>
  <a href="https://krishyaa06.github.io/prism-focus-flow/"><img src="https://img.shields.io/badge/Live_Demo-Open-FF6B9A?style=for-the-badge&logo=githubpages&logoColor=black" alt="Live demo" /></a>
  <img src="https://img.shields.io/badge/Vanilla-HTML%20%7C%20CSS%20%7C%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/dependencies-0-FF6B9A?style=for-the-badge" alt="Zero dependencies" />
  <a href="LICENSE"><img src="https://img.shields.io/github/license/krishyaa06/prism-focus-flow?style=for-the-badge&color=B388FF" alt="License" /></a>
</p>

<p align="center">
  <img src="assets/screenshots/desktop.png" width="90%" alt="Prism Focus Flow screenshot" />
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" width="100%" alt="" />

## ⚡ Overview

**Prism Focus Flow** is a Pomodoro timer built for coding sessions. Pick a preset (classic 25/5, deep 50/10, sprint 15/3, flow 90/20) or set your own, name the task you're on, and let it cycle between focus, short and long breaks. Completed sessions are logged locally, so you get today's totals, a 7-day chart, a streak and the tasks you spent the most time on. Timing is based on timestamps, so it doesn't drift in background tabs and survives reloads.

## ✨ Features

- **Focus / short / long** cycles with configurable long-break interval
- **4 presets** + custom minutes; optional auto-start
- **Progress ring**, live tab-title countdown, chime + desktop notification
- **Stats**: today, this week, 7-day bar chart, daily streak
- **Task tracking** — top tasks by focus minutes
- Drift-free timestamps, state saved locally; `Space` to start/pause

## 📸 Screenshots

<table>
  <tr>
    <td width="68%"><img src="assets/screenshots/desktop.png" width="100%" alt="Prism Focus Flow on desktop" /></td>
    <td width="32%"><img src="assets/screenshots/mobile.png" width="100%" alt="Prism Focus Flow on mobile" /></td>
  </tr>
</table>

## 🚀 Quick Start

**Use it online:** [https://krishyaa06.github.io/prism-focus-flow/](https://krishyaa06.github.io/prism-focus-flow/)

**Run locally:**

```bash
git clone https://github.com/krishyaa06/prism-focus-flow.git
cd prism-focus-flow
# open index.html in your browser, or serve it:
npx serve .
```

## 🛠️ Usage

Type what you're working on, press **Start** (or `Space`). When the ring empties you'll hear a chime and move to a break. Change presets or minutes under **Settings**.

## 📁 Project Structure

```text
prism-focus-flow/
├── assets/
│   ├── logo.png
│   └── logo.svg
├── css/
│   ├── app.css
│   └── prism.css
├── js/
│   ├── app.js   # timer loop, notifications, charts
│   ├── core.js   # cycle logic, formatting, stats — tested in Node
│   └── prism.js
├── test/
│   └── core.test.js
├── .gitignore
├── LICENSE
├── README.md
├── index.html
└── package.json
```

## 🧪 Tests

```bash
npm test
```

Tests use the built-in `node:test` runner, so there is nothing to install. CI runs them on Node 20 and 22.

## 🤝 Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-idea`
2. Make your change and add a test in `test/`
3. Run `npm test` and open a Pull Request

## 🔷 Part of Prism Protocol

Prism Focus Flow is one of the open-source tools built by [Prism Protocol](https://dc.gg/prismprotocol), a tech community where young builders learn, ship and compete together.

## 👤 Author

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/krishyaa06"><img src="https://github.com/krishyaa06.png" width="90" style="border-radius:50%" alt="Soumya Bhandare" /><br><b>Soumya Bhandare</b></a><br>
      <sub>Founder @ Prism Protocol</sub>
    </td>
    <td>
      <a href="https://dc.gg/prismprotocol"><img src="https://img.shields.io/badge/Discord-Prism%20Protocol-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a><br>
      <a href="https://instagram.com/prism_protocol_"><img src="https://img.shields.io/badge/Instagram-@prism__protocol__-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a><br>
      <a href="https://x.com/krishyaa06"><img src="https://img.shields.io/badge/X-@krishyaa06-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" /></a>
    </td>
  </tr>
</table>

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">
  <b>If you like this project, consider giving it a ⭐</b><br>
  <sub>"Build. Create. Compete." · Made with ⚡ by Prism Protocol</sub>
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:B388FF,50:FF6B9A,100:07060f&height=110&section=footer" width="100%" alt="" />

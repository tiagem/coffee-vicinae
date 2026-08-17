<p align="center">
  <img src="./.github/assets/logo.png" width="200" height="200" />
</p>

# Coffee

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

Keep your machine awake from the launcher — indefinitely, for a duration, until a time, while an app is running, or on a weekly schedule.

Coffee is a [Vicinae](https://vicinae.com) extension for Linux and macOS, ported from the [Raycast Coffee extension](https://github.com/raycast/extensions/tree/00440c429c10952b393d21dfc56c4c23bab9e9a9/extensions/coffee/). Use the dashboard, or run a no-view command to stay awake, stop, or toggle.

## Features

- Stay awake indefinitely, for a duration (`45m`, `1h30m`), until a time (`5pm`), or while an app is running
- Weekly schedules, including overnight ranges (`22:00`–`02:00`)
- Native inhibit: `caffeinate` on macOS, `systemd-inhibit` on Linux — the kernel drops the lock when time is up
- One dashboard for remaining time, backend, and today's schedules
- Manual decaf skips this occurrence; pause turns the schedule off until you resume it

## Getting started

1. Run **Coffee** for the dashboard: status, quick durations, and today's schedules.
2. Or run **Caffeinate**, **Decaffeinate**, or **Toggle Caffeination** from root search.
3. Enable **Caffeination Status** so weekly windows can start while Vicinae is running.

Schedule examples: `weekdays 09:00 to 17:30`, `saturday and sunday 20:00 to 23:30`, `everyday except tuesday 13:00-20:00`.

## Commands

- **Coffee** – Dashboard: status, quick durations, today's schedules
- **Caffeinate** – Stay awake until you decaffeinate
- **Decaffeinate** – Allow sleep again
- **Toggle Caffeination** – Flip the current state
- **Caffeinate For** – Presets (15m–2h) or a duration argument
- **Caffeinate Until** – Argument like `5pm` / `17:30`, or a date picker
- **Caffeinate While** – Stay awake until the selected process exits
- **Schedule Caffeination** – Form or natural language
- **Caffeination Status** – HUD + subtitle; also the 1-minute schedule tick

## Preferences

- **Prevent display sleep** — idle inhibit / `caffeinate -d`
- **Prevent system sleep** — sleep inhibit / `caffeinate -i`
- **Prevent lid-close sleep (Linux)** — ignored on macOS
- **Prevent disk sleep (macOS)** — `caffeinate -m`; ignored on Linux

## Installation

Install and start [Vicinae](https://docs.vicinae.com/), then:

```bash
git clone https://github.com/TiageMiguel/coffee-vicinae.git
cd coffee-vicinae
npm install
npm run build
```

Use `npm run dev` while Vicinae is running if you are working on the extension.

See the [Vicinae extension docs](https://docs.vicinae.com/extensions/create) for more detail.

## Contributing

Open an issue or a pull request.

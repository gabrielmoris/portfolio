---
title: Demosratio
slug: demosratio
summary: Checks whether Spanish political parties keep their election promises by matching every vote in Congress against their programmes with AI.
date: 2025-02
role: Solo developer (design, frontend, backend, data pipeline)
tech:
  [
    Figma,
    Next.js,
    TypeScript,
    Supabase,
    PostgreSQL,
    Gemini API,
    Vercel Cron,
    next-intl,
    Chart.js,
    Tailwind CSS,
    Vitest,
  ]
cover: null # TODO: add a screenshot to content/images
links:
  live: https://demosratio.vercel.app
  repo: https://github.com/gabrielmoris/Demosratio
featured: true
lang: en
---

## Problem

Citizens rarely get a clear, neutral view of what parties promised before an election and how they actually vote afterwards. That information usually reaches them through the press, already filtered, and the official sources (party programmes as PDFs, the Congress website) are hard to read and harder to compare.

## What I built

A full-stack platform that collects Spanish election promises and parliamentary votes, links each one to its official source, and uses AI to connect the two.

- **Automated vote import:** a daily Vercel cron job scrapes the votes of the Spanish Congress, stores each vote per party, and saves point-by-point votes as separate proposals.
- **AI promise analysis:** every new vote is checked with Gemini against the promises of the parties in that legislature, so each promise shows whether the party's votes support or contradict it.
- **Promise extraction from programmes:** admins paste the link to a party's programme PDF, and Gemini drafts up to five promises per policy area. An admin reviews and edits the drafts before anything is saved.
- **Plain-language summaries:** for each vote, the app finds the official initiative on congreso.es, reads its PDF and explains in a few lines what was voted and what a Yes or No means.
- **Exploration:** congress votes with full-text search, promises grouped by policy area ("Temas"), a party voting-alignment matrix, interactive charts per vote and a dashboard per party.
- **Participation:** user accounts, mock votes on real proposals, and an admin panel where every database table can be managed without SQL.

## Decisions and trade-offs

- **Ground the AI in official sources only.** Gemini reads the programme or initiative PDF itself through its URL-context tool, so the server never downloads or stores PDFs. If Gemini reports that it couldn't read the document, the answer is discarded: promises and summaries can only come from the official text. Output uses a strict JSON schema, and unknown policy areas are dropped in code.
- **Prefer nothing over something wrong.** A vote only gets a plain-language summary when the search finds one clear matching initiative of the expected type. Otherwise it is marked `no_match` and shows no summary.
- **Built for the free tier.** All Gemini calls go through one client that spaces requests 12 seconds apart (5 requests per minute), honours the retry delay on a 429, retries 5xx errors with backoff and stops cleanly when the daily quota runs out. Each cron run stops starting new work well before the function time limit, and unprocessed votes are picked up by the next run.
- **Analyse before saving.** A vote is only saved after its promise analysis succeeds, so a failed run leaves nothing half-done and the next run retries it.
- **Scope analysis to the legislature.** A vote is only compared with the promises made for that legislature, never the previous election's. Votes that arrive before a legislature's promises are loaded are kept as `pending` and analysed by a separate cron job later.
- **Security hardening.** JWT authentication with an authorization middleware, input validation on every API route, and several rounds of fixes for critical and high-severity issues.

## Results

- Live at demosratio.vercel.app, with three daily cron jobs keeping votes, analyses and summaries up to date.
- 300+ commits across 75+ pull requests since February 2025, with Vitest unit tests, Husky pre-commit linting and written docs for the architecture, API, auth, database, AI and i18n.
- Developed AI-first, with agent instructions (CLAUDE.md, Agents.md) and a codebase knowledge graph to keep coding agents on track.

TODO: real usage numbers if you have them (votes analysed, promises tracked, visitors).

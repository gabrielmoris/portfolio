---
title: Manuel Casares
slug: manuel-casares
summary: Website for a concert pianist and teacher, with his recordings, videos pulled live from YouTube and a contact form for lessons.
date: 2022-03-01
role: Freelance designer and web developer
tech:
  [Figma, Next.js, React, TypeScript, Sass, React Hook Form, YouTube Data API]
links:
  live: https://www.manuelcasares.com
  repo: https://github.com/gabrielmoris/Manuel-Casares
featured: false
lang: en
---

## Problem

A concert pianist and piano teacher needed one place to present his biography and repertoire, show his performances, sell lessons and point visitors to his shop, mentorship programme and social channels.

## What I built

A multi-page website for a freelance client:

- **Biography:** the pianist's story and background.
- **Repertoire:** his concert repertoire with more than 20 audio recordings in a custom audio player, including a concertos section.
- **Media:** his latest videos and concert recordings, loaded from his YouTube playlists through the YouTube Data API.
- **Lessons:** a contact form, built with React Hook Form, for students to request lessons.
- **Links out:** his online shop, mentorship platform, YouTube, Instagram, Twitch and Discord.

## Decisions and trade-offs

- **YouTube as the content source.** Videos come straight from the client's playlists, so new uploads appear on the site without anyone touching the code.
- **A custom audio player.** Recordings play inline in the repertoire list, and the player closes when you click outside it, so visitors can browse pieces quickly.
- **Long-term maintenance.** I kept updating the site after launch as the client's needs changed, for example a new email form, a different video order and a rewritten biography in 2024, and replacing the deprecated `node-sass` package in 2025.

## Results

- Launched in 2022 and maintained for the client since, across almost 70 commits.
- TODO: anything the client gained from it (lesson requests, shop traffic).

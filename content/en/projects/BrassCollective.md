---
title: The Brass Collective
slug: brass-collective
summary: Website for The Brass Collective, a Berlin brass quintet dedicated to contemporary music, which I led.
date: 2021-10-01
role: Designer (logo and website) and developer, and the band's trumpet player
tech: [Figma, HTML, CSS, JavaScript, GitHub Pages]
cover:
  image: brasscollective
  alt: The Brass Collective logo
links:
  live: https://www.thebrasscollective.com
  repo: https://github.com/gabrielmoris/www.thebrasscollective.com
featured: false
lang: en
---

## Problem

The Brass Collective, a quintet founded in Berlin in 2020 with chamber musicians from three continents, promotes contemporary composers from diverse backgrounds. The group needed a website to enter a competition, and a home online to present its members, concerts, recordings and merchandise to promoters and audiences. My cousin, a software engineer, didn't have time to build it, so he showed me how to build it myself.

## What I built

The ensemble's visual identity and website: I designed the logo, then a multi-page static site for concert updates, videos and the CD release:

- **Home:** introduction to the ensemble and a banner for the CD release.
- **About us:** biographies of the musicians, kept up to date as the line-up changed.
- **Events:** upcoming and past concerts.
- **Media:** embedded videos and a Spotify player with the album.
- **Merchandise:** the CD, with a clickable cover.
- **Contact:** how to book the ensemble.

## Decisions and trade-offs

- **Designed in Figma first.** I designed the pages in Figma before building them, so layout decisions were made in the design rather than in the HTML.
- **Plain HTML and CSS, no framework.** The site is mostly static content that changes a few times a year, so a framework would have added build steps and maintenance without benefit.
- **Hosted on GitHub Pages with a custom domain.** No hosting cost for a small ensemble's budget.
- **Changes through pull requests.** Even as a band website, updates such as the CD release banner went through branches and pull requests, with feedback from the other members built in.

## Results

- Maintained from 2021 to 2023 across almost 50 commits, as the line-up, repertoire and releases changed.
- My first web project, and the one that made me switch careers: I enjoyed building it so much that I kept learning and went on to a full-stack bootcamp.

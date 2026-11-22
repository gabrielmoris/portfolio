---
title: Manuel Casares
summary: Website für einen Konzertpianisten und Lehrer mit seinen Aufnahmen, live von YouTube geladenen Videos und einem Kontaktformular für Unterricht.
date: 2022-03-01
role: Freiberuflicher Designer und Webentwickler
tech:
  [Figma, Next.js, React, TypeScript, Sass, React Hook Form, YouTube Data API]
links:
  live: https://www.manuelcasares.com
  repo: https://github.com/gabrielmoris/Manuel-Casares
featured: false
lang: de
---

## Problem

Ein Konzertpianist und Klavierlehrer brauchte einen zentralen Ort, um seine Biografie und sein Repertoire zu präsentieren, seine Auftritte zu zeigen, Unterricht zu verkaufen und Besucher zu seinem Shop, Mentoring-Programm und seinen Social-Media-Kanälen zu führen.

## Was ich gebaut habe

Eine mehrseitige Website für einen freiberuflichen Kunden:

- **Biografie:** die Geschichte und der Werdegang des Pianisten.
- **Repertoire:** sein Konzertrepertoire mit mehr als 20 Audioaufnahmen in einem eigenen Audioplayer, einschließlich eines Bereichs für Konzerte.
- **Medien:** seine neuesten Videos und Konzertaufnahmen, über die YouTube Data API aus seinen YouTube-Playlists geladen.
- **Unterricht:** ein mit React Hook Form gebautes Kontaktformular, über das Schüler Unterricht anfragen können.
- **Externe Links:** sein Online-Shop, seine Mentoring-Plattform, YouTube, Instagram, Twitch und Discord.

## Entscheidungen und Abwägungen

- **YouTube als Inhaltsquelle.** Die Videos kommen direkt aus den Playlists des Kunden, sodass neue Uploads auf der Website erscheinen, ohne dass jemand den Code anfassen muss.
- **Ein eigener Audioplayer.** Aufnahmen werden direkt in der Repertoireliste abgespielt, und der Player schließt sich beim Klick außerhalb, sodass Besucher schnell durch die Stücke stöbern können.
- **Langfristige Wartung.** Ich habe die Website nach dem Start weiter aktualisiert, wenn sich die Anforderungen des Kunden änderten, etwa mit einem neuen E-Mail-Formular, einer anderen Videoreihenfolge und einer überarbeiteten Biografie 2024 sowie dem Ersatz des veralteten Pakets `node-sass` 2025.

## Ergebnisse

- 2022 gestartet und seitdem für den Kunden gepflegt, mit fast 70 Commits.
- TODO: anything the client gained from it (lesson requests, shop traffic).

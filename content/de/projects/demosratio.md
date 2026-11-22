---
title: Demosratio
slug: demosratio
summary: Prüft mit KI, ob spanische Parteien ihre Wahlversprechen halten, indem jede Abstimmung im Kongress mit ihren Wahlprogrammen abgeglichen wird.
date: 2025-02-01
role: Alleinentwickler (Design, Frontend, Backend, Datenpipeline)
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
links:
  live: https://demosratio.vercel.app
  repo: https://github.com/gabrielmoris/Demosratio
featured: true
lang: de
---

## Problem

Bürgerinnen und Bürger bekommen selten einen klaren, neutralen Überblick darüber, was Parteien vor einer Wahl versprochen haben und wie sie danach tatsächlich abstimmen. Diese Informationen erreichen sie meist bereits gefiltert über die Presse, und die offiziellen Quellen (Parteiprogramme als PDF, die Website des Kongresses) sind schwer zu lesen und noch schwerer zu vergleichen.

## Was ich gebaut habe

Eine Full-Stack-Plattform, die spanische Wahlversprechen und Parlamentsabstimmungen sammelt, jeden Eintrag mit seiner offiziellen Quelle verknüpft und beides mithilfe von KI verbindet.

- **Automatischer Import der Abstimmungen:** Ein täglicher Vercel-Cronjob liest die Abstimmungen des spanischen Kongresses aus, speichert jede Stimme pro Partei und legt Einzelabstimmungen als separate Vorschläge ab.
- **KI-Analyse der Versprechen:** Jede neue Abstimmung wird mit Gemini gegen die Versprechen der Parteien in dieser Legislaturperiode geprüft, sodass jedes Versprechen zeigt, ob die Stimmen der Partei es stützen oder ihm widersprechen.
- **Extraktion von Versprechen aus Programmen:** Admins fügen den Link zum PDF eines Parteiprogramms ein, und Gemini entwirft bis zu fünf Versprechen pro Politikfeld. Ein Admin prüft und bearbeitet die Entwürfe, bevor etwas gespeichert wird.
- **Zusammenfassungen in einfacher Sprache:** Zu jeder Abstimmung sucht die App die offizielle Initiative auf congreso.es, liest deren PDF und erklärt in wenigen Zeilen, worüber abgestimmt wurde und was ein Ja oder Nein bedeutet.
- **Erkunden:** Kongressabstimmungen mit Volltextsuche, nach Politikfeldern gruppierte Versprechen („Temas“), eine Matrix zur Abstimmungsnähe der Parteien, interaktive Diagramme pro Abstimmung und ein Dashboard pro Partei.
- **Beteiligung:** Nutzerkonten, Probeabstimmungen über echte Vorschläge und ein Admin-Panel, in dem sich jede Datenbanktabelle ohne SQL verwalten lässt.

## Entscheidungen und Abwägungen

- **KI nur auf offizielle Quellen stützen.** Gemini liest das PDF des Programms oder der Initiative selbst über sein URL-Context-Tool, sodass der Server nie PDFs herunterlädt oder speichert. Meldet Gemini, dass es das Dokument nicht lesen konnte, wird die Antwort verworfen: Versprechen und Zusammenfassungen dürfen nur aus dem offiziellen Text stammen. Die Ausgabe folgt einem strikten JSON-Schema, und unbekannte Politikfelder werden im Code verworfen.
- **Lieber nichts als etwas Falsches.** Eine Abstimmung erhält nur dann eine Zusammenfassung, wenn die Suche genau eine passende Initiative des erwarteten Typs findet. Andernfalls wird sie als `no_match` markiert und zeigt keine Zusammenfassung.
- **Für das kostenlose Kontingent gebaut.** Alle Gemini-Aufrufe laufen über einen Client, der Anfragen im Abstand von 12 Sekunden sendet (5 pro Minute), die Retry-Verzögerung bei einem 429 beachtet, 5xx-Fehler mit Backoff wiederholt und sauber stoppt, wenn das Tageskontingent aufgebraucht ist. Jeder Cron-Lauf startet deutlich vor dem Zeitlimit der Funktion keine neue Arbeit mehr, und unverarbeitete Abstimmungen übernimmt der nächste Lauf.
- **Erst analysieren, dann speichern.** Eine Abstimmung wird erst gespeichert, wenn ihre Versprechensanalyse erfolgreich war. So hinterlässt ein fehlgeschlagener Lauf nichts Halbfertiges, und der nächste Lauf versucht es erneut.
- **Analyse auf die Legislaturperiode begrenzen.** Eine Abstimmung wird nur mit den Versprechen für diese Legislaturperiode verglichen, nie mit denen der vorherigen Wahl. Abstimmungen, die eintreffen, bevor die Versprechen einer Legislaturperiode geladen sind, bleiben als `pending` erhalten und werden später von einem eigenen Cronjob analysiert.
- **Sicherheitshärtung.** JWT-Authentifizierung mit Autorisierungs-Middleware, Eingabevalidierung auf jeder API-Route und mehrere Runden von Korrekturen für kritische und schwerwiegende Probleme.

## Ergebnisse

- Live unter demosratio.vercel.app, mit drei täglichen Cronjobs, die Abstimmungen, Analysen und Zusammenfassungen aktuell halten.
- Über 300 Commits in mehr als 75 Pull Requests seit Februar 2025, mit Vitest-Unit-Tests, Husky-Pre-Commit-Linting und schriftlicher Dokumentation zu Architektur, API, Auth, Datenbank, KI und i18n.
- AI-first entwickelt, mit Agenten-Anweisungen (CLAUDE.md, Agents.md) und einem Wissensgraphen der Codebasis, damit Coding-Agenten auf Kurs bleiben.

TODO: real usage numbers if you have them (votes analysed, promises tracked, visitors).

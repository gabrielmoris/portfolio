---
title: Refhub
summary: Ein mehrsprachiger Hub zum Teilen und Entdecken von Empfehlungscodes, im Web und als Android-App bei Google Play.
date: 2024-09-01
role: Alleinentwickler (Produkt, Design, Web und Android)
tech:
  [
    Figma,
    Next.js,
    TypeScript,
    Firebase,
    Firestore,
    next-intl,
    PWA,
    Capacitor,
    Android,
    PayPal,
    Google AdSense,
    Tailwind CSS,
  ]
links:
  live: https://refhub.gabrielcmoris.com
  android: https://play.google.com/store/apps/details?id=com.gcm.refhub
  repo: https://github.com/gabrielmoris/refhub
  repoAndroid: https://github.com/gabrielmoris/refhub-android
featured: true
lang: de
---

## Problem

Viele Dienste belohnen Nutzer dafür, andere mit einem Empfehlungscode einzuladen, aber diese Codes liegen verstreut in Foren und sozialen Medien. Wer ein Angebot sucht, findet keinen funktionierenden Code, und wer einen Code hat, findet keinen Ort, an dem er gesehen wird.

## Was ich gebaut habe

Ein öffentlicher Hub für Empfehlungscodes, im Web und auf Android:

- **Codes teilen und entdecken:** Angemeldete Nutzer fügen einen Code mit Link, Prämien, Anleitung, Ablaufdatum, Tags und Sprache hinzu. Alle können die öffentliche Liste nach Tag und Sprache durchsuchen.
- **Konten:** Google-Anmeldung, ein Profil zum Bearbeiten oder Löschen der eigenen Codes und eine Kontolöschung, die alle eigenen Daten entfernt.
- **Boosting:** Nutzer können einen Code an die Spitze der Liste bringen. Das begann als PayPal-Zahlung und wurde später kostenlos im Tausch gegen die Einladung eines Freundes über den nativen Teilen-Dialog.
- **Statistiken:** Jeder Code zeigt seine Aufrufe und Klicks.
- **Community-Moderation:** Nutzer können einen Code als defekt oder Spam melden. Sobald mehr als fünf Personen ihn melden, wird er automatisch deaktiviert.
- **Drei Sprachen:** Die gesamte Oberfläche ist mit next-intl auf Englisch, Deutsch und Spanisch verfügbar, und Codes sind nach Sprache getaggt.
- **Android-App bei Google Play:** die mit Capacitor verpackte Web-App, mit nativer Google-Anmeldung und nativem Teilen.

## Entscheidungen und Abwägungen

- **Eine Codebasis für Web und Android.** Statt einer nativen App ist die Android-App eine Capacitor-Hülle um die deployte PWA, sodass ein Web-Release beide aktualisiert. Der Preis ist ein eigenes Repository für die native Konfiguration und das Einhalten der Play-Store-Anforderungen, etwa der Umstieg auf Target SDK 36.
- **Firebase als Backend.** Mit Firestore und Firebase Auth konnte eine einzelne Person Konten, Daten und Sicherheitsregeln ausliefern, ohne einen Server zu betreiben. Zähler nutzen atomare `increment()`-Updates, und Aufrufe werden einmal pro Sitzung gezählt, damit Re-Renders und gecachte Seiten sie nicht aufblähen.
- **Moderation durch die Community, nicht durch mich.** Ein Meldeschwellenwert hält Spam ohne manuelle Prüfwarteschlange fern, und jeder Nutzer kann einen Code nur einmal melden.
- **Monetarisierung, die sich mit den Daten änderte.** Zuerst gab es bezahlte Boosts über PayPal und ein In-App-Purchase-SDK. Als sie nicht genutzt wurden, entfernte ich das SDK (und damit die beim Upgrade empfindlichste Abhängigkeit), machte Boosting über Einladungen kostenlos und behielt Werbung sowie eine optionale Spende.
- **SEO für eine Content-Website.** Serverseitig gerenderte Hub-Seiten pro Dienst und Sprache, strukturierte Daten (JSON-LD), `noindex` auf der Login-Seite, dünne Seiten außerhalb des Index und von der Liste verlinkte Teilen-Seiten, damit Suchmaschinen die Codes finden.
- **Datenschutz und Performance.** Ein Cookie-Consent-Banner steuert Werbung und Analytics, und Empfehlungskarten außerhalb des sichtbaren Bereichs nutzen `content-visibility`, damit lange Listen auf Handys schnell bleiben.

## Ergebnisse

- Seit 2024 live im Web und bei Google Play, zwei Jahre lang gepflegt mit mehr als 220 Commits in beiden Repositories.
- TODO: real numbers if you have them (users, codes shared, installs).

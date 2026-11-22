---
title: MenuDiario
slug: menu-diario
summary: >-
  Mobile App für Spaniens „menú del día“: Gäste finden Restaurants in der Nähe und das Tagesmenü auf einer Karte, Restaurants veröffentlichen Menüs mit Prepaid-Guthaben.
date: 2023-03-01
role: Mitentwickler in einem Zweierteam (Design, Full-Stack und Mobile) # TODO: name your teammate if you want to
tech:
  [
    Figma,
    Next.js,
    React,
    TypeScript,
    Capacitor,
    iOS,
    Android,
    Firebase,
    Cloud Functions,
    Stripe,
    Mapbox,
    Tailwind CSS,
  ]
cover:
  image: menudiario
  alt: App-Symbol von MenuDiario, Gabel und Messer auf einer rot-weiß karierten Tischdecke
links:
  android: https://play.google.com/store/apps/details?id=com.menudiario.app
  ios: https://apps.apple.com/es/app/menu-di%C3%A1rio/id6467143567
  repo: https://github.com/gabrielmoris/menudiario
featured: true
lang: de
---

## Problem

In Spanien bieten viele Restaurants ein „menú del día“ an: ein Mittagessen zum Festpreis mit Vorspeise, Hauptgang, Dessert und Getränk, das sich täglich ändert. Gäste können die heutigen Menüs in der Nähe nicht einfach einsehen, und Restaurants kündigen sie meist nur auf einer Tafel vor der Tür an.

## Was ich gebaut habe

Eine plattformübergreifende App (iOS, Android und Web) mit zwei Seiten:

- **Für Gäste:** eine Karte mit Restaurants in der Nähe auf Basis des Handy-Standorts, jeweils mit dem heutigen Menü (Gerichte, Preis, Servierzeiten, ob Getränk und Kaffee inbegriffen sind), Fotos und Details wie Parkplatz oder Terrasse. Gäste können Favoriten speichern und ein Restaurant teilen.
- **Für Restaurants:** Registrierung mit der Steuernummer des Unternehmens, ein Profil und ein Formular, um das Tagesmenü oder ein Spezialmenü mit Fotos zu veröffentlichen.
- **Guthaben und Zahlungen:** Restaurants veröffentlichen Menüs mit vorausbezahlten Coins. Neue Restaurants erhalten 20 kostenlose Menüs, weitere Coins werden in der App mit Stripe gekauft.
- **Konten:** Registrierung, Login, Passwort-Reset und Kontolöschung, mit klaren Fehlermeldungen für jeden Authentifizierungsfehler.

## Entscheidungen und Abwägungen

- **Eine Codebasis für drei Plattformen.** Die App ist ein statischer Next.js-Export, der mit Capacitor verpackt wird. So läuft derselbe React-Code auf iOS, Android und im Web, und native Funktionen (Standort, Teilen-Dialog, Statusleiste) kommen aus Capacitor-Plugins. Der Preis: kein serverseitiges Rendering und native Builds, die aktuell gehalten werden müssen, etwa beim Upgrade auf Capacitor 5 und Android SDK 33.
- **Geheime Schlüssel bleiben auf dem Server.** Eine Firebase Cloud Function erstellt den Stripe Payment Intent, sodass die App nie einen geheimen Schlüssel enthält. Die App schreibt die Coins gut, sobald Stripe die Kartenzahlung bestätigt. Im Nachhinein würde ich diesen Schritt in einen Stripe-Webhook verlagern, damit sich der Client nicht selbst Guthaben geben kann.
- **Firebase als Backend.** Auth, Firestore und Storage gaben einem kleinen Team Konten, Daten und Bild-Uploads, ohne Server betreiben zu müssen.
- **Guthaben statt Abonnements.** Die Bezahlung pro veröffentlichtem Menü passt dazu, wie oft ein Restaurant die App tatsächlich nutzt, und die kostenlosen Menüs lassen Restaurants sie vor dem Bezahlen ausprobieren.
- **Natives Gefühl auf dem Web-Stack.** Overscroll- und Glow-Effekte wurden deaktiviert und die Kartengesten so korrigiert, dass sich das Ziehen nach dem Zoomen wie bei einer nativen Karte verhält.
- **Team-Workflow.** Zwei Entwickler arbeiteten mit Feature-Branches, Pull Requests mit Vorlage und Reviews: mehr als 40 Pull Requests in sechs Monaten.

## Ergebnisse

- Von März bis September 2023 gebaut, vom ersten Commit bis zu echten Stripe-Zahlungen und iOS- und Android-Builds, mit fast 270 Commits.
- Bei Google Play und im App Store veröffentlicht.
- TODO: did restaurants use it? Any numbers (restaurants, downloads)?

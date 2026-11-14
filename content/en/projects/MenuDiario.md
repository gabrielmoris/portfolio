---
title: MenuDiario
slug: menu-diario
summary: A mobile app for Spain's "menú del día": diners find nearby restaurants and today's set menu on a map, and restaurants publish their menus with prepaid credits.
date: 2023-03
role: Co-developer in a team of two (design, full stack and mobile) # TODO: name your teammate if you want to
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
cover: menudiario
links:
  android: https://play.google.com/store/apps/details?id=com.menudiario.app
  ios: https://apps.apple.com/es/app/menu-di%C3%A1rio/id6467143567
  repo: https://github.com/gabrielmoris/menudiario
featured: true
lang: en
---

## Problem

In Spain, many restaurants offer a "menú del día": a fixed-price lunch with a starter, a main course, dessert and a drink that changes every day. Diners have no easy way to see today's menus nearby, and restaurants usually only announce them on a board outside the door.

## What I built

A cross-platform app (iOS, Android and web) with two sides:

- **For diners:** a map of nearby restaurants based on the phone's location, each with today's menu (dishes, price, serving times, drink and coffee included or not), photos, and details such as parking or a terrace. Diners can save favourites and share a restaurant.
- **For restaurants:** registration with the company's tax ID, a profile, and a form to publish the daily menu or a special menu with photos.
- **Credits and payments:** restaurants publish menus with prepaid coins. New restaurants get 20 free menus, and more coins are bought in the app with Stripe.
- **Accounts:** sign-up, login, password reset and account deletion, with clear error messages for each authentication failure.

## Decisions and trade-offs

- **One codebase for three platforms.** The app is a Next.js static export wrapped with Capacitor, so the same React code runs on iOS, Android and the web, and native features (geolocation, share sheet, status bar) come from Capacitor plugins. The cost: no server-side rendering, and native builds to keep up to date, such as the upgrade to Capacitor 5 and Android SDK 33.
- **Secret keys stay on the server.** A Firebase Cloud Function creates the Stripe payment intent, so the app never holds a secret key. The app adds the coins once Stripe confirms the card payment. In hindsight, I'd move that step into a Stripe webhook, so the client can't grant itself credits.
- **Firebase as the backend.** Auth, Firestore and Storage gave a small team accounts, data and image uploads without running servers.
- **Credits instead of subscriptions.** Paying per published menu matches how often a restaurant actually uses the app, and the free menus let restaurants try it before paying.
- **A native feel on the web stack.** Overscroll and glow effects were disabled, and map gestures were fixed so dragging after zooming behaves like a native map.
- **Team workflow.** Two developers working through feature branches, pull requests with a template, and reviews: 40+ pull requests in six months.

## Results

- Built from March to September 2023, from first commit to live Stripe payments and iOS and Android builds, across almost 270 commits.
- Published on Google Play and the App Store.
- TODO: did restaurants use it? Any numbers (restaurants, downloads)?

---
title: Refhub
slug: refhub
summary: A multilingual hub where people share and discover referral codes, available on the web and as an Android app on Google Play.
date: 2024-09-01
role: Solo developer (product, design, web and Android)
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
lang: en
---

## Problem

Many services reward users for inviting others with a referral code, but those codes end up scattered across forums and social media. People who want a deal can't find a working code, and people with a code have nowhere to get it seen.

## What I built

A public referral-code hub, on the web and on Android:

- **Share and discover codes:** signed-in users add a code with its link, rewards, instructions, expiry date, tags and language. Everyone can search the public list by tag and language.
- **Accounts:** Google sign-in, a profile to edit or delete your codes, and account deletion that removes all your data.
- **Boosting:** users can push a code to the top of the list. This started as a PayPal payment and became free in exchange for inviting a friend through the native share sheet.
- **Stats:** each code shows its views and clicks.
- **Community moderation:** users can report a code as broken or spam. Once more than five people report it, it is deactivated automatically.
- **Three languages:** the whole UI is in English, German and Spanish with next-intl, and codes are tagged by language.
- **Android app on Google Play:** the web app wrapped with Capacitor, with native Google sign-in and native sharing.

## Decisions and trade-offs

- **One codebase for web and Android.** Instead of writing a native app, the Android app is a Capacitor shell around the deployed PWA, so a web release updates both. The cost is a separate repository for the native configuration, and keeping up with Play Store requirements such as the move to target SDK 36.
- **Firebase as the backend.** Firestore and Firebase Auth let one person ship accounts, data and security rules without running a server. Counters use atomic `increment()` updates, and views are counted once per session so re-renders and cached pages don't inflate them.
- **Moderation by the community, not by me.** A report threshold keeps spam out without a manual review queue, and each user can only report a code once.
- **Monetisation that changed with the data.** Paid boosts through PayPal and an in-app purchase SDK came first. When they weren't used, I removed the in-app purchase SDK (and with it the most upgrade-fragile dependency), made boosting free through invites, and kept ads and an optional donation.
- **SEO for a content site.** Server-rendered service hub pages per service and locale, structured data (JSON-LD), `noindex` on the login page, thin pages kept out of the index and share pages linked from the list, so search engines can find codes.
- **Privacy and performance.** A cookie-consent banner gates ads and analytics, and off-screen referral cards use `content-visibility` to keep long lists fast on phones.

## Results

- Live on the web and on Google Play since 2024, maintained for two years across 220+ commits in the two repositories.
- TODO: real numbers if you have them (users, codes shared, installs).

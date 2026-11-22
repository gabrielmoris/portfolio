---
title: Refhub
summary: Un hub multilingüe donde compartir y descubrir códigos de referido, en la web y como app Android en Google Play.
date: 2024-09-01
role: Desarrollador en solitario (producto, diseño, web y Android)
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
lang: es
---

## Problema

Muchos servicios recompensan a quienes invitan a otras personas con un código de referido, pero esos códigos acaban dispersos por foros y redes sociales. Quien busca una oferta no encuentra un código que funcione, y quien tiene un código no tiene dónde darlo a conocer.

## Qué construí

Un hub público de códigos de referido, en la web y en Android:

- **Compartir y descubrir códigos:** los usuarios registrados añaden un código con su enlace, recompensas, instrucciones, fecha de caducidad, etiquetas e idioma. Cualquiera puede buscar en la lista pública por etiqueta e idioma.
- **Cuentas:** inicio de sesión con Google, un perfil para editar o borrar tus códigos y una eliminación de cuenta que borra todos tus datos.
- **Impulso:** los usuarios pueden llevar un código a lo alto de la lista. Empezó como un pago con PayPal y pasó a ser gratis a cambio de invitar a un amigo con el menú nativo de compartir.
- **Estadísticas:** cada código muestra sus visitas y clics.
- **Moderación de la comunidad:** los usuarios pueden denunciar un código como roto o spam. Cuando lo denuncian más de cinco personas, se desactiva automáticamente.
- **Tres idiomas:** toda la interfaz está en inglés, alemán y español con next-intl, y los códigos se etiquetan por idioma.
- **App Android en Google Play:** la app web empaquetada con Capacitor, con inicio de sesión de Google y compartir nativos.

## Decisiones y compromisos

- **Una base de código para web y Android.** En lugar de escribir una app nativa, la app Android es un contenedor de Capacitor alrededor de la PWA desplegada, así que una versión web actualiza ambas. El coste es un repositorio aparte para la configuración nativa y seguir los requisitos de Play Store, como el paso a target SDK 36.
- **Firebase como backend.** Firestore y Firebase Auth permitieron a una sola persona lanzar cuentas, datos y reglas de seguridad sin gestionar un servidor. Los contadores usan actualizaciones atómicas con `increment()`, y las visitas se cuentan una vez por sesión para que los re-renderizados y las páginas en caché no las inflen.
- **Moderación por la comunidad, no por mí.** Un umbral de denuncias frena el spam sin una cola de revisión manual, y cada usuario solo puede denunciar un código una vez.
- **Monetización que cambió con los datos.** Primero llegaron los impulsos de pago con PayPal y un SDK de compras integradas. Como no se usaban, eliminé ese SDK (y con él la dependencia más frágil en las actualizaciones), hice gratuito el impulso mediante invitaciones y mantuve los anuncios y una donación opcional.
- **SEO para un sitio de contenido.** Páginas de hub renderizadas en el servidor por servicio e idioma, datos estructurados (JSON-LD), `noindex` en la página de inicio de sesión, páginas con poco contenido fuera del índice y páginas para compartir enlazadas desde la lista, para que los buscadores encuentren los códigos.
- **Privacidad y rendimiento.** Un banner de consentimiento de cookies controla los anuncios y la analítica, y las tarjetas fuera de pantalla usan `content-visibility` para que las listas largas sigan siendo rápidas en el móvil.

## Resultados

- Disponible en la web y en Google Play desde 2024, mantenido durante dos años con más de 220 commits en los dos repositorios.
- TODO: real numbers if you have them (users, codes shared, installs).

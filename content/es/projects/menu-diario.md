---
title: MenuDiario
slug: menu-diario
summary: >-
  App móvil para el menú del día en España: los comensales encuentran en un mapa restaurantes cercanos y su menú de hoy, y los restaurantes publican sus menús con créditos de prepago.
date: 2023-03-01
role: Codesarrollador en un equipo de dos (diseño, full-stack y móvil) # TODO: name your teammate if you want to
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
  alt: Icono de la app MenuDiario, un tenedor y un cuchillo sobre un mantel de cuadros rojos y blancos
links:
  android: https://play.google.com/store/apps/details?id=com.menudiario.app
  ios: https://apps.apple.com/es/app/menu-di%C3%A1rio/id6467143567
  repo: https://github.com/gabrielmoris/menudiario
featured: true
lang: es
---

## Problema

En España, muchos restaurantes ofrecen un menú del día: una comida a precio fijo con primero, segundo, postre y bebida que cambia cada día. Los comensales no tienen una forma fácil de ver los menús de hoy cerca de ellos, y los restaurantes suelen anunciarlos solo en una pizarra junto a la puerta.

## Qué construí

Una app multiplataforma (iOS, Android y web) con dos partes:

- **Para comensales:** un mapa de restaurantes cercanos según la ubicación del móvil, cada uno con su menú de hoy (platos, precio, horario, si incluye bebida y café), fotos y detalles como aparcamiento o terraza. Los comensales pueden guardar favoritos y compartir un restaurante.
- **Para restaurantes:** registro con el CIF de la empresa, un perfil y un formulario para publicar el menú del día o un menú especial con fotos.
- **Créditos y pagos:** los restaurantes publican menús con monedas de prepago. Los restaurantes nuevos reciben 20 menús gratis, y se pueden comprar más monedas en la app con Stripe.
- **Cuentas:** registro, inicio de sesión, restablecimiento de contraseña y eliminación de cuenta, con mensajes de error claros para cada fallo de autenticación.

## Decisiones y compromisos

- **Una base de código para tres plataformas.** La app es una exportación estática de Next.js empaquetada con Capacitor, así que el mismo código React funciona en iOS, Android y la web, y las funciones nativas (geolocalización, menú de compartir, barra de estado) vienen de plugins de Capacitor. El coste: sin renderizado en el servidor y con compilaciones nativas que hay que mantener al día, como la actualización a Capacitor 5 y Android SDK 33.
- **Las claves secretas se quedan en el servidor.** Una Firebase Cloud Function crea el payment intent de Stripe, de modo que la app nunca contiene una clave secreta. La app añade las monedas cuando Stripe confirma el pago con tarjeta. Visto con perspectiva, movería ese paso a un webhook de Stripe para que el cliente no pueda otorgarse créditos a sí mismo.
- **Firebase como backend.** Auth, Firestore y Storage dieron a un equipo pequeño cuentas, datos y subida de imágenes sin tener que gestionar servidores.
- **Créditos en lugar de suscripciones.** Pagar por menú publicado se ajusta a la frecuencia con la que un restaurante usa realmente la app, y los menús gratis permiten probarla antes de pagar.
- **Sensación nativa con tecnología web.** Se desactivaron los efectos de overscroll y de brillo, y se corrigieron los gestos del mapa para que arrastrar después de hacer zoom se comporte como en un mapa nativo.
- **Flujo de trabajo en equipo.** Dos desarrolladores trabajando con ramas de funcionalidad, pull requests con plantilla y revisiones: más de 40 pull requests en seis meses.

## Resultados

- Construida de marzo a septiembre de 2023, desde el primer commit hasta los pagos reales con Stripe y las compilaciones para iOS y Android, con casi 270 commits.
- Publicada en Google Play y en la App Store.
- TODO: did restaurants use it? Any numbers (restaurants, downloads)?

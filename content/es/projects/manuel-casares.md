---
title: Manuel Casares
summary: Web para un pianista concertista y profesor, con sus grabaciones, vídeos cargados en directo desde YouTube y un formulario de contacto para clases.
date: 2022-03-01
role: Diseñador y desarrollador web autónomo
tech:
  [Figma, Next.js, React, TypeScript, Sass, React Hook Form, YouTube Data API]
links:
  live: https://www.manuelcasares.com
  repo: https://github.com/gabrielmoris/Manuel-Casares
featured: false
lang: es
---

## Problema

Un pianista concertista y profesor de piano necesitaba un único lugar donde presentar su biografía y su repertorio, mostrar sus actuaciones, vender clases y dirigir a los visitantes a su tienda, su programa de mentoría y sus redes sociales.

## Qué construí

Una web de varias páginas para un cliente como autónomo:

- **Biografía:** la historia y la trayectoria del pianista.
- **Repertorio:** su repertorio de concierto con más de 20 grabaciones de audio en un reproductor propio, incluida una sección de conciertos para piano.
- **Multimedia:** sus últimos vídeos y grabaciones de conciertos, cargados desde sus listas de YouTube mediante la YouTube Data API.
- **Clases:** un formulario de contacto, hecho con React Hook Form, para que los alumnos soliciten clases.
- **Enlaces externos:** su tienda online, su plataforma de mentoría, YouTube, Instagram, Twitch y Discord.

## Decisiones y compromisos

- **YouTube como fuente de contenido.** Los vídeos llegan directamente de las listas del cliente, así que las nuevas subidas aparecen en la web sin que nadie toque el código.
- **Un reproductor de audio propio.** Las grabaciones se reproducen dentro de la lista de repertorio y el reproductor se cierra al hacer clic fuera, para que los visitantes puedan explorar las piezas con rapidez.
- **Mantenimiento a largo plazo.** Seguí actualizando la web tras el lanzamiento a medida que cambiaban las necesidades del cliente, por ejemplo con un nuevo formulario de correo, otro orden de vídeos y una biografía reescrita en 2024, y sustituyendo el paquete obsoleto `node-sass` en 2025.

## Resultados

- Lanzada en 2022 y mantenida para el cliente desde entonces, con casi 70 commits.
- TODO: anything the client gained from it (lesson requests, shop traffic).

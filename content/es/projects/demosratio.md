---
title: Demosratio
slug: demosratio
summary: Comprueba si los partidos españoles cumplen sus promesas electorales cotejando con IA cada votación del Congreso con sus programas.
date: 2025-02-01
role: Desarrollador en solitario (diseño, frontend, backend, pipeline de datos)
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
lang: es
---

## Problema

La ciudadanía rara vez tiene una visión clara y neutral de lo que prometieron los partidos antes de unas elecciones y de cómo votan realmente después. Esa información suele llegar a través de la prensa, ya filtrada, y las fuentes oficiales (programas en PDF, la web del Congreso) son difíciles de leer y aún más de comparar.

## Qué construí

Una plataforma full-stack que recopila las promesas electorales y las votaciones parlamentarias de España, enlaza cada una con su fuente oficial y usa IA para conectarlas.

- **Importación automática de votaciones:** una tarea cron diaria de Vercel extrae las votaciones del Congreso de los Diputados, guarda cada voto por partido y almacena las votaciones punto por punto como propuestas separadas.
- **Análisis de promesas con IA:** cada nueva votación se contrasta con Gemini con las promesas de los partidos en esa legislatura, de modo que cada promesa muestra si los votos del partido la respaldan o la contradicen.
- **Extracción de promesas de los programas:** los administradores pegan el enlace al PDF del programa de un partido y Gemini redacta hasta cinco promesas por área política. Un administrador revisa y edita los borradores antes de guardar nada.
- **Resúmenes en lenguaje claro:** para cada votación, la app busca la iniciativa oficial en congreso.es, lee su PDF y explica en pocas líneas qué se votó y qué significa un Sí o un No.
- **Exploración:** votaciones del Congreso con búsqueda de texto completo, promesas agrupadas por área política («Temas»), una matriz de afinidad de voto entre partidos, gráficos interactivos por votación y un panel por partido.
- **Participación:** cuentas de usuario, votaciones simuladas sobre propuestas reales y un panel de administración donde se puede gestionar cada tabla de la base de datos sin SQL.

## Decisiones y compromisos

- **La IA se basa solo en fuentes oficiales.** Gemini lee el PDF del programa o de la iniciativa directamente con su herramienta de contexto de URL, así que el servidor nunca descarga ni almacena PDF. Si Gemini indica que no pudo leer el documento, la respuesta se descarta: las promesas y los resúmenes solo pueden salir del texto oficial. La salida sigue un esquema JSON estricto, y las áreas políticas desconocidas se eliminan en el código.
- **Mejor nada que algo incorrecto.** Una votación solo recibe un resumen en lenguaje claro cuando la búsqueda encuentra una única iniciativa coincidente del tipo esperado. Si no, se marca como `no_match` y no muestra resumen.
- **Pensado para el nivel gratuito.** Todas las llamadas a Gemini pasan por un único cliente que separa las peticiones 12 segundos (5 por minuto), respeta el tiempo de reintento de un 429, reintenta los errores 5xx con backoff y se detiene limpiamente cuando se agota la cuota diaria. Cada ejecución del cron deja de iniciar trabajo nuevo mucho antes del límite de tiempo de la función, y la siguiente ejecución recoge las votaciones sin procesar.
- **Analizar antes de guardar.** Una votación solo se guarda cuando su análisis de promesas ha tenido éxito, así que una ejecución fallida no deja nada a medias y la siguiente lo reintenta.
- **Análisis limitado a la legislatura.** Una votación solo se compara con las promesas hechas para esa legislatura, nunca con las de las elecciones anteriores. Las votaciones que llegan antes de que se carguen las promesas de una legislatura quedan como `pending` y una tarea cron independiente las analiza más tarde.
- **Refuerzo de la seguridad.** Autenticación JWT con un middleware de autorización, validación de entradas en todas las rutas de la API y varias rondas de correcciones de problemas críticos y de gravedad alta.

## Resultados

- Disponible en demosratio.vercel.app, con tres tareas cron diarias que mantienen al día votaciones, análisis y resúmenes.
- Más de 300 commits en más de 75 pull requests desde febrero de 2025, con tests unitarios en Vitest, linting en pre-commit con Husky y documentación escrita de la arquitectura, la API, la autenticación, la base de datos, la IA y la i18n.
- Desarrollado AI-first, con instrucciones para agentes (CLAUDE.md, Agents.md) y un grafo de conocimiento del código para mantener a los agentes de programación bien encaminados.

TODO: real usage numbers if you have them (votes analysed, promises tracked, visitors).

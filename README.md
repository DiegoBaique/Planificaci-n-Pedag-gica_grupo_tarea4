# Evaluación del Pensamiento Crítico en Estudiantes Universitarios mediante el Análisis de Información Digital con Gemini IA

> **Universidad Estatal de Milagro (UNEMI)**  
> **Programa:** Maestría en Inteligencia Artificial para la Educación  
> **Módulo:** Planificación Pedagógica en el Contexto del Aprendizaje Participativo  
> **Actividad:** Tarea de Aprendizaje Autónomo - Grupo Tarea 4  

---

## 📋 Resumen del Proyecto

Este repositorio contiene la plataforma académica interactiva que documenta el diseño metodológico de un instrumento analítico integral para evaluar el pensamiento crítico en estudiantes universitarios (18–25 años) frente a información digital y posibles noticias falsas (*fake news*). El proyecto integra **Gemini IA (Google)** como asistente formativo socrático dentro del marco del **Aprendizaje Basado en Problemas (ABP)**.

El instrumento mitiga activamente el riesgo de *"sedentarismo intelectual"* (Costa & Murphy, 2025) y promueve una postura ética, reflexiva, transparente y con derecho a apelación humana frente a los resultados de la inteligencia artificial generativa en la educación superior.

---

## 👥 Equipo Maestrante y Fases de Trabajo

| Integrante | Fase / Responsabilidad | Aporte Clave |
| :--- | :--- | :--- |
| **Carlos Luis Pulla Freire** | Fase 4 • Protocolo & Ética | Diseño del protocolo de evaluación en 6 preguntas guía, derecho a corrección, formatos inclusivos y triangulación de evidencias. |
| **Robert Bryan Merejildo Pincay** | Fase 2 • Rúbrica Analítica | Elaboración de la rúbrica analítica integral de 4 dimensiones y 4 niveles de desempeño (Excelente, Bueno, Regular, Insuficiente). |
| **Carlos Andrés Paredes Rosado** | Fase 1 • Actividad ABP | Diseño del caso simulado de verificación de noticias falsas, contraste de evidencias y justificación curricular. |
| **Diego Fernando Baique Chilito** | Fase 3 • Integración de IA | Sistematización pedagógica de prompts en Gemini IA, portal web interactivo y cierre metacognitivo. |
| **Jimena Jamileth Orellana Rodríguez** | Fase 5 • Andamiaje Socrático | Formulación del checklist socrático en Google Forms, autoevaluación formativa y acompañamiento metacognitivo. |

---

## 🗂️ Estructura Jerárquica del Proyecto

El proyecto está organizado bajo una estructura lógica, modular y limpia:

```text
Planificaci-n-Pedag-gica_grupo_tarea4/
├── index.html                  # Punto de entrada principal semántico, responsive y optimizado
├── code.html                   # Archivo espejo y respaldo sincronizado
├── README.md                   # Documentación institucional y técnica completa
├── screen.png                  # Captura visual de referencia de la interfaz
└── assets/                     # Recursos y activos estáticos organizados
    ├── css/
    │   └── style.css           # Estilos personalizados UNEMI, glassmorphism, accesibilidad y a11y
    ├── js/
    │   └── main.js             # Lógica de interacciones, inicialización de Lucide, AOS y menú móvil
    ├── images/
    │   ├── favicon.svg         # Favicon vectorial escalable con paleta institucional UNEMI
    │   └── screen.png          # Captura de pantalla de la plataforma en alta fidelidad
    └── vendor/                 # Bibliotecas de terceros optimizadas localmente (modo offline)
        ├── aos/
        │   ├── aos.css         # Estilos CSS de animaciones en scroll
        │   └── aos.js          # Motor JS de la librería AOS
        ├── lucide/
        │   └── lucide.min.js   # Catálogo completo de iconos vectoriales SVG
        └── tailwind/
            └── tailwind.min.js # Motor de utilidades CSS Tailwind optimizado localmente
```

---

## 🌟 Características y Optimizaciones Implementadas

### 1. Fidelidad Visual Absoluta
- **Paleta Institucional UNEMI:**
  - `unemi-primary` (`#0B4D3C`): Verde bosque institucional.
  - `unemi-light` (`#1B6A53`): Verde hoja vibrante.
  - `unemi-accent` (`#2EA44F`): Verde esmeralda vivo.
  - `unemi-subtle` (`#E8F3EE`): Tinte verde menta orgánico.
  - `unemi-earth` (`#6D4C41`): Tono café tierra cálido.
  - `unemi-sand` (`#A1887F`): Tono arena suave.
  - `unemi-cream` (`#FDFBF7`): Fondo crema limpio y descansado.
  - `unemi-dark` (`#14261C`): Tipografía oscura de alto contraste.
- **Tipografía Armónica:** *Plus Jakarta Sans* para encabezados e interfaz moderna, complementada con *Inter* para alta legibilidad en párrafos densos.
- **Efectos Glassmorphism & Microinteracciones:** Tarjetas translúcidas con desenfoque de fondo (`backdrop-filter: blur(12px)`), elevaciones sutiles y transiciones suaves al interactuar.

### 2. Accesibilidad Web Integral (a11y - WCAG 2.1)
- Enlace directo *"Saltar al contenido principal"* (`.skip-link`) para usuarios de lectores de pantalla y teclado.
- Etiquetas `aria-label`, `aria-hidden="true"` en elementos decorativos, y roles semánticos HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Indicadores visuales `:focus-visible` de alto contraste en botones y enlaces.
- Soporte para la preferencia de usuario de movimiento reducido (`prefers-reduced-motion: reduce`).

### 3. SEO Técnico y Datos Estructurados
- Metadatos Open Graph (Facebook, WhatsApp, LinkedIn) y Twitter Cards listos para compartir con imagen de previsualización.
- Datos estructurados **JSON-LD** (`@type: ScholarlyArticle`) que identifican formalmente a los autores, la Universidad Estatal de Milagro y el contexto pedagógico.
- Meta etiquetas de autoría, descripción y palabras clave indexables.

### 4. Gestión Local de Assets y Resiliencia Offline
- Todos los recursos estáticos se encuentran ubicados en `assets/vendor/` e `assets/images/`, permitiendo que el proyecto funcione de manera 100% local (sin conexión a internet) o en servidores de producción (GitHub Pages, Vercel) con respaldo automático a CDNs.

---

## 📚 Referencias Científicas (Normas APA / 2025)

- **Costa, C., & Murphy, M. (2025).** Generative artificial intelligence in education: (what) are we thinking? *Learning, Media and Technology*. [https://doi.org/10.1080/17439884.2025.2518258](https://doi.org/10.1080/17439884.2025.2518258)
- **European Journal of Education. (2025).** From Query to Knowledge: Evaluating University Students’ Web Search Abilities and Their Connections to Research and Critical Thinking. *European Journal of Education*. [https://doi.org/10.1111/ejed.70144](https://doi.org/10.1111/ejed.70144)
- **Nie, X., Tian, Y., Liu, M., Wu, D., & Gou, Y. (2025).** The impact of generative artificial intelligence on students’ higher order thinking: Evidence from a three-level meta-analysis. *Education and Information Technologies*, 30, 25359–25390. [https://doi.org/10.1007/s10639-025-13735-x](https://doi.org/10.1007/s10639-025-13735-x)
- **Trikoili, A., Georgiou, D., Pappa, C., & Pittich, D. (2025).** Critical Thinking Assessment in Higher Education: A Mixed-Methods Comparative Analysis of AI and Human Evaluator. *International Journal of Human–Computer Interaction*, 15570-15583. [https://doi.org/10.1080/10447318.2025.2499164](https://doi.org/10.1080/10447318.2025.2499164)


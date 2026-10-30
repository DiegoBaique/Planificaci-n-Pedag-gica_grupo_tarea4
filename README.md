# Evaluación del Pensamiento Crítico en Estudiantes Universitarios mediante el Análisis de Información Digital

> **Maestría en Inteligencia Artificial para la Educación**  
> **Módulo:** Planificación Pedagógica en el Contexto del Aprendizaje Participativo  
> **Tarea:** Aprendizaje Autónomo - Grupo Tarea 4  

---

## 📋 Resumen del Proyecto

Este proyecto presenta el diseño metodológico de un instrumento analítico integral para evaluar el pensamiento crítico en estudiantes universitarios (18–25 años) frente a información digital y posibles noticias falsas (*fake news*), integrando **Gemini (Google AI)** como asistente formativo dentro del marco del **Aprendizaje Basado en Problemas (ABP)**.

El instrumento mitiga activamente el riesgo de *"sedentarismo intelectual"* (Costa & Murphy, 2025) y promueve una postura ética, reflexiva y transparente ante el uso de modelos generativos de IA en el ámbito académico.

---

## 👥 Equipo Académico y Fases del Proyecto

| Integrante | Rol / Fase Asignada | Contribución Clave |
| :--- | :--- | :--- |
| **Carlos Pa.** | Fase 1 • Contexto Pedagógico | Introducción, fundamentación curricular y justificación epistemológica (2025). |
| **Jimena** | Fase 2 • Instrumento de Medición | Elaboración de la Rúbrica Analítica con 4 criterios y 4 niveles ponderados. |
| **Robert** | Fase 3 • Generación de Casos ABP | Sistematización de Prompts en Gemini y despliegue del portal web de prueba. |
| **Carlos Pulla** | Fase 4 • Guía Operativa | Protocolo de Evaluación basado en las 6 preguntas clave (ética, inclusión y a11y). |
| **Diego** | Fase 5 • Cierre Metacognitivo | Síntesis general, reflexión metacognitiva y verificación técnica de entrega. |

---

## 🗂️ Estructura del Repositorio

El proyecto se encuentra organizado de forma jerárquica, limpia y modular:

```text
Planificaci-n-Pedag-gica_grupo_tarea4/
├── index.html                  # Punto de entrada principal semántico y optimizado
├── code.html                   # Documento de respaldo sincronizado
├── README.md                   # Documentación académica y técnica completa
└── assets/                     # Recursos y activos estáticos organizados
    ├── css/
    │   └── style.css           # Estilos personalizados, variables, glassmorphism y a11y
    ├── js/
    │   └── main.js             # Interacciones, inicialización de iconos, AOS y menú móvil
    ├── images/
    │   ├── favicon.svg         # Favicon vectorial académico institucional
    │   └── screen.png          # Captura visual de referencia de la interfaz
    └── vendor/                 # Bibliotecas de terceros optimizadas localmente
        ├── aos/
        │   ├── aos.css         # Estilos de animación en scroll
        │   └── aos.js          # Motor de animaciones AOS
        ├── lucide/
        │   └── lucide.min.js   # Conjunto de iconos vectoriales SVG
        └── tailwind/
            └── tailwind.min.js # Motor de utilidades CSS Tailwind local
```

---

## 🚀 Características y Optimizaciones Implementadas

1. **Fidelidad Visual Absoluta:**
   - Paleta de colores orgánicos y académicos estrictamente preservada (`#FAF7F0`, `#1E3F20`, `#4A7C43`, `#C88B38`, etc.).
   - Tipografía dual armónica: *Lora* (serifa para títulos y citas) y *Plus Jakarta Sans* (sans-serif para lectura clara).
   - Efectos visuales de hero con gradiente radial orgánico y ondas decorativas vectoriales.

2. **Accesibilidad Web Integral (a11y - WCAG 2.1):**
   - Enlace directo *"Saltar al contenido principal"* (`.skip-link`).
   - Contraste cromático superior a 11:1 (superando estándares AAA).
   - Tabla de rúbrica accesible con atributos `scope="col"`, `scope="row"` y `caption`.
   - Navegación por teclado completa con indicadores visuales `:focus-visible` y soporte para tecla `Escape` en menús móviles.
   - Atributos descriptivos `aria-label`, `aria-expanded` y `role="dialog"`.

3. **SEO Técnico y Metadatos:**
   - Meta tags de título, descripción, autoría y tema.
   - Open Graph (Facebook, WhatsApp, LinkedIn) y Twitter Cards integrados.
   - Datos estructurados **JSON-LD** (`ScholarlyArticle` y `Course`) que identifican formalmente a los autores y el módulo universitario.

4. **Gestión Local de Assets y Rendimiento Offline:**
   - Todos los recursos de terceros (Tailwind, Lucide, AOS) se alojan localmente en la carpeta `assets/vendor/` para garantizar funcionamiento autónomo y tiempos de carga inmediatos.
   - Hojas de estilo y scripts diferidos (`defer`) para no bloquear el renderizado del hilo principal.
   - Favicon vectorial escalable en `assets/images/favicon.svg`.

---

## 📚 Referencias Bibliográficas (Normas APA / 2025)

- **Costa, C., & Murphy, M. (2025).** Generative artificial intelligence in education: (what) are we thinking? *Learning, Media and Technology*. [https://doi.org/10.1080/17439884.2025.2518258](https://doi.org/10.1080/17439884.2025.2518258)
- **European Journal of Education. (2025).** From Query to Knowledge: Evaluating University Students’ Web Search Abilities and Their Connections to Research and Critical Thinking. *European Journal of Education*. [https://doi.org/10.1111/ejed.70144](https://doi.org/10.1111/ejed.70144)
- **Nie, X., Tian, Y., Liu, M., Wu, D., & Gou, Y. (2025).** The impact of generative artificial intelligence on students’ higher order thinking: Evidence from a three-level meta-analysis. *Education and Information Technologies*, 30, 25359–25390. [https://doi.org/10.1007/s10639-025-13735-x](https://doi.org/10.1007/s10639-025-13735-x)
- **Trikoili, A., Georgiou, D., Pappa, C., & Pittich, D. (2025).** Critical Thinking Assessment in Higher Education: A Mixed-Methods Comparative Analysis of AI and Human Evaluator. *International Journal of Human–Computer Interaction*, 15570-15583. [https://doi.org/10.1080/10447318.2025.2499164](https://doi.org/10.1080/10447318.2025.2499164)

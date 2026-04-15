# Litolatina — Sitio web corporativo

Sitio web para **Litolatina**, empresa de litografía y publicidad. Construido con [Astro](https://astro.build) siguiendo buenas prácticas: componentes atómicos, CSS con variables, accesibilidad, SEO básico, animaciones optimizadas y diseño completamente responsive.

## Stack

- **Astro 4** — generación estática, zero JS por defecto
- **CSS moderno** — custom properties, grid/flex, `clamp()` para tipografía fluida
- **Vanilla JS** — interacciones mínimas (menú móvil, scroll observer, formulario)
- **Google Fonts** — Inter + Poppins (precargados)

## Estructura

```
src/
├── components/      # Header, Hero, Services, About, Portfolio, Contact, Footer
├── layouts/         # Layout base con SEO y observer de animaciones
├── pages/           # index.astro (home)
└── styles/          # global.css con design tokens
public/              # favicon.svg, robots.txt
```

## Secciones

1. **Inicio (Hero)** — propuesta de valor, CTAs, estadísticas y tarjetas flotantes
2. **Servicios** — 6 servicios principales con íconos SVG inline
3. **Nosotros** — historia, diferenciales y mosaico visual
4. **Portafolio** — grid de proyectos destacados
5. **Contacto** — info directa + formulario con validación HTML5

## Comandos

```bash
npm install       # Instala dependencias
npm run dev       # Desarrollo en http://localhost:4321
npm run build     # Build de producción en /dist
npm run preview   # Preview del build
```

## Buenas prácticas aplicadas

- Accesibilidad: landmarks semánticos, `aria-*`, foco visible, `prefers-reduced-motion`
- Rendimiento: HTML comprimido, estilos inlineados, fuentes con `preconnect`
- SEO: meta tags, Open Graph, `lang="es"`, estructura semántica
- Responsive: mobile-first, breakpoints en 520 / 820 / 960px
- Mantenibilidad: design tokens, componentes pequeños, sin dependencias innecesarias

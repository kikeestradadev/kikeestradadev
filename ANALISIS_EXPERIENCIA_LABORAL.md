# Análisis: Experiencia Laboral vs Temas de las Guías de Entrevista

**Objetivo:** Evaluar si las descripciones de experiencia laboral reflejan bien tu perfil técnico frente a lo que los entrevistadores buscan (Frontend Guide, Experian JD, Velir SR).

---

## Lo que YA está bien cubierto en la experiencia

| Tema (Guías) | Dónde aparece | Estado |
|--------------|---------------|--------|
| React / TypeScript | Confidential, Brand Builders, Prevent Security | ✅ |
| Testing (Jest, RTL, Cypress) | Confidential, Brand Builders | ✅ |
| Component-based architecture | Casi todos los roles | ✅ |
| Mentoring / liderazgo técnico | Brand Builders, Prevent, Business Solutions, Prime Ideas | ✅ |
| Agile / Scrum | Brand Builders, Prevent, Business Solutions, Prime Ideas | ✅ |
| WordPress / Laravel | Prevent, Prime Ideas, Business Solutions | ✅ |
| High-traffic / scale | Brand Builders, Prevent, Business Solutions, Prime Ideas | ✅ |
| Cross-browser / cross-client | Accenture, Double Digit, Experian | ✅ |
| Design-to-code / Figma | Assemble, Experian | ✅ |
| Enterprise (Citi, Wells Fargo) | Accenture | ✅ |
| SalesForce Marketing Cloud | Accenture | ✅ |

---

## Brechas: temas de las guías que NO aparecen en la experiencia

### 1. Accesibilidad (WCAG, keyboard, ARIA, Section 508)

**Relevancia:** Muy alta. Las 3 guías lo mencionan explícitamente.

**Dónde encaja en tu experiencia:**
- **Accenture** (Citi, Wells Fargo) – sector financiero, suele exigir ADA/Section 508
- **Assemble** (pharma) – industria regulada, compliance accesible
- **Prime Ideas** (cashier/pagos) – formularios financieros accesibles
- **Brand Builders / Confidential** – productos modernos, WCAG como estándar

**Qué falta:** Ningún bullet menciona a11y, WCAG, keyboard navigation ni screen readers.

---

### 2. Performance (Core Web Vitals, Lighthouse, optimización)

**Relevancia:** Muy alta. Las guías hablan de performance budgets, Lighthouse, LCP, etc.

**Dónde encaja:**
- **Brand Builders** (BetAnything.eu, affiliate sites)
- **Prevent Security** (high-traffic platforms)
- **Prime Ideas** (sportsbook, pagos)
- **Confidential** (“high-performance” está, pero sin métricas)

**Qué falta:** No hay menciones a Core Web Vitals, Lighthouse, LCP, bundle size ni optimización de imágenes/fonts.

---

### 3. State management & data fetching (Redux, React Query, SWR)

**Relevancia:** Alta. Data fetching y server state son temas habituales.

**Dónde encaja:**
- **Confidential** (React/TypeScript)
- **Brand Builders** (BetAnything = Strapi + React + Remix)
- **Prevent Security** (React.js para UI interactiva)

**Qué falta:** No se nombran Redux, Zustand, React Query, SWR ni patrones de server state.

---

### 4. Resilient API integration (retries, error boundaries, fallback UI)

**Relevancia:** Media-alta. El Frontend Guide lo menciona explícitamente.

**Dónde encaja:**
- **Brand Builders** (Strapi headless, datos de APIs)
- **Confidential** (SPAs con datos remotos)
- **Prime Ideas** (cashier, pagos con APIs)

**Qué falta:** No hay mención a retries, error boundaries ni fallback UI.

---

### 5. Next.js / SSR / SSG / App Router

**Relevancia:** Media (Velir, roles con SEO).

**Dónde encaja:**
- **Brand Builders** (marketing, affiliate, SEO)
- **Prevent Security** (editorial, SEO)
- **Confidential** (si usas Next en algún proyecto)

**Qué falta:** No se menciona Next.js ni estrategias de render (SSR/SSG/ISR).

---

### 6. Semantic HTML / design tokens / BEM

**Relevancia:** Media (Velir, CSS architecture).

**Dónde encaja:**
- **Assemble** (pharma, contenido estructurado)
- **Experian** (multi-brand, consistencia)
- Cualquier rol con design systems

**Qué falta:** No se habla de semantic HTML, landmarks, BEM ni design tokens.

---

### 7. CI/CD / Git workflows

**Relevancia:** Media. Está en Skills pero no en experiencia.

**Dónde encaja:**
- **Brand Builders** (equipo moderno)
- **Confidential**
- **Prevent Security**

**Qué falta:** No se menciona pipelines, deployments ni code review workflows.

---

### 8. Storybook / documentación de componentes

**Relevancia:** Media (Velir).

**Dónde encaja:**
- **Brand Builders** (component-based architecture)
- **Confidential**
- **Prevent Security**

**Qué falta:** No se menciona Storybook ni documentación de componentes.

---

### 9. Estimation / agency delivery / risk management

**Relevancia:** Media (Velir, rol senior).

**Dónde encaja:**
- **Business Solutions** (Technical Lead Manager)
- **Prime Ideas** (Technical Lead)
- **Double Digit** (agency, tight timelines)

**Qué falta:** No se habla de estimación, priorización ni gestión de riesgos.

---

## Resumen por rol: qué reforzar

| Rol | Fortalezas actuales | Mejoras sugeridas (bullets a añadir/modificar) |
|-----|---------------------|------------------------------------------------|
| **Confidential** | React, TS, testing, arquitectura | + Data fetching (React Query/SWR), accessibility, performance (Lighthouse/CWV) |
| **Brand Builders** | Testing, equipo, BetAnything, arquitectura | + Core Web Vitals, accessibility (WCAG), state management o data fetching, SEO |
| **Prevent Security** | WordPress, Laravel, React, 10+ proyectos | + Performance optimization, accessibility, CI/CD o Storybook |
| **Assemble** | Email, pharma, design tools, Node.js | + Accessibility (regulated industry), semantic HTML |
| **Accenture** | Salesforce, enterprise, Citi/Wells Fargo | + Accessibility (ADA/Section 508 en sector financiero) |
| **Business Solutions** | Technical Lead, 2 equipos, procesos | + Performance, accessibility, estimation/delivery |
| **Prime Ideas** | Cashier, payments, security, performance | + API integration, accessibility (formularios financieros) |
| **Double Digit** | Agency, dynamic content, modular UI | + API/data-driven, cross-client (ya está), estimación |
| **Experian** | Multi-brand, tooling, mentoring | + Semantic HTML, accessibility (multi-brand consistency) |

---

## Prioridad de cambios

### Alta prioridad (muy visibles para entrevistadores)

1. **Accesibilidad** – Añadir en 2–3 roles (Accenture, Assemble, Brand Builders o Prime Ideas).
2. **Performance / Core Web Vitals** – Añadir en Brand Builders, Prevent o Prime Ideas.
3. **Data fetching / React Query** – Añadir en Confidential o Brand Builders.

### Media prioridad

4. **State management** – En Confidential o Brand Builders.
5. **Error boundaries / resilient APIs** – En Brand Builders o Confidential.
6. **CI/CD** – En Brand Builders o Prevent.

### Baja prioridad (si aplican)

7. Next.js – Solo si lo usaste.
8. Storybook – Solo si lo usaste.
9. Estimation – En Business Solutions o Prime Ideas.

---

## Ejemplos de bullets para añadir

**Accesibilidad:**
- *"Ensured WCAG 2.1 compliance and keyboard-first navigation across client-facing applications, supporting ADA and Section 508 requirements."*
- *"Applied accessible patterns (ARIA, focus management) to forms and interactive components in regulated environments."*

**Performance:**
- *"Optimized Core Web Vitals (LCP, FID, CLS) and bundle size for high-traffic marketing platforms using Lighthouse and Chrome DevTools."*
- *"Implemented image optimization, lazy loading, and code splitting to improve load times and user experience."*

**Data fetching / APIs:**
- *"Integrated headless CMS and REST APIs using React Query for caching, loading states, and resilient error handling."*
- *"Built data layers with retry strategies and error boundaries for graceful degradation in production."*

**State management:**
- *"Architected client state with Redux/Zustand and server state with React Query to support scalable, predictable data flows."*

**CI/CD:**
- *"Established CI/CD pipelines and code review workflows to ensure quality and consistent deployments."*

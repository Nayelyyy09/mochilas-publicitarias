# PR: Web "Cuaderno Corporativo" - Especificación Completa

## Resumen

Nueva web institucional/e-commerce dedicada a la venta y personalización de cuadernos corporativos, agendas y accesorios de oficina. El sitio está optimizado para SEO y dirigido a decisores B2B (departamentos de marketing, compras de medianas/grandes empresas).

**Objetivo**: Posicionar la web en el Top 3 de Google para la keyword principal "cuadernos corporativos" y variaciones relevantes.

**Fuente**: Basado en el blueprint SEO `documentacion/deep-research-report.md` (análisis de 20 sitios competidores).

---

## 1. Arquitectura de la Web

### 1.1 Estructura de URLs (SEO-friendly)

```
/                                          → Home
/cuadernos-corporativos/                   → Landing principal
/cuadernos-corporativos/tapa-dura/         → Subcategoría
/cuadernos-corporativos/tapa-blanda/       → Subcategoría
/cuadernos-corporativos/wire-o-anillados/  → Subcategoría
/cuadernos-corporativos/ecologicos/        → Subcategoría
/cuadernos-corporativos/agendas/           → Subcategoría
/cuadernos-corporativos/libretas/          → Subcategoría
/accesorios-de-oficina/                    → Landing accesorios
/accesorios-de-oficina/portafolios/        → Subcategoría
/accesorios-de-oficina/carpetas/           → Subcategoría
/accesorios-de-oficina/sets-corporativos/  → Subcategoría
/solicitar-cotizacion/                     → Formulario de contacto
/blog/                                     → Blog
/blog/[slug]/                              → Posts individuales
/quienes-somos/                            → Empresa y E-E-A-T
/contacto/                                 → Contacto
/politica-de-privacidad/                   → Legal
/aviso-legal/                              → Legal
/mapa-del-sitio/                           → Sitemap HTML
```

### 1.2 Reglas de arquitectura

- **Profundidad máxima**: 3 clics desde Home a cualquier página clave
- **Jerarquía**: Home → Categoría → Subcategoría → Producto/Post
- **Breadcrumbs**: Visibles en todas las páginas internas con marcado Schema BreadcrumbList
- **Enlaces internos**: Cada página de categoría enlaza a sus subcategorías y al blog relacionado

---

## 2. Menús y Navegación

### 2.1 Menú Principal (Header)

| Ítem | Tipo | Enlace |
|------|------|--------|
| Inicio | Enlace | `/` |
| Cuadernos Corporativos | Dropdown | `/cuadernos-corporativos/` |
| → Tapa Dura | Submenú | `/cuadernos-corporativos/tapa-dura/` |
| → Tapa Blanda | Submenú | `/cuadernos-corporativos/tapa-blanda/` |
| → Wire-O / Anillados | Submenú | `/cuadernos-corporativos/wire-o-anillados/` |
| → Ecológicos | Submenú | `/cuadernos-corporativos/ecologicos/` |
| → Agendas | Submenú | `/cuadernos-corporativos/agendas/` |
| → Libretas | Submenú | `/cuadernos-corporativos/libretas/` |
| Accesorios de Oficina | Dropdown | `/accesorios-de-oficina/` |
| → Portafolios | Submenú | `/accesorios-de-oficina/portafolios/` |
| → Carpetas Corporativas | Submenú | `/accesorios-de-oficina/carpetas/` |
| → Sets Corporativos | Submenú | `/accesorios-de-oficina/sets-corporativos/` |
| Blog | Enlace | `/blog/` |
| Quiénes Somos | Enlace | `/quienes-somos/` |
| Contacto | Enlace | `/contacto/` |

### 2.2 CTA Fijo

- **Botón flotante WhatsApp** (esquina inferior derecha): "Cotiza Ahora"
- **CTA en Header**: Botón "Solicitar Presupuesto" que enlaza a `/solicitar-cotizacion/`

### 2.3 Footer

| Sección | Enlaces |
|---------|---------|
| Productos | Cuadernos Corporativos, Tapa Dura, Tapa Blanda, Ecológicos, Agendas, Libretas |
| Accesorios | Portafolios, Carpetas, Sets Corporativos |
| Empresa | Quiénes Somos, Blog, Contacto |
| Legal | Política de Privacidad, Aviso Legal, Mapa del Sitio |
| Contacto | Dirección, Teléfono, Email, Redes Sociales |
| Certificaciones | Logos FSC, ISO (si aplica) |

---

## 3. Páginas Principales - Especificación

### 3.1 Home (`/`)

**SEO**:
- **Title**: `Cuadernos Corporativos Personalizados | [Marca]`
- **Meta Description**: `Cuadernos corporativos 100% personalizados en tapa dura o blanda, con tu logo y diseño. Más de X años de experiencia. Solicita tu presupuesto gratis.` (140-160 caracteres)
- **H1**: `Cuadernos Corporativos Personalizados para tu Empresa`
- **Schema**: Organization, WebSite, LocalBusiness

**Estructura de secciones**:
1. **Hero**: H1 + texto de valor + CTA "Solicitar Presupuesto"
2. **Beneficios**: 3-4 bullet points (personalización total, calidad premium, entrega rápida, precio competitivo)
3. **Categorías destacadas**: Grid con imágenes de: Tapa Dura, Tapa Blanda, Ecológicos, Agendas
4. **Cómo funciona**: 3 pasos (Diseña → Fabrica → Recibe)
5. **Testimonios**: 2-3 reseñas de clientes con foto, nombre y cargo
6. **Clientes**: Logo wall de empresas destacadas
7. **Blog reciente**: 2-3 posts del blog
8. **CTA final**: "¿Listo para personalizar tu cuaderno? Cotiza ahora"

**Contenido**: ~800-1000 palabras distribuidas en las secciones

### 3.2 Landing Cuadernos Corporativos (`/cuadernos-corporativos/`)

**SEO**:
- **Title**: `Cuadernos Corporativos Personalizados | Tapa Dura, Blanda y Ecológica`
- **Meta Description**: `Descubre nuestros cuadernos corporativos personalizados: tapa dura, blanda, wire-o y ecológicos. Fabricación nacional con tu marca. Pide tu presupuesto.`
- **H1**: `Cuadernos Corporativos Personalizados`
- **Schema**: FAQ, BreadcrumbList

**Estructura**:
1. **Intro**: Definición de cuaderno corporativo + beneficios de personalización
2. **Tipos de cuaderno**: H2 por cada tipo con descripción y enlace
   - `## Cuadernos Corporativos de Tapa Dura`
   - `## Cuadernos Corporativos de Tapa Blanda`
   - `## Cuadernos Corporativos Wire-O / Anillados`
   - `## Cuadernos Corporativos Ecológicos`
   - `## Agendas Corporativas`
   - `## Libretas Empresariales`
3. **Características**: Tabla comparativa de formatos (tamaño, material, acabado, precio orientativo)
4. **Proceso de personalización**: Pasos ilustrados
5. **FAQ**: Preguntas frecuentes con Schema FAQ
6. **CTA**: Formulario de cotización embebido

**Contenido**: ~1200-1500 palabras

### 3.3 Subcategorías de Producto

**Plantilla común para cada subcategoría** (`/cuadernos-corporativos/tapa-dura/`, etc.):

**SEO** (ejemplo para Tapa Dura):
- **Title**: `Cuadernos Corporativos Tapa Dura | [Marca]`
- **Meta Description**: `Cuadernos corporativos de tapa dura personalizados. Alta durabilidad, acabado premium, tu logo en full color. Presupuesto sin compromiso.`
- **H1**: `Cuadernos Corporativos de Tapa Dura`
- **Schema**: Product (si hay productos con precio), BreadcrumbList

**Estructura**:
1. **Intro**: Descripción del tipo de cuaderno y beneficios
2. **Características técnicas**: Lista con materiales, tamaños disponibles, opciones de encuadernado
3. **Galería de productos**: Grid de productos con imagen, nombre y botón "Cotizar"
4. **Personalización**: Opciones disponibles (colores, impresión, acabados)
5. **FAQ específica**: Preguntas del tipo de producto
6. **Productos relacionados**: Enlaces a otras subcategorías
7. **CTA**: Formulario o botón WhatsApp

**Contenido**: ~600-800 palabras por subcategoría

### 3.4 Página de Producto Individual (si aplica catálogo)

**SEO**:
- **Title**: `[Nombre Producto] | Cuaderno Corporativo [Tipo]`
- **Meta Description**: Descripción corta del producto específico
- **H1**: Nombre del producto
- **Schema**: Product con precio, disponibilidad, imágenes

**Estructura**:
1. **Galería**: Imágenes del producto (múltiples ángulos)
2. **Nombre y precio**
3. **Descripción**: Características detalladas
4. **Especificaciones técnicas**: Tabla con material, tamaño, hojas, acabado
5. **Opciones de personalización**: Colores, logo, cantidad mínima
6. **Botón "Solicitar Cotización"**
7. **Productos relacionados**

### 3.5 Blog (`/blog/`)

**SEO**:
- **Title**: `Blog | Guías y Consejos de Cuadernos Corporativos`
- **Meta Description**: `Artículos sobre diseño, personalización y tendencias en cuadernos corporativos. Guías, casos de éxito y consejos para tu empresa.`
- **H1**: `Blog de Cuadernos Corporativos`

**Categorías del blog**:
- **Marketing Corporativo**: Estrategias de branding con material impreso
- **Diseño**: Tips de diseño para portadas y cuadernos
- **Casos de Éxito**: Testimonios y proyectos realizados
- **Tendencias**: Nuevos materiales, acabados y tendencias del sector
- **Guías**: Contenido educativo ("Cómo elegir tu cuaderno", etc.)

**Contenido mínimo por post**: 800-1200 palabras

**Frecuencia recomendada**: 1-2 posts por mes (mínimo)

**Estructura de post**:
1. Título optimizado (H1)
2. Introducción con hook
3. Contenido con H2 y H3 claros
4. Imágenes optimizadas (WebP, lazy load)
5. FAQ al final (con Schema)
6. CTA relacionado con el contenido
7. Posts relacionados

### 3.6 Quiénes Somos (`/quienes-somos/`)

**SEO**:
- **Title**: `Quiénes Somos | [Marca] - Cuadernos Corporativos`
- **Meta Description**: `Conoce a [Marca]: más de X años fabricando cuadernos corporativos personalizados. Nuestra experiencia, equipo y certificaciones.`
- **H1**: `Quiénes Somos`
- **Schema**: Organization

**Estructura**:
1. **Historia de la empresa**: Trayectoria y experiencia (destacar años de experiencia)
2. **Misión y visión**
3. **Instalaciones**: Fotos de fábrica/proceso productivo
4. **Equipo**: Perfiles de directivos con experiencia
5. **Certificaciones**: Logos FSC, ISO, premios del sector
6. **Clientes destacados**: Logo wall
7. **Valores**: Calidad, sostenibilidad, servicio al cliente

**Contenido**: ~600-800 palabras

### 3.7 Contacto (`/contacto/`)

**SEO**:
- **Title**: `Contacto | [Marca] - Cuadernos Corporativos`
- **Meta Description**: `Contacta con [Marca] para solicitar presupuesto de cuadernos corporativos. Formulario, teléfono, email y dirección.`
- **H1**: `Contacto`

**Estructura**:
1. **Formulario de contacto**: Nombre, empresa, email, teléfono, mensaje, archivo adjunto (opcional)
2. **Información de contacto**: Dirección, teléfono, email, horario
3. **Mapa**: Embed de Google Maps
4. **WhatsApp**: Botón directo
5. **Redes sociales**: Enlaces a perfiles

### 3.8 Solicitar Cotización (`/solicitar-cotizacion/`)

**SEO**:
- **Title**: `Solicitar Cotización | Cuadernos Corporativos Personalizados`
- **Meta Description**: `Pide tu presupuesto gratis de cuadernos corporativos personalizados. Respuesta en menos de 24h. Formulario rápido y sin compromiso.`
- **H1**: `Solicita tu Cotización`

**Estructura**:
1. **Formulario detallado**:
   - Nombre completo
   - Empresa
   - Email
   - Teléfono
   - Tipo de cuaderno (select)
   - Cantidad estimada
   - Tamaño
   - Opciones de personalización (checkboxes)
   - Mensaje adicional
   - Archivo adjunto (logo/diseño)
2. **Garantía**: "Respuesta en menos de 24 horas"
3. **FAQ rápida**: 2-3 preguntas sobre el proceso de cotización

---

## 4. Estrategia SEO

### 4.1 Keywords Principales

| Keyword | Volúmen estimado | Intención | Dónde usar |
|---------|-----------------|-----------|------------|
| cuadernos corporativos | Alto | Transaccional | Home, Landing, Title general |
| cuadernos corporativos personalizados | Alto | Transaccional | Landing, H1, Meta |
| cuadernos personalizados | Medio | Transaccional | Subcategorías, Blog |
| cuadernos con logo | Medio | Transaccional | Subcategorías |
| cuadernos ecológicos corporativos | Bajo-Medio | Transaccional | Subcategoría ecológicos |
| agendas corporativas | Medio | Transaccional | Subcategoría agendas |
| libretas empresariales | Bajo | Transaccional | Subcategoría libretas |
| cuadernos de tapa dura | Bajo | Transaccional | Subcategoría tapa dura |
| cuadernos anillados corporativos | Bajo | Transaccional | Subcategoría wire-o |

### 4.2 Keywords Longtail (Blog)

- "cómo diseñar un cuaderno corporativo"
- "beneficios de los cuadernos ecológicos para empresas"
- "cuánto cuesta un cuaderno corporativo personalizado"
- "mejores materiales para cuadernos corporativos"
- "cuadernos corporativos para eventos"
- "cómo elegir un cuaderno corporativo para tu empresa"
- "cuadernos corporativos vs libretas: diferencias"
- "tendencias en cuadernos corporativos 2024"

### 4.3 SEO On-Page

**Títulos (Title)**:
- Longitud: 50-60 caracteres
- Keyword principal al inicio
- Incluir marca al final
- Ejemplo: `Cuadernos Corporativos Personalizados | [Marca]`

**Meta Descripciones**:
- Longitud: 130-160 caracteres
- Incluir llamada a la acción
- Ejemplo: `Cuadernos corporativos 100% personalizados con tu marca. Tapa dura, blanda y ecológica. Pide tu presupuesto gratis. Respuesta en 24h.`

**Encabezados**:
- H1 único por página con keyword principal
- H2 para secciones principales (4-7 por página)
- H3 para detalles internos
- Keywords en al menos el 50% de H2

**Contenido**:
- Textos originales y únicos (no copiar competidores)
- Enfoque "helpful, people-first content"
- Incluir sinónimos y entidades relacionadas
- Listas y tablas para facilitar lectura y featured snippets
- Mínimo 600 palabras en páginas principales, 800+ en blog

**Imágenes**:
- Formato WebP (compresión)
- Lazy loading habilitado
- Tags ALT descriptivos con keywords
- Nombre de archivo SEO-friendly (ej: `cuaderno-corporativo-tapa-dura-azul.webp`)

**Links Internos**:
- Enlaces contextuales entre páginas relacionadas
- Breadcrumbs en todas las páginas
- Posts del blog enlazan a categorías de producto

### 4.4 SEO Técnico

**Robots.txt**:
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://[dominio]/sitemap.xml
```

**Sitemap.xml**:
- Dinámico, se actualiza automáticamente
- Incluir todas las páginas indexables
- Priorizar páginas principales (Home, Categorías)
- Imágenes y videos si aplica

**HTTPS**: Certificado SSL activo en todo el sitio

**Core Web Vitals**:
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Optimización de imágenes, CSS y JavaScript

**Mobile-First**:
- Diseño responsive adaptable
- Touch targets mínimos de 48px
- Sin contenido horizontal scroll
- Prueba en Google Mobile-Friendly Test

**Canonical Tags**:
- Implementar en todas las páginas
- Evitar contenido duplicado
- Canonical auto-referenciado en páginas principales

**Hreflang** (si aplica múltiples regiones):
- `<link rel="alternate" hreflang="es" href="https://[dominio]/" />`
- `<link rel="alternate" hreflang="es-ES" href="https://[dominio]/" />`

### 4.5 Schema / JSON-LD

**Home**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Marca]",
  "url": "https://[dominio]",
  "logo": "https://[dominio]/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[teléfono]",
    "contactType": "customer service"
  },
  "sameAs": ["https://facebook.com/...", "https://instagram.com/..."]
}
```

**Categorías de Producto**:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un cuaderno corporativo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un cuaderno corporativo es un producto de papelería personalizado..."
      }
    }
  ]
}
```

**Páginas de Producto**:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Nombre Producto]",
  "description": "[Descripción]",
  "image": "[URL imagen]",
  "brand": {
    "@type": "Brand",
    "name": "[Marca]"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "[precio]",
    "availability": "https://schema.org/InStock"
  }
}
```

**Breadcrumbs** (todas las páginas internas):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://[dominio]/"},
    {"@type": "ListItem", "position": 2, "name": "Cuadernos Corporativos", "item": "https://[dominio]/cuadernos-corporativos/"}
  ]
}
```

### 4.6 Open Graph / Twitter Cards

```html
<!-- Open Graph -->
<meta property="og:title" content="[Título de la página]" />
<meta property="og:description" content="[Descripción de la página]" />
<meta property="og:image" content="[URL de imagen representativa]" />
<meta property="og:url" content="[URL de la página]" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="[Marca]" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Título de la página]" />
<meta name="twitter:description" content="[Descripción de la página]" />
<meta name="twitter:image" content="[URL de imagen representativa]" />
```

---

## 5. Estrategia de Contenidos

### 5.1 Calendario Editorial (Primeros 3 meses)

| Mes | Post | Categoría | Keyword objetivo |
|-----|------|-----------|------------------|
| 1 | "Cómo elegir el cuaderno corporativo perfecto para tu empresa" | Guías | cuaderno corporativo perfecto |
| 1 | "Beneficios de los cuadernos ecológicos corporativos" | Tendencias | cuadernos ecológicos corporativos |
| 2 | "Casos de éxito: Empresas que transformaron su imagen con cuadernos personalizados" | Casos de Éxito | cuadernos personalizados empresas |
| 2 | "Guía completa: Tipos de encuadernado para cuadernos corporativos" | Guías | encuadernado cuadernos corporativos |
| 3 | "Tendencias en cuadernos corporativos 2024" | Tendencias | tendencias cuadernos corporativos |
| 3 | "Cuadernos corporativos para eventos: Todo lo que necesitas saber" | Marketing | cuadernos corporativos eventos |

### 5.2 Tipos de Contenido

- **Blog posts**: Artículos de 800-1200 palabras
- **Infografías**: "Anatomía de un cuaderno corporativo", "Proceso de fabricación"
- **Guías descargables**: PDF "Guía de Papelería Corporativa" (lead magnet)
- **Videos cortos**: Proceso de personalización, testimonios en vídeo
- **Casos de éxito**: Estudios breves con fotos antes/después

### 5.3 Optimización para Featured Snippets

- Definiciones claras en primer párrafo (para snippets de definición)
- Listas numeradas para procesos paso a paso
- Tablas comparativas para comparaciones
- Preguntas como H2 con respuesta directa en el párrafo siguiente

---

## 6. Estrategia E-E-A-T

### 6.1 Experiencia

- Destacar años de experiencia en textos ("Más de X años fabricando...")
- Fotos reales de fábrica y proceso productivo
- Testimonios con nombre, cargo y foto del cliente
- Portfolio de proyectos realizados

### 6.2 Expertise

- Blog con contenido técnico detallado
- Autor del blog identificado con perfil y experiencia
- Contenido educativo sobre materiales y procesos
- Especificaciones técnicas completas en productos

### 6.3 Authoritativeness

- Logos de clientes destacados en Home y Quiénes Somos
- Menciones en medios o blogs del sector (backlinks)
- Participación en ferias del sector
- Certificaciones visibles (FSC, ISO)

### 6.4 Trustworthiness

- Datos de contacto completos y visibles
- Política de privacidad y aviso legal
- Certificados de pago seguro
- Reseñas verificadas (Google, Trustpilot)
- Garantía de productos destacada

---

## 7. Elementos de Conversión (CRO)

### 7.1 CTAs

- **Header**: Botón fijo "Solicitar Presupuesto"
- **WhatsApp flotante**: Esquina inferior derecha, siempre visible
- **En páginas de producto**: Botón "Cotizar este producto"
- **En blog**: CTA contextual relacionado con el post
- **Pop-up de salida**: Oferta de descarga de guía gratuita

### 7.2 Formularios

- **Cotización rápida**: 5-6 campos (nombre, email, teléfono, tipo, cantidad, mensaje)
- **Cotización detallada**: 8-10 campos (incluye opciones de personalización)
- **Contacto general**: 4-5 campos
- **Suscripción blog**: Email únicamente

### 7.3 Elementos de Confianza

- Logos de clientes
- Testimonios con foto
- Certificaciones (FSC, ISO)
- Sellos de pago seguro
- Garantía de satisfacción
- Tiempo de respuesta garantizado

### 7.4 Chat en Vivo

- Widget de chat en vivo (horario laboral)
- Respuestas automáticas fuera de horario
- Formulario de contacto como alternativa

---

## 8. Checklist de Implementación

### 8.1 Fase 1 - Estructura (Semanas 1-2)

- [ ] Crear estructura de carpetas según arquitectura definida
- [ ] Implementar sistema de rutas (URLs limpias)
- [ ] Crear menú principal con dropdowns
- [ ] Implementar footer completo
- [ ] Crear sistema de breadcrumbs
- [ ] Configurar robots.txt
- [ ] Generar sitemap.xml

### 8.2 Fase 2 - Páginas Principales (Semanas 3-4)

- [ ] Desarrollar Home con todas las secciones
- [ ] Crear Landing "Cuadernos Corporativos"
- [ ] Crear todas las subcategorías (6 páginas)
- [ ] Crear página Quiénes Somos
- [ ] Crear página Contacto
- [ ] Crear página Solicitar Cotización
- [ ] Implementar formularios con validación

### 8.3 Fase 3 - Blog y Contenido (Semanas 5-6)

- [ ] Crear estructura del blog
- [ ] Implementar categorías del blog
- [ ] Crear plantilla de post
- [ ] Escribir 2-3 posts iniciales
- [ ] Implementar Schema FAQ en páginas principales
- [ ] Crear secciones FAQ en landing y subcategorías

### 8.4 Fase 4 - SEO Técnico (Semana 7)

- [ ] Implementar todos los Schema/JSON-LD
- [ ] Configurar Open Graph y Twitter Cards
- [ ] Optimizar imágenes (WebP, lazy load, ALT tags)
- [ ] Configurar canonical tags
- [ ] Implementar hreflang (si aplica)
- [ ] Optimizar Core Web Vitals
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics 4

### 8.5 Fase 5 - CRO y UX (Semana 8)

- [ ] Implementar botón WhatsApp flotante
- [ ] Configurar chat en vivo
- [ ] Crear pop-up de salida (lead magnet)
- [ ] Optimizar formularios (A/B testing)
- [ ] Implementar elementos de confianza
- [ ] Pruebas de usabilidad móvil

### 8.6 Fase 6 - Lanzamiento (Semana 9)

- [ ] Pruebas finales en todos los dispositivos
- [ ] Revisión de todos los títulos y meta descriptions
- [ ] Verificar todos los enlaces internos
- [ ] Prueba de velocidad (PageSpeed Insights)
- [ ] Lanzamiento y monitoreo inicial
- [ ] Configurar alertas de Search Console

---

## 9. Métricas de Éxito

### 9.1 SEO (Primeros 6 meses)

| Métrica | Objetivo |
|---------|----------|
| Tráfico orgánico | +50% vs mes anterior |
| Posición media "cuadernos corporativos" | Top 10 → Top 3 |
| Páginas indexadas | 100+ |
| Backlinks | 20+ dominios de referencia |
| Core Web Vitals | Todos "Bueno" en PageSpeed |

### 9.2 Conversión

| Métrica | Objetivo |
|---------|----------|
| Tasa de conversión (cotizaciones) | 2-3% |
| Leads mensuales | 50+ |
| Tiempo medio en página | >2 minutos |
| Tasa de rebote | <50% |

### 9.3 Contenido

| Métrica | Objetivo |
|---------|----------|
| Posts publicados | 2/mes mínimo |
| Tráfico al blog | 30% del total |
| Descargas de guías | 20/mes |

---

## 10. Tecnologías Recomendadas

### 10.1 Stack

- **Framework**: Next.js o Nuxt.js (SSG/SSR para SEO)
- **CMS**: Headless (Strapi, Contentful o Sanity) para blog
- **Styling**: Tailwind CSS
- **Hosting**: Vercel o Netlify (CDN global)
- **Formularios**: Formspree o Netlify Forms
- **Analytics**: Google Analytics 4 + Google Tag Manager
- **SEO**: Yoast o RankMath (si WordPress), o implementación manual

### 10.2 Integraciones

- **WhatsApp Business API**: Botón de contacto directo
- **Google Search Console**: Monitoreo SEO
- **Google Analytics 4**: Análisis de tráfico
- **Hotjar o Microsoft Clarity**: Mapas de calor y grabaciones
- **Mailchimp o similar**: Newsletter y email marketing

---

## 11. Notas Adicionales

### 11.1 Diferenciadores vs Competencia

1. **Contenido extenso**: Superar las 1000 palabras en landing principal (competencia promedio: 600)
2. **FAQ con Schema**: Ningún competidor top usa FAQ schema
3. **Blog activo**: Solo 1 de los 10 principales tiene blog
4. **Configurador online**: Oportunidad de diferenciación a largo plazo
5. **Contenido descargable**: Lead magnets para captar leads (competencia no lo hace)

### 11.2 Prioridades SEO

1. **Alto impacto / Baja dificultad**: FAQ Schema, optimización de títulos, breadcrumbs
2. **Alto impacto / Alta dificultad**: Configurador 3D, contenido extenso, linkbuilding
3. **Bajo impacto / Baja dificultad**: Open Graph, canonical tags, robots.txt
4. **Bajo impacto / Alta dificultad**: AMP, microsite de contenidos

### 11.3 Riesgos y Mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| Contenido duplicado | Canonical tags + contenido único |
| Velocidad lenta | Optimización de imágenes + CDN |
| Posicionamiento lento | Estrategia de longtail + blog |
| Competencia fuerte | Diferenciación por contenido + E-E-A-T |

---

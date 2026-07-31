# Mochilas Publicitarias - Rediseño Profesional

Diseño web profesional para mochilaspublicitarias.pe, inspirado en Vélez y Crepier.

## Estructura del Proyecto

```
mochilas-rediseño/
├── index.html          # Página principal
├── producto.html       # Detalle de producto
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── main.js         # JavaScript principal
└── images/             # Imágenes (agregar logo y productos)
```

## Características del Diseño

### Inspirado en Vélez y Crepier:
- **Header limpio**: Barra superior con info de contacto + navegación elegante
- **Hero profesional**: Gradiente oscuro con estadísticas de confianza
- **Tarjetas de producto**: Sin marcas de agua, hover effects, badges discretos
- **Categorías visuales**: Grid con imágenes y hover effects
- **Testimonios**: Sección de prueba social
- **CTA claro**: Botones de acción prominentes
- **Footer completo**: Información de contacto y enlaces

### Mejoras vs Diseño Anterior:
1. ✅ Sin marcas de agua en imágenes
2. ✅ Hover effects en tarjetas de producto
3. ✅ Badges de categoría discretos (Nuevo, Popular, Premium)
4. ✅ Botón de cotización integrado
5. ✅ WhatsApp flotante discreto
6. ✅ Responsive design completo
7. ✅ Animaciones suaves
8. ✅ Tipografía elegante (Playfair Display + Inter)

## Cómo Implementar

### Opción 1: Reemplazo Directo
1. Copia todos los archivos a tu hosting
2. Reemplaza las imágenes de ejemplo con tus productos
3. Actualiza los números de teléfono y enlaces de WhatsApp

### Opción 2: Integración Gradual
1. Copia `css/styles.css` a tu servidor
2. Agrega las clases CSS a tu HTML existente
3. Copia `js/main.js` para las interacciones

## Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary: #1a1a2e;      /* Color principal */
    --accent: #e94560;        /* Color de acento */
    --whatsapp: #25d366;      /* Color de WhatsApp */
}
```

### Cambiar Tipografía
```css
:root {
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Agregar Productos
Copia una tarjeta de producto existente y modifica:
- Imagen (reemplaza URL)
- Título
- Código de producto
- Características
- Enlace de WhatsApp (agrega tu número)

## Imágenes Requeridas

1. **Logo**: Guarda tu logo como `images/logo.png`
2. **Productos**: Usa URLs de tu sitio actual o sube imágenes
3. **Favicon**: Crea un favicon de 32x32px

## Funcionalidades JavaScript

- Menú móvil responsive
- Filtros de productos con animación
- Scroll animations (Intersection Observer)
- Efecto de header al hacer scroll
- Smooth scroll para enlaces internos
- Galería de thumbnails en página de producto
- Selección de colores
- Tabs de información

## Navegador Soportado

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Optimización

- Imágenes con `loading="lazy"` para carga diferida
- CSS optimizado con variables
- JavaScript modular y funcional
- Animaciones que respetan `prefers-reduced-motion`

## Soporte

Para soporte técnico, contactar a tu desarrollador o revisar la documentación de CSS/HTML.

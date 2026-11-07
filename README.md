# Coral Store

Catálogo en línea de Coral Store: tienda boutique de Monterrey que revende piezas
originales de tiendas y outlets de Estados Unidos. El sitio es un escaparate que
termina en WhatsApp — el cliente arma su carrito y envía el pedido por ahí; no
cobra en línea todavía.

Construido con [Next.js](https://nextjs.org) (App Router), TypeScript y Tailwind CSS v4.

## Estado del proyecto

Esto es la base real del sitio (no el prototipo de un solo archivo HTML que se usó
para aprobar el diseño). Por ahora:

- Diseño nuevo, inspirado en la referencia que aprobó la dueña (Laurenci Perfumes):
  fondo crema + rosa pálido, acento vino, tipografía condensada para títulos.
- Navegación de categorías a la izquierda (fija en escritorio, panel en celular).
- Modelo de datos con el código de producto de 7 dígitos `D C MM NNN`
  (Departamento · Categoría · Marca · Consecutivo) — ver `src/lib/catalog.ts`.
- Catálogo con productos de ejemplo claramente ficticios (`src/lib/demo-products.ts`,
  marca "Marca Demo") — **no es inventario real**.

Pendiente (próximas fases): ficha de producto, carrito y pedido por WhatsApp
(portar la lógica ya validada en el prototipo), conexión a una base de datos real
(Supabase) y panel para la dueña.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Reglas del contenido (no negociables)

Ver el contexto completo del proyecto en la conversación con Claude. En resumen:
nunca inventar marca, talla, color, precio, condición o políticas reales; los
datos de ejemplo deben quedar claramente marcados como ficticios; nada de
urgencia falsa; lo no confirmado se marca `[PENDIENTE]`.

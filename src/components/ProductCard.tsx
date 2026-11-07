"use client";

import { nombreDepartamento, enOferta, type Producto } from "@/lib/catalog";

function money(n: number) {
  return "$" + n.toLocaleString("es-MX") + ".00";
}

export function ProductCard({
  producto,
  index,
  onAdd,
}: {
  producto: Producto;
  index: number;
  onAdd: (sku: string) => void;
}) {
  const oferta = enOferta(producto);
  const tileBg = index % 2 === 0 ? "bg-bg-pink" : "bg-bg-tan";
  const variante = producto.variante ?? [producto.talla, producto.color].filter(Boolean).join(" · ");

  return (
    <div className="flex flex-col">
      <div className={`relative aspect-[4/5] overflow-hidden rounded-xl ${tileBg}`}>
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-medium text-ink">
          {nombreDepartamento(producto.departamento)}
        </span>
        {oferta && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-ink">
            Oferta
          </span>
        )}
        <svg
          viewBox="0 0 24 24"
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 stroke-ink/25"
          fill="none"
          strokeWidth="1.2"
        >
          <path d="M8 4l4 2 4-2 3 3-2 3-2-1v9.4H9.5V9.1l-1.7 1L5.5 7.5l3-3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="pt-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          {producto.marcaNombre}
        </p>
        <p className="font-display text-base tracking-wide text-ink">{producto.nombre}</p>
        {variante && <p className="text-xs text-muted">{variante}</p>}

        <div className="mt-2 flex items-baseline gap-2">
          {oferta && (
            <span className="text-xs text-muted line-through">{money(producto.precioOriginal!)}</span>
          )}
          <span className="font-semibold text-accent">{money(producto.precio)} MXN</span>
        </div>

        <button className="mt-1 text-xs font-medium text-ink underline underline-offset-2">
          Ver pieza
        </button>

        <button
          onClick={() => onAdd(producto.sku)}
          className="mt-2.5 w-full rounded-full border border-ink/70 py-2 text-xs font-semibold text-ink transition hover:border-accent hover:bg-accent hover:text-accent-ink"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

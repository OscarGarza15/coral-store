"use client";

import { DEPARTAMENTOS, CATEGORIAS, type DepartamentoId } from "@/lib/catalog";

export interface CategoriaFiltro {
  departamento: DepartamentoId;
  digito: number;
}

export function Sidebar({
  open,
  onClose,
  activa,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  activa: CategoriaFiltro | null;
  onSelect: (c: CategoriaFiltro | null) => void;
}) {
  return (
    <>
      {open && (
        <button
          aria-label="Cerrar categorías"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-bg px-5 pb-10 pt-6 transition-transform lg:static lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-transparent lg:px-0 lg:pt-2 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <h2 className="font-display text-lg tracking-wide">Categorías</h2>
          <button onClick={onClose} aria-label="Cerrar" className="p-1">
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-ink" fill="none" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <h2 className="hidden font-display text-sm tracking-[0.2em] text-muted lg:block lg:mb-3">
          CATEGORÍAS
        </h2>

        <button
          onClick={() => onSelect(null)}
          className={`mb-4 block w-full rounded-full px-3 py-2 text-left text-sm font-semibold ${
            activa === null ? "bg-accent text-accent-ink" : "text-ink hover:bg-bg-pink"
          }`}
        >
          Ver todo
        </button>

        {DEPARTAMENTOS.map((dep) => (
          <div key={dep.id} className="mb-5">
            <p className="mb-1.5 flex items-center gap-1.5 px-3 text-sm font-bold text-ink">
              {dep.nombre === "Dama" && <span aria-hidden>💖</span>}
              {dep.nombre}
            </p>
            <ul>
              {CATEGORIAS[dep.id].map((cat) => {
                const isActive =
                  activa?.departamento === dep.id && activa.digito === cat.digito;
                return (
                  <li key={cat.digito}>
                    <button
                      onClick={() => onSelect({ departamento: dep.id, digito: cat.digito })}
                      className={`block w-full rounded-full px-3 py-1.5 text-left text-sm ${
                        isActive
                          ? "bg-accent text-accent-ink font-semibold"
                          : "text-muted hover:bg-bg-pink hover:text-ink"
                      }`}
                    >
                      {cat.nombre}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
}

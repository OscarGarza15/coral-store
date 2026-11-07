"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar, type CategoriaFiltro } from "@/components/Sidebar";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTOS_DEMO } from "@/lib/demo-products";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoria, setCategoria] = useState<CategoriaFiltro | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const productos = useMemo(() => {
    if (!categoria) return PRODUCTOS_DEMO;
    return PRODUCTOS_DEMO.filter(
      (p) => p.departamento === categoria.departamento && p.categoriaDigito === categoria.digito
    );
  }, [categoria]);

  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(true)} cartCount={cartCount} />

      <div className="mx-auto w-full max-w-[1280px] px-4 py-6 lg:flex lg:gap-10">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activa={categoria}
          onSelect={(c) => {
            setCategoria(c);
            setSidebarOpen(false);
          }}
        />

        <main className="flex-1">
          <section className="mb-8 rounded-2xl bg-bg-pink px-6 py-10 sm:px-10 sm:py-14">
            <h1 className="font-display text-4xl leading-[1.05] text-accent sm:text-5xl">
              PIEZAS ÚNICAS.
              <br />
              PRECIOS JUSTOS.
            </h1>
            <p className="mt-4 max-w-sm text-sm text-ink/80">
              Originales de tiendas y outlets de Estados Unidos. Pide por WhatsApp.
            </p>
            <button className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:bg-accent-hover">
              Explorar catálogo
            </button>
          </section>

          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-sm tracking-[0.15em] text-muted">
              {productos.length} {productos.length === 1 ? "PIEZA" : "PIEZAS"}
            </h2>
          </div>

          {productos.length === 0 ? (
            <p className="py-20 text-center text-sm text-muted">
              Aún no hay piezas en esta categoría. Muy pronto subimos las primeras fotos.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {productos.map((p, i) => (
                <ProductCard key={p.sku} producto={p} index={i} onAdd={() => setCartCount((c) => c + 1)} />
              ))}
            </div>
          )}
        </main>
      </div>

      <footer className="mt-16 border-t border-line px-4 py-10 text-center text-xs text-muted">
        Prototipo en construcción — productos, precios y marca de ejemplo (&quot;Marca Demo&quot;); no representan inventario real de Coral Store.
      </footer>
    </>
  );
}

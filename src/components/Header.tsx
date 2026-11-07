"use client";

import Link from "next/link";

export function Header({
  onMenuClick,
  cartCount,
}: {
  onMenuClick: () => void;
  cartCount: number;
}) {
  return (
    <header className="sticky top-0 z-30 bg-bg/95 backdrop-blur border-b border-line">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-4 px-4">
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          aria-label="Abrir categorías"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-ink" fill="none" strokeWidth="1.6">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>

        <Link href="/" className="flex flex-1 items-center justify-center gap-2 lg:flex-none lg:justify-start">
          <span className="font-display text-xl tracking-[0.15em] text-accent">CORAL STORE</span>
        </Link>

        <div className="hidden flex-1 items-center md:flex">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Buscar en el catálogo"
              className="w-full rounded-full border border-line bg-white/60 px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <svg
              viewBox="0 0 24 24"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 stroke-muted"
              fill="none"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-full" aria-label="Carrito">
          <span className="relative">
            <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-ink" fill="none" strokeWidth="1.6">
              <path
                d="M6 7h15l-1.5 9.5a2 2 0 0 1-2 1.7H8.3a2 2 0 0 1-2-1.6L4 3H2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-ink">
                {cartCount}
              </span>
            )}
          </span>
        </button>
      </div>
    </header>
  );
}

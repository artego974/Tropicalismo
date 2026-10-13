import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../content/site.js";
import { SunMark } from "./decor.jsx";
import { cx } from "./ui.jsx";

const sectionIds = navItems.map((item) => item.id);

// Destaca no menu a seção que está no meio da tela.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target.id) : visible.delete(entry.target.id)));
        setActive(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!menuOpen) return;
    const desktop = window.matchMedia("(min-width: 64rem)");
    const close = () => setMenuOpen(false);
    const onKeyDown = (event) => event.key === "Escape" && close();
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", close);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-tinta bg-papel/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex shrink-0 items-center gap-2 font-display text-2xl leading-none">
          <SunMark className="size-9" />
          Tropicália
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  className={cx(
                    "rounded-full px-3 py-1.5 text-sm font-semibold transition-colors",
                    active === id ? "bg-tinta text-papel" : "hover:bg-sol",
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center border-2 border-tinta bg-sol shadow-pop-sm lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-celular"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
        </button>
      </div>

      <div className="stripe-tropical h-1.5" aria-hidden="true" />

      <nav
        id="menu-celular"
        aria-label="Menu"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100svh-4.5rem)] overflow-y-auto border-b-2 border-tinta bg-papel shadow-pop lg:hidden"
      >
        <ul className="mx-auto grid w-full max-w-7xl px-4 py-3 sm:grid-cols-2 sm:gap-x-8 sm:px-6 lg:px-8">
          {navItems.map(({ id, label, number }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={active === id ? "location" : undefined}
                className="flex items-baseline gap-3 border-b border-tinta/15 py-3.5 text-xl font-bold"
              >
                <span className="text-xs tabular-nums text-tinta/60">{number}</span>
                <span className={cx(active === id && "underline decoration-urucum decoration-4 underline-offset-4")}>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

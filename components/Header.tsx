"use client";

import { useEffect, useState } from "react";

type Link = { href: string; label: string };

export default function Header({ name, links }: { name: string; links: Link[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="header" data-scrolled={scrolled || open}>
      <div className="container header__bar">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          {name}
        </a>
        <nav className="nav" aria-label="Hoofdmenu">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="drawer"
          aria-label={open ? "Sluit menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
      <nav id="drawer" className="drawer" data-open={open} aria-label="Mobiel menu" aria-hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

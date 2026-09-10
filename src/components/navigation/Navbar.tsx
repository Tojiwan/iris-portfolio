"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-lavender/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <a
          href="#top"
          className="font-montserrat text-sm font-semibold tracking-[0.12em] text-navy"
        >
          Iris Quiambao
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-montserrat text-[13px] uppercase tracking-[0.14em] text-black transition-colors hover:text-navy hover:underline hover:underline-offset-4"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="font-montserrat text-[13px] uppercase tracking-[0.18em] text-navy md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && <MobileMenu links={links} onNavigate={() => setOpen(false)} />}
    </header>
  );
}

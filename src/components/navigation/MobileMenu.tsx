"use client";

export default function MobileMenu({
  links,
  onNavigate,
}: {
  links: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  return (
    <nav aria-label="Mobile" className="border-t border-navy/10 bg-lavender px-6 py-4 md:hidden">
      <ul className="flex flex-col gap-4">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={onNavigate}
              className="block font-montserrat text-sm uppercase tracking-[0.16em] text-black"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

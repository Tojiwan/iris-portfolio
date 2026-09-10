export default function ProjectLink({
  title,
  href,
  accent = "#8d8400",
}: {
  title: string;
  href: string;
  accent?: string;
}) {
  return (
    <a
      href={href}
      style={{ color: accent }}
      className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.14em] underline-offset-4 transition-all duration-300 hover:tracking-[0.2em] hover:underline"
    >
      {title} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-montserrat text-[13px] uppercase tracking-[0.18em] text-black">
      {children}
    </p>
  );
}

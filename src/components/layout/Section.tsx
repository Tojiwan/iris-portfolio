import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export default function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative w-full py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

"use client";

import { useState } from "react";
import ProjectImage from "@/components/ui/ProjectImage";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";

export default function PostersGrid({
  posters,
}: {
  posters: { src: string; alt: string }[];
}) {
  const [selected, setSelected] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {posters.map((p, i) => (
          <Reveal key={p.src} delay={i * 0.06}>
            <button
              type="button"
              onClick={() => setSelected(p)}
              aria-label={`Enlarge ${p.alt}`}
              className="block w-full cursor-zoom-in"
            >
              <ProjectImage src={p.src} alt={p.alt} />
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox
        src={selected?.src ?? null}
        alt={selected?.alt ?? ""}
        onClose={() => setSelected(null)}
      />
    </>
  );
}

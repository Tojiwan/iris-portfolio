"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type PanInfo } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";

export type WorkImage = {
  src: string;
  alt: string;
  type: "mobile" | "desktop";
};

function ZoomCard({
  image,
  delay,
  onOpen,
  size = "desktop",
}: {
  image: WorkImage;
  delay: number;
  onOpen: (img: WorkImage) => void;
  size?: "mobile" | "desktop";
}) {
  const isMobile = size === "mobile";

  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={() => onOpen(image)}
        aria-label={`Enlarge ${image.alt}`}
        className="block w-full cursor-zoom-in overflow-hidden rounded-[18px] bg-white shadow-[0_24px_60px_-24px_rgba(27,26,85,0.35)]"
      >
        <div className="bg-white overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={isMobile ? 250 : 1600}
            height={isMobile ? 541 : 1200}
            sizes={isMobile ? "250px" : "(max-width: 768px) 50vw, 400px"}
            className={`h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              isMobile ? "object-contain" : "object-cover"
            }`}
          />
        </div>
      </button>
    </Reveal>
  );
}

function SlideCard({ image }: { image: WorkImage }) {
  return (
    <div className="w-full shrink-0 overflow-hidden rounded-[14px] bg-white shadow-[0_16px_40px_-16px_rgba(27,26,85,0.35)]">
      <div className="bg-white overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={864}
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

function MobileCarousel({ images }: { images: WorkImage[] }) {
  const [current, setCurrent] = useState(0);
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, total - 1)));
    },
    [total],
  );

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      goTo(current + 1);
    } else if (info.offset.x > threshold) {
      goTo(current - 1);
    }
  };

  return (
    <div className="md:hidden">
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          ref={dragRef}
          className="flex"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          animate={{ x: current * -100 + "%" }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 300, damping: 30 }
          }
        >
          {images.map((img) => (
            <div key={img.src} className="w-full shrink-0 px-1">
              <SlideCard image={img} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
              i === current ? "bg-navy" : "bg-navy/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkGallery({
  images,
  variant,
}: {
  images: WorkImage[];
  variant: "maccii" | "super" | "chef";
}) {
  const [selected, setSelected] = useState<WorkImage | null>(null);
  const mobileImages = images.filter((img) => img.type === "mobile");

  return (
    <>
      {/* MACCII — mobile imgs left, desktop imgs right */}
      {variant === "maccii" && (
        <>
          {/* Desktop: wireframe layout */}
          <div className="hidden md:flex md:flex-row md:items-stretch md:gap-5">
            <div className="flex flex-row gap-4 md:w-[50%]">
              {images
                .filter((img) => img.type === "mobile")
                .map((img, i) => (
                  <ZoomCard
                    key={img.src}
                    image={img}
                    delay={i * 0.06}
                    onOpen={setSelected}
                    size="mobile"
                  />
                ))}
            </div>
            <div className="flex flex-col gap-5 md:w-[50%]">
              {images
                .filter((img) => img.type === "desktop")
                .map((img, i) => (
                  <ZoomCard
                    key={img.src}
                    image={img}
                    delay={0.08 + i * 0.06}
                    onOpen={setSelected}
                    size="desktop"
                  />
                ))}
            </div>
          </div>

          {/* Mobile: carousel */}
          <MobileCarousel images={mobileImages} />
        </>
      )}

      {/* SUPER — desktop imgs left, mobile imgs right */}
      {variant === "super" && (
        <>
          {/* Desktop: wireframe layout */}
          <div className="hidden md:flex md:flex-row md:items-stretch md:gap-5">
            <div className="flex flex-col gap-5 md:w-[50%]">
              {images
                .filter((img) => img.type === "desktop")
                .map((img, i) => (
                  <ZoomCard
                    key={img.src}
                    image={img}
                    delay={i * 0.06}
                    onOpen={setSelected}
                    size="desktop"
                  />
                ))}
            </div>
            <div className="flex flex-row gap-4 md:w-[50%]">
              {images
                .filter((img) => img.type === "mobile")
                .map((img, i) => (
                  <ZoomCard
                    key={img.src}
                    image={img}
                    delay={0.08 + i * 0.06}
                    onOpen={setSelected}
                    size="mobile"
                  />
                ))}
            </div>
          </div>

          {/* Mobile: carousel */}
          <MobileCarousel images={mobileImages} />
        </>
      )}

      {/* CHEF — desktop: 3-col grid | mobile: carousel */}
      {variant === "chef" && (
        <>
          {/* Mobile: carousel */}
          <MobileCarousel images={mobileImages} />

          {/* Desktop: 3-col grid */}
          <div className="hidden md:grid gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-3">
              {images.find((img) => img.type === "mobile") && (
                <ZoomCard
                  image={images.find((img) => img.type === "mobile")!}
                  delay={0}
                  onOpen={setSelected}
                  size="mobile"
                />
              )}
            </div>
            <div className="space-y-6 md:col-span-6">
              {images
                .filter((img) => img.type === "desktop")
                .map((img, i) => (
                  <ZoomCard
                    key={img.src}
                    image={img}
                    delay={0.06 + i * 0.06}
                    onOpen={setSelected}
                    size="desktop"
                  />
                ))}
            </div>
            <div className="md:col-span-3">
              {images.filter((img) => img.type === "mobile")[1] && (
                <ZoomCard
                  image={images.filter((img) => img.type === "mobile")[1]}
                  delay={0.12}
                  onOpen={setSelected}
                  size="mobile"
                />
              )}
            </div>
          </div>
        </>
      )}

      <Lightbox
        src={selected?.src ?? null}
        alt={selected?.alt ?? ""}
        onClose={() => setSelected(null)}
      />
    </>
  );
}

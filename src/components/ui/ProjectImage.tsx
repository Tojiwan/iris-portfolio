import Image from "next/image";

export default function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`group overflow-hidden bg-lavender ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1100px"
        className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

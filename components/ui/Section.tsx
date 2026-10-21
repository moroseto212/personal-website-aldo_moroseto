import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import Reveal from "@/components/motion/Reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Section({ id, children, className, as: Tag = "section" }: SectionProps) {
  return (
    <Tag id={id} className={cn("relative py-16 md:py-28", className)}>
      <div className="container-page">{children}</div>
    </Tag>
  );
}

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {label && (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {label}
        </span>
      )}
      <h2 className="text-display-sm max-w-3xl text-balance">{title}</h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

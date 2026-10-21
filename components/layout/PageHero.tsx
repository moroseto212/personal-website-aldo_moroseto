import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageHero({ label, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-32 md:pb-20 md:pt-44">
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-page relative">
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {label}
          </span>
        </Reveal>

        <h1 className="text-display mt-6 max-w-4xl text-balance">
          <WordReveal text={title} delay={0.15} />
        </h1>

        <Reveal delay={0.35}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </Reveal>

        {children && <Reveal delay={0.45}>{children}</Reveal>}
      </div>
    </section>
  );
}

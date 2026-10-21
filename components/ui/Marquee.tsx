import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

export default function Marquee({ children, className, duration = 42 }: MarqueeProps) {
  return (
    <div className={cn("marquee relative overflow-hidden", className)}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14">
          {children}
        </div>
        <div className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14" aria-hidden="true">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />
    </div>
  );
}

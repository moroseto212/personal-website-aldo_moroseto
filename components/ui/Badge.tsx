import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  dot?: boolean;
};

export default function Badge({ children, className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />}
      {children}
    </span>
  );
}

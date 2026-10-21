import type { ReactNode } from "react";
import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/cn";

type CalloutProps = {
  type?: "info" | "tip" | "warning";
  title?: string;
  children: ReactNode;
};

const styles = {
  info: "border-sky-400/30 bg-sky-400/5 text-sky-100",
  tip: "border-accent-2/30 bg-accent-2/5 text-emerald-50",
  warning: "border-amber-400/30 bg-amber-400/5 text-amber-50",
};

const icons = {
  info: Info,
  tip: Lightbulb,
  warning: TriangleAlert,
};

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div className={cn("my-8 flex gap-3 rounded-2xl border p-4 md:p-5", styles[type])}>
      <Icon size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div className="text-sm leading-relaxed [&_a]:underline [&_p]:m-0 [&_p+p]:mt-2">
        {title && <p className="mb-1.5 font-semibold">{title}</p>}
        {children}
      </div>
    </div>
  );
}

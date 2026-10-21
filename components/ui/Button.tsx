import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-white border border-transparent font-medium",
  secondary:
    "bg-transparent text-foreground border border-line hover:border-white/30 hover:bg-white/5",
  ghost: "bg-transparent text-muted border border-transparent hover:text-foreground",
};

const sizes = {
  sm: "h-11 px-4 text-sm gap-1.5 md:h-9",
  md: "h-11 px-5 text-sm gap-2",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center rounded-full transition-colors duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="hidden sm:block"
        >
          <path
            d="M3 11L11 3M11 3H5M11 3V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

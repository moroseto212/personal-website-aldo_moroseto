"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
  opacity?: boolean;
};

export default function Parallax({
  children,
  className,
  offset = 60,
  opacity = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const elementOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.35, 1, 1, 0.35]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, opacity: opacity ? elementOpacity : undefined }}>
        {children}
      </motion.div>
    </div>
  );
}

"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/cn";

const filters: Array<ProjectCategory | "Semua"> = ["Semua", ...projectCategories];

export default function ProjectFilter() {
  const [active, setActive] = useState<ProjectCategory | "Semua">("Semua");
  const filtered =
    active === "Semua" ? projects : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori proyek">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-3 text-sm transition-all duration-200 md:py-2",
              active === filter
                ? "border-transparent bg-foreground text-background"
                : "border-line text-muted hover:border-white/30 hover:text-foreground",
            )}
          >
            {filter}
            <span className="ml-1.5 text-xs opacity-60">
              {filter === "Semua"
                ? projects.length
                : projects.filter((project) => project.category === filter).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-faint">Belum ada proyek di kategori ini.</p>
      )}
    </>
  );
}

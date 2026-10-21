import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/project/ProjectVisual";
import Reveal from "@/components/motion/Reveal";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
  showSummary?: boolean;
};

export default function ProjectCard({ project, index = 0, showSummary = true }: ProjectCardProps) {
  return (
    <Reveal delay={Math.min(index * 0.08, 0.32)}>
      <Link
        href={`/portofolio/${project.slug}`}
        className="group block focus-visible:outline-none"
      >
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
          <ProjectVisual project={project} />
          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-balance md:text-xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-faint">
                {project.client} · {project.year}
              </p>
            </div>
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:text-foreground">
              <ArrowUpRight size={16} />
            </span>
          </div>
          {showSummary && (
            <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2 md:text-base">
              {project.summary}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-faint"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

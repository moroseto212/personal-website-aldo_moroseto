import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import ProjectVisual from "@/components/project/ProjectVisual";
import Reveal from "@/components/motion/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

type ProjectParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ProjectParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Proyek tidak ditemukan" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

async function getProject(params: ProjectParams) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return project;
}

/**
 * Shell bersama untuk semua link ke /portofolio/[slug] — tidak membaca `params`,
 * jadi bisa di-prefetch dan dipakai ulang oleh setiap navigasi (instant navigation).
 */
export default function ProjectDetailPage({ params }: PageProps<"/portofolio/[slug]">) {
  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-line pb-14 pt-32 md:pb-16 md:pt-40">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="absolute -top-24 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

          <div className="container-page relative">
            <Reveal>
              <Link
                href="/portofolio"
                className="inline-flex items-center gap-2 py-2 text-sm text-muted transition-colors hover:text-foreground sm:py-0"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Semua proyek
              </Link>
            </Reveal>

            <Suspense fallback={<ProjectHeadingSkeleton />}>
              <ProjectHeading params={params} />
            </Suspense>
          </div>
        </header>

        <Suspense fallback={<ProjectBodySkeleton />}>
          <ProjectBody params={params} />
        </Suspense>
      </article>

      <CtaSection />
    </>
  );
}

async function ProjectHeading({ params }: { params: ProjectParams }) {
  const project = await getProject(params);

  return (
    <>
      <Reveal delay={0.1}>
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            {project.category}
          </span>
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            {project.year}
          </span>
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            {project.role}
          </span>
        </div>
      </Reveal>

      <h1 className="text-display mt-6 max-w-4xl text-balance">{project.title}</h1>

      <Reveal delay={0.2}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {project.summary}
        </p>
      </Reveal>
    </>
  );
}

async function ProjectBody({ params }: { params: ProjectParams }) {
  const project = await getProject(params);

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="container-page py-12 md:py-16">
      <Reveal>
        <ProjectVisual project={project} className="aspect-[16/9]" />
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          <div className="bg-surface p-5">
            <dt className="text-xs text-faint">Klien</dt>
            <dd className="mt-1.5 text-sm font-semibold">{project.client}</dd>
          </div>
          <div className="bg-surface p-5">
            <dt className="text-xs text-faint">Peran</dt>
            <dd className="mt-1.5 text-sm font-semibold">{project.role}</dd>
          </div>
          <div className="bg-surface p-5">
            <dt className="text-xs text-faint">Tahun</dt>
            <dd className="mt-1.5 text-sm font-semibold">{project.year}</dd>
          </div>
          <div className="bg-surface p-5">
            <dt className="text-xs text-faint">Kategori</dt>
            <dd className="mt-1.5 text-sm font-semibold">{project.category}</dd>
          </div>
        </dl>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <section>
            <p className="text-xs font-medium tracking-widest text-faint uppercase">
              Masalah
            </p>
            <p className="mt-4 text-base leading-[1.85] text-muted md:text-lg">
              {project.problem}
            </p>
          </section>

          <section className="mt-12">
            <p className="text-xs font-medium tracking-widest text-faint uppercase">
              Solusi
            </p>
            <p className="mt-4 text-base leading-[1.85] text-muted md:text-lg">
              {project.solution}
            </p>
          </section>

          <section className="mt-12">
            <p className="text-xs font-medium tracking-widest text-faint uppercase">
              Fitur utama
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3.5 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.15}>
          <div className="lg:sticky lg:top-28 space-y-5">
            <div className="card p-6">
              <p className="text-xs font-medium tracking-widest text-faint uppercase">
                Dampak
              </p>
              <ul className="mt-5 space-y-5">
                {project.results.map((result) => (
                  <li key={result.label} className="border-b border-line pb-5 last:border-b-0 last:pb-0">
                    <p className="text-3xl font-semibold tracking-tight text-gradient">
                      {result.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{result.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <p className="text-xs font-medium tracking-widest text-faint uppercase">
                Teknologi
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-background/60 px-3 py-1.5 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="mt-5">
                  <Button href={project.link} variant="secondary" size="sm" external>
                    Kunjungi website
                    <ExternalLink size={13} aria-hidden="true" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label="Navigasi proyek">
        <Link
          href={`/portofolio/${previous.slug}`}
          className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-white/25"
        >
          <span className="flex items-center gap-2 text-xs text-faint">
            <ArrowLeft size={12} aria-hidden="true" />
            Sebelumnya
          </span>
          <p className="mt-2 text-sm font-semibold text-balance group-hover:text-foreground">
            {previous.title}
          </p>
        </Link>
        <Link
          href={`/portofolio/${next.slug}`}
          className="group rounded-2xl border border-line bg-surface p-5 text-right transition-colors hover:border-white/25 sm:col-start-2"
        >
          <span className="flex items-center justify-end gap-2 text-xs text-faint">
            Berikutnya
            <ArrowRight size={12} aria-hidden="true" />
          </span>
          <p className="mt-2 text-sm font-semibold text-balance group-hover:text-foreground">
            {next.title}
          </p>
        </Link>
      </nav>
    </div>
  );
}

function ProjectHeadingSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="h-6 w-24 rounded-full bg-surface animate-pulse" />
        <span className="h-6 w-12 rounded-full bg-surface animate-pulse" />
        <span className="h-6 w-20 rounded-full bg-surface animate-pulse" />
      </div>
      <div className="mt-6 h-14 w-full max-w-3xl rounded-2xl bg-surface animate-pulse" />
      <div className="mt-3 h-14 w-3/5 max-w-2xl rounded-2xl bg-surface animate-pulse" />
      <div className="mt-6 h-5 w-full max-w-2xl rounded-lg bg-surface animate-pulse" />
      <div className="mt-2.5 h-5 w-4/5 max-w-xl rounded-lg bg-surface animate-pulse" />
    </div>
  );
}

function ProjectBodySkeleton() {
  return (
    <div className="container-page py-12 md:py-16" aria-hidden="true">
      <div className="aspect-[16/9] w-full rounded-3xl border border-line bg-surface animate-pulse" />

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="bg-surface p-5">
            <div className="h-3 w-12 rounded bg-line animate-pulse" />
            <div className="mt-3 h-4 w-20 rounded bg-line animate-pulse" />
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-4 lg:col-span-7">
          {[0, 1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className={`h-4 rounded bg-surface animate-pulse ${line === 4 ? "w-1/2" : "w-full"}`}
            />
          ))}
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6 lg:col-span-5">
          <div className="h-3 w-16 rounded bg-line animate-pulse" />
          <div className="mt-6 h-8 w-24 rounded bg-line animate-pulse" />
          <div className="mt-4 h-8 w-32 rounded bg-line animate-pulse" />
        </div>
      </div>
    </div>
  );
}

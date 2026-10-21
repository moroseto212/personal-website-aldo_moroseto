import ProjectCard from "@/components/project/ProjectCard";
import Button from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-16 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Portofolio"
            title="Karya pilihan terbaru"
            description="Beberapa proyek yang saya kerjakan baru-baru ini — lengkap dengan masalah, solusi, dan hasilnya."
            className="mb-0"
          />
          <div className="shrink-0">
            <Button href="/portofolio" variant="secondary">
              Semua proyek
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

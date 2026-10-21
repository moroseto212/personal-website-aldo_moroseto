import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <section className="border-y border-line bg-surface/30 py-16 md:py-28">
      <div className="container-page">
        <SectionHeading
          label="Layanan"
          title="Bisa saya bantu apa"
          description="Dari website profil sampai aplikasi web kompleks — dikerjakan satu orang dari desain hingga peluncuran."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.slug} delay={Math.min(index * 0.07, 0.3)}>
                <Link
                  href={`/layanan#${service.slug}`}
                  className="card group flex h-full flex-col p-6 transition-all duration-300 hover:border-white/25 hover:bg-surface-2"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-background text-accent transition-colors duration-300 group-hover:text-foreground">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-foreground">
                    Selengkapnya
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

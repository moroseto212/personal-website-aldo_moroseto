import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Jasa pembuatan website, web application, desain UI/UX, optimasi performa, integrasi CMS, dan maintenance — dikerjakan dari awal sampai peluncuran.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Layanan"
        title="Dari brief sampai website meluncur"
        description="Enam layanan yang bisa berdiri sendiri atau digabung dalam satu proyek. Semua dikerjakan langsung oleh saya — tanpa lempar ke tim tak dikenal."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/kontak">Minta estimasi</Button>
          <Button href="#faq" variant="secondary">
            Pertanyaan umum
          </Button>
        </div>
      </PageHero>

      <div className="divide-y divide-line">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 py-16 md:py-24"
            >
              <div className="container-page">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                  <Reveal className="lg:col-span-5">
                    <div className="lg:sticky lg:top-28">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <p className="mt-5 text-xs font-medium tracking-widest text-faint uppercase">
                        Layanan {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-3 text-heading text-balance">{service.title}</h2>
                      <p className="mt-4 text-base leading-relaxed text-muted">
                        {service.description}
                      </p>

                      <dl className="mt-6 grid grid-cols-2 gap-3">
                        <div className="card p-4">
                          <dt className="text-xs text-faint">Estimasi waktu</dt>
                          <dd className="mt-1 text-sm font-semibold">{service.duration}</dd>
                        </div>
                        <div className="card p-4">
                          <dt className="text-xs text-faint">Mulai dari</dt>
                          <dd className="mt-1 text-sm font-semibold">{service.priceFrom}</dd>
                        </div>
                      </dl>

                      <div className="mt-6">
                        <Button href="/kontak" variant="secondary" size="sm">
                          Konsultasi layanan ini
                        </Button>
                      </div>
                    </div>
                  </Reveal>

                  <div className="lg:col-span-7">
                    <Reveal delay={0.1}>
                      <p className="text-xs font-medium tracking-widest text-faint uppercase">
                        Yang Anda dapatkan
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3.5 text-sm leading-relaxed text-muted"
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-success"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>

                    <Reveal delay={0.18}>
                      <p className="mt-10 text-xs font-medium tracking-widest text-faint uppercase">
                        Alur kerja
                      </p>
                      <ol className="mt-4 space-y-3">
                        {service.process.map((step) => (
                          <li
                            key={step.step}
                            className="flex gap-4 rounded-xl border border-line bg-surface p-4"
                          >
                            <span className="font-mono text-sm text-accent">{step.step}</span>
                            <div>
                              <p className="text-sm font-semibold text-foreground">
                                {step.title}
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-muted">
                                {step.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <Section className="border-t border-line bg-surface/30">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              label="FAQ"
              title="Pertanyaan yang sering masuk"
              description="Belum menemukan jawabannya? Kirim pesan, saya balas dalam 1×24 jam."
            />
          </div>
          <div className="lg:col-span-8" id="faq">
            <Reveal delay={0.1}>
              <FaqAccordion />
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Tidak yakin harus mulai dari mana?"
        description="Ceritakan masalahnya, saya bantu tentukan layanan mana yang benar-benar Anda butuhkan — termasuk jika jawabannya bukan jasa saya."
      />
    </>
  );
}

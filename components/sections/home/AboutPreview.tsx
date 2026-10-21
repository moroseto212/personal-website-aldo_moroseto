import { Check } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent/25 via-transparent to-accent-2/20 blur-2xl" />
              <div className="card relative aspect-[4/5] overflow-hidden">
                <Image
                  src={profile.photo}
                  alt={`Foto ${profile.name}`}
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                  <p className="mt-1 text-xs text-muted">{profile.location}</p>
                  <div className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full border border-line bg-background/70 px-3 py-1.5 text-[0.7rem] text-muted backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Terbuka untuk kolaborasi
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              label="Tentang"
              title="Detail-oriented, hasil-oriented"
              description="Saya bekerja dekat dengan konten dan tujuan bisnis Anda — bukan hanya menghias tampilan."
            />

            <Reveal delay={0.1}>
              <p className="max-w-2xl text-base leading-[1.8] text-muted md:text-lg">
                {profile.bio[1]}
              </p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {profile.principles.slice(0, 3).map((principle, index) => (
                <Reveal key={principle.title} delay={0.15 + index * 0.08}>
                  <li className="flex gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-accent">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{principle.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.4}>
              <div className="mt-9">
                <Button href="/tentang" variant="secondary">
                  Kenali lebih jauh
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { experience, profile, skills, stats } from "@/data/profile";
import { formatNumber } from "@/lib/format";
import Counter from "@/components/motion/Counter";

export const metadata: Metadata = {
  title: "Tentang",
  description: `Kenali perjalanan, prinsip kerja, dan keahlian ${profile.name} — ${profile.role} dari Bekasi, Indonesia.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Tentang"
        title="Tiga setengah tahun merawat detail di balik layar"
        description="Perjalanan dari developer freelance di Bekasi hingga menjadi website developer yang membangun produk digital — dengan prinsip kerja yang selalu sama."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/kontak">Ajak kerja sama</Button>
          <Button href="/portofolio" variant="secondary">
            Lihat portofolio
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading label="Cerita" title="Sedikit tentang saya" />
            <div className="space-y-5">
              {profile.bio.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <p className="text-base leading-[1.85] text-muted md:text-lg">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="lg:col-span-5" delay={0.2}>
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="card mx-auto overflow-hidden lg:max-w-none">
                <Image
                  src={profile.photo}
                  alt={`Foto ${profile.name}`}
                  width={720}
                  height={900}
                  className="aspect-[4/5] w-full max-w-sm object-cover object-top lg:max-w-none"
                />
              </div>

              <div className="card p-6 md:p-7">
                <p className="text-xs font-medium tracking-widest text-faint uppercase">
                  Ringkasan
                </p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-line pb-4">
                    <dt className="text-muted">Nama</dt>
                    <dd className="text-right font-medium">{profile.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-line pb-4">
                    <dt className="text-muted">Peran</dt>
                    <dd className="text-right font-medium">{profile.role}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-line pb-4">
                    <dt className="text-muted">Lokasi</dt>
                    <dd className="text-right font-medium">{profile.location}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-line pb-4">
                    <dt className="text-muted">Pengalaman</dt>
                    <dd className="text-right font-medium">
                      {formatNumber(profile.yearsOfExperience)} tahun
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Bahasa</dt>
                    <dd className="text-right font-medium">Indonesia, Inggris</dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <Button href="/kontak" variant="secondary" className="w-full">
                    Kirim pesan
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="border-y border-line bg-surface/40 py-12 md:py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-8 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="text-center md:text-left">
                  <p className="text-3xl font-semibold tracking-tight whitespace-nowrap md:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          label="Perjalanan"
          title="Pengalaman kerja"
          description="Lingkungan yang berbeda, standar yang selalu sama: kerapihan, kecepatan, dan komunikasi yang jelas."
        />

        <ol className="relative space-y-8 border-l border-line pl-6 md:pl-10">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.08}>
              <li className="relative">
                <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent md:-left-[2.85rem]" />
                <p className="text-xs font-medium tracking-widest text-faint uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight md:text-xl">
                  {item.role}
                </h3>
                <p className="text-sm text-muted">
                  {item.company} · {item.location}
                </p>
                <ul className="mt-3 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line bg-surface/30">
        <SectionHeading
          label="Nilai kerja"
          title="Empat hal yang tidak saya tawar"
          description="Prinsip yang saya bawa ke setiap proyek, dari brief pertama sampai serah terima."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {profile.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.08}>
              <div className="card h-full p-6">
                <p className="text-xs font-medium text-accent">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          label="Keahlian"
          title="Perkakas sehari-hari"
          description="Teknologi yang saya pakai untuk membangun produk — dipilih karena matang, cepat, dan enak dirawat."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.08}>
              <div className="card h-full p-6">
                <h3 className="text-sm font-semibold tracking-widest text-faint uppercase">
                  {group.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

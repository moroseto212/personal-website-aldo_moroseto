import { MapPin, Clock3, Zap } from "lucide-react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import WordReveal from "@/components/motion/WordReveal";
import { profile, stats } from "@/data/profile";
import { formatNumber } from "@/lib/format";
import { contact } from "@/data/site";

const skills = ["React", "Next.js", "TypeScript", "Motion", "Tailwind CSS"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute left-1/2 top-[-14rem] h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]" />
      <div className="absolute right-[-10rem] top-40 h-72 w-72 rounded-full bg-accent-2/15 blur-[110px]" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <Badge dot>{contact.availability}</Badge>
            </Reveal>

            <h1 className="text-display mt-7 text-balance">
              <WordReveal text="Saya membangun website" delay={0.15} />
              <br />
              <WordReveal
                text="yang cepat, jelas, dan hidup."
                delay={0.4}
                wordClassName="text-gradient"
              />
            </h1>

            <Reveal delay={0.6}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/portofolio">Lihat portofolio</Button>
                <Button href="/kontak" variant="secondary">
                  Mulai proyek
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-faint">
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent" aria-hidden="true" />
                  {profile.location}
                </li>
                <li className="flex items-center gap-2">
                  <Zap size={14} className="text-accent" aria-hidden="true" />
                  {formatNumber(profile.yearsOfExperience)} tahun pengalaman
                </li>
                <li className="flex items-center gap-2">
                  <Clock3 size={14} className="text-accent" aria-hidden="true" />
                  {contact.responseTime}
                </li>
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.5} y={40}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-accent/20 to-transparent blur-2xl" />

                <div className="card relative p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={profile.photo}
                      alt={`Foto ${profile.name}`}
                      width={112}
                      height={112}
                      priority
                      className="h-14 w-14 rounded-2xl border border-line object-cover"
                    />
                    <div>
                      <p className="font-semibold tracking-tight">{profile.name}</p>
                      <p className="text-sm text-muted">{profile.role}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line bg-background/60 px-2.5 py-1 text-xs text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center">
                    {stats.slice(0, 3).map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xl font-semibold tracking-tight">
                          {stat.value}
                          {stat.suffix}
                        </p>
                        <p className="mt-0.5 text-[0.7rem] leading-tight text-faint">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-background/60 px-3.5 py-3 text-xs text-muted">
                    <span className="h-2 w-2 rounded-full bg-success animate-pulse-dot" />
                    {contact.availability}
                  </div>
                </div>

                <div className="animate-float absolute -left-6 -top-5 hidden rounded-xl border border-line bg-surface px-3 py-2 text-xs font-medium text-muted shadow-xl shadow-black/40 sm:block md:-left-10">
                  ⚡ LCP 1,1 detik
                </div>
                <div
                  className="animate-float absolute -bottom-6 -right-4 hidden rounded-xl border border-line bg-surface px-3 py-2 text-xs font-medium text-muted shadow-xl shadow-black/40 sm:block md:-right-8"
                  style={{ animationDelay: "1.6s" }}
                >
                  ✦ Aksesibilitas 100
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

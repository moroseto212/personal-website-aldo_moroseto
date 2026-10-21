import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { contact } from "@/data/site";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export default function CtaSection({
  title = "Punya ide? Mari wujudkan bersama",
  description = "Ceritakan kebutuhan Anda — saya akan balas dengan estimasi ruang lingkup, jadwal, dan biaya dalam 1×24 jam.",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      <div className="absolute left-1/2 top-1/2 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[130px]" />
      <div className="bg-grid absolute inset-0 opacity-60" />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-sm text-balance">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/kontak">Hubungi saya</Button>
            <Button href="/portofolio" variant="secondary">
              Lihat karya dulu
            </Button>
          </div>

          <p className="mt-6 text-sm text-faint">
            atau email langsung ke{" "}
            <a
              href={`mailto:${contact.email}`}
              className="inline-block py-1.5 text-muted underline decoration-line underline-offset-4 transition-colors hover:text-foreground sm:inline sm:py-0"
            >
              {contact.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute left-1/2 top-1/3 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-page relative py-24 text-center">
        <Reveal>
          <p className="text-display text-gradient">404</p>
          <h1 className="mt-6 text-heading">Halaman tidak ditemukan</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Halaman yang Anda cari mungkin sudah dipindahkan atau alamatnya salah ketik.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/">Kembali ke beranda</Button>
            <Link
              href="/portofolio"
              className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm text-muted transition-colors hover:border-white/30 hover:text-foreground"
            >
              Lihat portofolio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

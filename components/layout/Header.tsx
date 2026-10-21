"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, navigation } from "@/data/site";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 md:pt-0",
          scrolled || open
            ? "border-b border-line bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "container-page flex items-center justify-between gap-6 transition-[height] duration-300 ease-out md:h-20",
            open ? "h-16" : scrolled ? "h-14" : "h-16",
          )}
        >
          <Link href="/" className="group -m-1 flex items-center gap-3 p-1" aria-label="Kembali ke beranda">
            <Image
              src={profile.photo}
              alt={`Foto ${profile.name}`}
              width={72}
              height={72}
              priority
              className="h-9 w-9 rounded-xl border border-line object-cover transition-colors group-hover:border-white/30"
            />
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              Aldo Moroseto
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200",
                    active ? "text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/kontak"
              className="hidden h-11 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-white/90 sm:inline-flex lg:h-10"
            >
              Hubungi saya
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-white/30 md:flex lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-gradient-to-r from-accent to-accent-2"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-background pt-[calc(4rem+env(safe-area-inset-top))] md:pt-[5.125rem] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav
              className="container-page my-auto flex flex-col gap-2 py-8"
              aria-label="Navigasi mobile"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.06 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-4"
                  >
                    <span className="text-3xl font-medium tracking-tight text-balance">
                      {item.label}
                    </span>
                    <span className="text-xs text-faint transition-colors group-hover:text-muted">
                      {item.description}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-page flex flex-col gap-3 pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
              <Link
                href="/kontak"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background"
              >
                Hubungi saya
              </Link>
              <a
                href={`mailto:${contact.email}`}
                className="text-center text-sm text-muted"
              >
                {contact.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

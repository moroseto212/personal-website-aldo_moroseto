"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Home, User, LayoutGrid, FolderOpen, Newspaper, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Bottom tab bar khas aplikasi — HANYA tampil di mobile (< 768px).
 * Di mobile tab bar ini memuat SELURUH navigasi (6 item), sehingga tombol
 * hamburger disembunyikan di <768px (masih tampil di tablet 768–1023px).
 * Desktop (≥768px) memakai nav horizontal di header seperti sebelumnya.
 */
const tabs = [
  { href: "/", label: "Beranda", Icon: Home },
  { href: "/tentang", label: "Tentang", Icon: User },
  { href: "/layanan", label: "Layanan", Icon: LayoutGrid },
  { href: "/portofolio", label: "Portofolio", Icon: FolderOpen },
  { href: "/blog", label: "Blog", Icon: Newspaper },
  { href: "/kontak", label: "Kontak", Icon: MessageCircle },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi tab"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-background/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
    >
      <ul className="flex h-14">
        {tabs.map(({ href, label, Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex h-full flex-col items-center justify-center gap-1 transition-colors duration-200",
                  active ? "text-foreground" : "text-faint hover:text-muted",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="tab-active"
                    className="absolute inset-x-3 top-0 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-2"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon size={19} strokeWidth={active ? 2.2 : 1.8} aria-hidden="true" />
                <span className="text-[0.6rem] font-medium tracking-tight">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

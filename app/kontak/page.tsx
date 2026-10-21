import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Globe } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import { contact, site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Aldo Moroseto untuk proyek website, web application, desain UI/UX, atau optimasi performa. Balasan dalam 1×24 jam.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    note: "Untuk brief dan detail proyek",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.phone,
    href: `https://wa.me/${contact.phoneHref}`,
    note: "Untuk pertanyaan cepat",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: contact.location,
    href: null,
    note: `Zona waktu ${contact.timezone} · bisa remote ke mana saja`,
  },
  {
    icon: Clock3,
    label: "Ketersediaan",
    value: contact.availability,
    href: null,
    note: contact.responseTime,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Kontak"
        title="Mari bicarakan proyek Anda"
        description="Isi form di bawah atau hubungi langsung lewat email dan WhatsApp. Saya balas dalam 1×24 jam dengan estimasi awal tanpa biaya."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="min-w-0 lg:col-span-7">
              <ContactForm />
            </Reveal>

            <div className="lg:col-span-5">
              <ul className="space-y-4">
                {channels.map((channel, index) => {
                  const Icon = channel.icon;
                  const content = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-accent">
                        <Icon size={17} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-faint">{channel.label}</span>
                        <span className="mt-1 block truncate text-sm font-medium text-foreground">
                          {channel.value}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted">
                          {channel.note}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <Reveal key={channel.label} delay={index * 0.08}>
                      <li>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            target={channel.href.startsWith("http") ? "_blank" : undefined}
                            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="card flex items-start gap-4 p-5 transition-all duration-300 hover:border-white/25 hover:bg-surface-2"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="card flex items-start gap-4 p-5">{content}</div>
                        )}
                      </li>
                    </Reveal>
                  );
                })}
              </ul>

              <Reveal delay={0.3}>
                <div className="card mt-6 p-6">
                  <p className="text-xs font-medium tracking-widest text-faint uppercase">
                    Temukan saya di
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-line px-3.5 py-3 text-sm text-muted transition-colors hover:border-white/30 hover:text-foreground md:py-2"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                  <p className="mt-5 flex items-center gap-2 text-xs text-faint">
                    <Globe size={13} aria-hidden="true" />
                    {site.url.replace("https://", "")}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

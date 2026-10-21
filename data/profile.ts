export const profile = {
  name: "Aldo Moroseto",
  shortName: "Aldo",
  initials: "AM",
  photo: "/foto-profil.jpg",
  role: "Website Developer",
  location: "Bekasi, Indonesia",
  yearsOfExperience: 3.5,
  heroRole: "website cepat, indah, dan siap tumbuh",
  intro:
    "Saya membangun website dan aplikasi web yang ringan, responsif, dan enak dipakai — dari landing page sampai dashboard kompleks.",
  bio: [
    "Halo, saya Aldo — pengembang web yang berfokus pada performa dan detail visual. Selama 3,5 tahun terakhir saya membantu startup, agensi, dan brand lokal mengubah ide menjadi produk digital yang rapi dan terukur.",
    "Saya percaya website yang baik bukan sekadar terlihat keren, tapi juga cepat dibuka, mudah dinavigasi di ponsel, dan jelas menyampaikan pesan bisnisnya. Karena itu saya mengerjakan desain, kode, dan optimasi dalam satu alur kerja yang utuh.",
    "Di luar jam kerja, saya menulis tentang performa web, mengajar junior developer, dan sesekali ikut komunitas desain lokal.",
  ],
  principles: [
    {
      title: "Konten dulu, animasi kemudian",
      description:
        "Animasi harus memperjelas pesan, bukan menutupinya. Setiap gerakan punya tujuan.",
    },
    {
      title: "Mobile-first, selalu",
      description:
        "Layout dirancang dari layar terkecil lebih dulu, lalu tumbuh dengan anggun ke desktop.",
    },
    {
      title: "Performa adalah fitur",
      description:
        "Core Web Vitals hijau, gambar teroptimasi, dan JavaScript seperlunya saja.",
    },
    {
      title: "Kode yang bisa dilanjutkan",
      description:
        "Struktur rapi, komponen terpakai ulang, dan dokumentasi singkat untuk tim berikutnya.",
    },
  ],
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    period: "2024 — Sekarang",
    role: "Senior Web Developer",
    company: "Nusantara Digital",
    location: "Remote",
    highlights: [
      "Memimpin redesign website utama yang menaikkan konversi signup sebesar 34%",
      "Membangun design system berbasis komponen yang dipakai 3 produk internal",
      "Menurunkan waktu muat halaman dari 3,8s menjadi 1,2s lewat optimasi bundle",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Web Developer",
    company: "Kreasi Studio",
    location: "Jakarta",
    highlights: [
      "Mengerjakan 20+ proyek website klien lokal dan regional",
      "Memperkenalkan alur review aksesibilitas di setiap siklus proyek",
      "Kolaborasi erat dengan tim desain untuk menerjemahkan Figma ke kode produksi",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Web Developer (Freelance)",
    company: "Mandiri",
    location: "Bekasi",
    highlights: [
      "Menangani website company profile, toko online, dan portal UMKM",
      "Membangun relasi jangka panjang dengan 12 klien berulang",
      "Belajar mengelola proyek, briefing klien, dan pengiriman tepat waktu",
    ],
  },
];

export type SkillGroup = {
  name: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    name: "Pengembangan Web",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML & CSS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "REST & GraphQL", "PostgreSQL", "Supabase", "Firebase", "Prisma"],
  },
  {
    name: "Desain",
    items: ["Figma", "Design System", "Prototyping", "Aksesibilitas", "Desain Responsif"],
  },
  {
    name: "Alat & Praktik",
    items: ["Git & GitHub", "CI/CD", "Playwright", "Core Web Vitals", "SEO Teknis", "Agile"],
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export const stats: Stat[] = [
  { value: 48, suffix: "+", label: "Proyek selesai", description: "Untuk klien lokal & regional" },
  { value: 3.5, suffix: " thn", label: "Pengalaman", description: "Industri web dan produk digital" },
  { value: 96, suffix: "%", label: "Klien puas", description: "Dari survei akhir proyek" },
  { value: 1, suffix: " s", label: "Target LCP", description: "Standar performa di tiap proyek" },
];

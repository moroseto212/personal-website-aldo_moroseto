import type { LucideIcon } from "lucide-react";
import {
  Code2,
  LayoutTemplate,
  Gauge,
  Smartphone,
  Plug,
  ShieldCheck,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  duration: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "website-company-profile",
    title: "Company Profile & Landing Page",
    summary:
      "Website bisnis yang cepat, rapi, dan siap meyakinkan pengunjung sejak layar pertama.",
    description:
      "Cocok untuk UMKM, startup, dan brand yang butuh website profesional dengan informasi lengkap: profil, layanan, portofolio, blog, dan kontak. Setiap halaman disusun agar pengunjung menemukan jawabannya tanpa harus berpikir keras.",
    icon: LayoutTemplate,
    deliverables: [
      "Struktur halaman & copywriting dasar",
      "Desain responsif mobile-first",
      "Form kontak & integrasi peta",
      "SEO teknis: metadata, sitemap, schema",
      "Pelatihan singkat pengelolaan konten",
    ],
    process: [
      { step: "01", title: "Brief & riset", description: "Memetakan tujuan bisnis, audiens, dan pesan utama website." },
      { step: "02", title: "Wireframe & desain", description: "Menyusun struktur halaman lalu dipoles menjadi desain final." },
      { step: "03", title: "Pengembangan", description: "Membangun website responsif dengan animasi halus dan performa tinggi." },
      { step: "04", title: "QA & peluncuran", description: "Uji lintas device, optimasi, lalu online dan serah terima." },
    ],
    duration: "2 — 4 minggu",
    priceFrom: "Rp 6 juta",
  },
  {
    slug: "web-application",
    title: "Web Application & Dashboard",
    summary:
      "Aplikasi web khusus: dashboard, portal klien, hingga produk SaaS dengan alur yang logis.",
    description:
      "Saya membangun aplikasi web dari sisi tampilan sampai integrasi API — termasuk autentikasi, tabel data kompleks, filter, dan visualisasi. Fokusnya selalu sama: antarmuka yang rumit terasa sederhana saat dipakai.",
    icon: Code2,
    deliverables: [
      "Arsitektur komponen & state management",
      "Halaman dashboard dan laporan",
      "Integrasi API / autentikasi",
      "Role & hak akses pengguna",
      "Pengujian alur inti (E2E)",
    ],
    process: [
      { step: "01", title: "Discovery", description: "Menyusun daftar fitur, prioritas, dan peta alur pengguna." },
      { step: "02", title: "Prototipe", description: "Prototipe interaktif untuk validasi alur sebelum coding." },
      { step: "03", title: "Iterasi", description: "Sprint dua mingguan dengan demo rutin bersama Anda." },
      { step: "04", title: "Rilis", description: "Deploy, monitoring, dan pendampingan pasca-peluncuran." },
    ],
    duration: "4 — 10 minggu",
    priceFrom: "Rp 18 juta",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design & Design System",
    summary:
      "Desain antarmuka yang konsisten, dari satu layar hingga puluhan komponen.",
    description:
      "Dari wireframe kasar sampai file Figma siap kembangkan: hierarki informasi, tipografi, warna, dan komponen yang bisa dipakai ulang. Cocok jika tim Anda butuh fondasi desain sebelum masuk tahap coding.",
    icon: Smartphone,
    deliverables: [
      "Riset & user flow sederhana",
      "Wireframe dan prototipe klik",
      "Desain high-fidelity mobile + desktop",
      "Komponen & variannya di Figma",
      "Dokumentasi gaya (warna, tipografi, spasi)",
    ],
    process: [
      { step: "01", title: "Audit", description: "Menilai kondisi saat ini dan menemukan hambatan utama pengguna." },
      { step: "02", title: "Konsep", description: "Menyusun arah visual dan struktur informasi." },
      { step: "03", title: "Desain", description: "Mengolah layar lengkap beserta komponen dan statusnya." },
      { step: "04", title: "Serah terima", description: "File rapi, siap dikembangkan, dengan sesi walkthrough." },
    ],
    duration: "2 — 5 minggu",
    priceFrom: "Rp 8 juta",
  },
  {
    slug: "optimasi-performa-seo",
    title: "Optimasi Performa & SEO",
    summary:
      "Website lambat? Saya perbaiki Core Web Vitals, kecepatan, dan visibilitas pencariannya.",
    description:
      "Audit menyeluruh terhadap waktu muat, ukuran bundle, strategi gambar, dan fondasi SEO teknis. Anda mendapat laporan prioritas beserta pengerjaannya, bukan hanya daftar temuan.",
    icon: Gauge,
    deliverables: [
      "Audit Core Web Vitals & PageSpeed",
      "Optimasi gambar, font, dan kode",
      "Perbaikan struktur heading & metadata",
      "Setup sitemap, robots, dan schema",
      "Laporan sebelum/sesudah",
    ],
    process: [
      { step: "01", title: "Audit", description: "Uji performa di device nyata dan telusuri titik lemahnya." },
      { step: "02", title: "Prioritas", description: "Menyusun perbaikan berdasarkan dampak terhadap pengguna." },
      { step: "03", title: "Eksekusi", description: "Mengerjakan perbaikan bertahap dengan verifikasi berkala." },
      { step: "04", title: "Verifikasi", description: "Pengukuran ulang dan dokumentasi hasil akhir." },
    ],
    duration: "1 — 3 minggu",
    priceFrom: "Rp 4 juta",
  },
  {
    slug: "integrasi-api-cms",
    title: "Integrasi API & Headless CMS",
    summary:
      "Menyambungkan website ke API, payment gateway, atau CMS agar konten mudah dikelola.",
    description:
      "Butuh website yang kontennya bisa diedit tanpa menyentuh kode? Saya mengintegrasikan headless CMS seperti Sanity atau Contentful, serta API pihak ketiga: pembayaran, peta, form, sampai chatbot.",
    icon: Plug,
    deliverables: [
      "Setup skema konten & ruang kerja CMS",
      "Integrasi API pihak ketiga",
      "Webhook & alur publikasi konten",
      "Preview langsung di editor",
      "Dokumentasi untuk tim konten",
    ],
    process: [
      { step: "01", title: "Pemetaan", description: "Menentukan data, sumber, dan siapa yang mengelolanya." },
      { step: "02", title: "Konfigurasi", description: "Menyusun skema CMS dan kredensial integrasi." },
      { step: "03", title: "Sambungan", description: "Menghubungkan front-end, API, dan alur konten." },
      { step: "04", title: "Serah terima", description: "Pelatihan singkat tim dan panduan penggunaan." },
    ],
    duration: "2 — 4 minggu",
    priceFrom: "Rp 9 juta",
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    summary:
      "Perawatan berkala agar website tetap cepat, aman, dan terus diperbarui.",
    description:
      "Paket bulanan untuk update dependensi, backup, pemantauan uptime, dan perbaikan kecil. Anda bisa fokus ke bisnis, urusan teknis biar saya yang jaga.",
    icon: ShieldCheck,
    deliverables: [
      "Pemantauan uptime & backup rutin",
      "Update dependensi dan patch keamanan",
      "Laporan bulanan performa",
      "Kuota revisi konten kecil",
      "Prioritas penanganan insiden",
    ],
    process: [
      { step: "01", title: "Onboarding", description: "Inventarisasi aset, akses, dan cek kesehatan website." },
      { step: "02", title: "Rutinitas", description: "Jadwal pemeliharaan dan monitoring otomatis." },
      { step: "03", title: "Laporan", description: "Ringkasan bulanan performa dan pekerjaan yang dilakukan." },
      { step: "04", title: "Perbaikan", description: "Penanganan insiden dengan waktu tanggap yang disepakati." },
    ],
    duration: "Bulanan",
    priceFrom: "Rp 1,5 juta / bulan",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Berapa lama satu proyek website selesai?",
    answer:
      "Landing page atau company profile umumnya 2—4 minggu, aplikasi web 4—10 minggu tergantung kompleksitas. Jadwal pasti disepakati setelah brief pertama.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Umumnya 50% di muka saat brief disepakati dan 50% sebelum website diluncurkan. Untuk paket bulanan, dibayar di awal periode.",
  },
  {
    question: "Apakah bisa memakai desain dari Figma saya sendiri?",
    answer:
      "Bisa. Saya menerima file Figma dan menerjemakkannya ke kode produksi, termasuk komponen dan animasinya.",
  },
  {
    question: "Apakah website bisa saya edit sendiri setelah jadi?",
    answer:
      "Ya. Jika proyek memakai headless CMS atau CMS sederhana, saya beri pelatihan singkat plus dokumentasi agar tim Anda bisa mengelola konten.",
  },
  {
    question: "Apakah ada garansi setelah peluncuran?",
    answer:
      "Ada. Selama 30 hari setelah peluncuran, bug yang muncul dari pengerjaan saya saya perbaiki tanpa biaya tambahan.",
  },
  {
    question: "Bisakah mengerjakan proyek jarak jauh?",
    answer:
      "Bisa, saya terbiasa bekerja remote dengan klien di berbagai kota. Komunikasi lewat WhatsApp, email, dan sesi video terjadwal.",
  },
];

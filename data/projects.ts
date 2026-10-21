export type ProjectCategory =
  | "Web App"
  | "Landing Page"
  | "Company Profile"
  | "E-Commerce"
  | "Dashboard";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  role: string;
  stack: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  results: { value: string; label: string }[];
  accent: "violet" | "teal" | "amber" | "rose" | "sky" | "lime";
  link?: string;
};

export const projectCategories: ProjectCategory[] = [
  "Web App",
  "Landing Page",
  "Company Profile",
  "E-Commerce",
  "Dashboard",
];

export const projects: Project[] = [
  {
    slug: "nusa-finance-dashboard",
    title: "Nusa Finance Dashboard",
    client: "Nusa Fintech",
    category: "Dashboard",
    year: 2026,
    role: "Lead Web Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    summary:
      "Dashboard analitik untuk tim risk: memantau portofolio pinjaman, tren keterlambatan, dan anomali dalam satu layar.",
    problem:
      "Tim keuangan membuka 6 tools berbeda dan menyusun laporan manual tiap pagi. Data terlambat, kesalahan input sering terjadi, dan keputusan tertunda berhari-hari.",
    solution:
      "Saya membangun satu dashboard terpadu dengan laporan otomatis, filter interaktif, dan sistem peringatan dini. Setiap grafik bisa dibuka detailnya tanpa meninggalkan halaman, dan ekspor laporan tersedia dalam satu klik.",
    features: [
      "Grafik tren interaktif dengan filter rentang waktu",
      "Sistem skor risiko real-time per nasabah",
      "Ekspor laporan PDF & CSV",
      "Notifikasi otomatis untuk anomali keterlambatan",
      "Mode gelap untuk kerja malam",
    ],
    results: [
      { value: "4 jam", label: "hemat waktu laporan harian" },
      { value: "72%", label: "reduksi kesalahan input" },
      { value: "1,1s", label: "waktu muat halaman utama" },
    ],
    accent: "violet",
  },
  {
    slug: "kopi-senja-landing",
    title: "Kopi Senja — Landing Page",
    client: "Kopi Senja",
    category: "Landing Page",
    year: 2026,
    role: "Desainer & Developer",
    stack: ["Next.js", "Tailwind CSS", "Motion", "Vercel"],
    summary:
      "Halaman peluncuran gerai kopi specialty dengan cerita brand, menu andalan, dan reservasi meja.",
    problem:
      "Gerai baru butuh kehadiran online cepat sebelum grand opening, dengan informasi lengkap tanpa terasa berat di ponsel pengunjung.",
    solution:
      "Satu halaman panjang dengan navigasi lengket: cerita brand, menu, lokasi, galeri, dan form reservasi. Animasi scroll dipakai untuk memperkenalkan tiap bagian tanpa memperlambat pembacaan.",
    features: [
      "Hero dengan video loop terkompresi",
      "Daftar menu lengkap dengan filter kategori",
      "Reservasi meja terhubung WhatsApp",
      "Peta lokasi & jam operasional",
      "Skor performa Lighthouse 98",
    ],
    results: [
      { value: "+38%", label: "reservasi via WhatsApp" },
      { value: "98", label: "skor Lighthouse mobile" },
      { value: "12 hari", label: "dari brief sampai live" },
    ],
    accent: "amber",
  },
  {
    slug: "tumbuh-inventory",
    title: "Tumbuh Inventory",
    client: "Tumbuh Retail",
    category: "Web App",
    year: 2025,
    role: "Web Developer",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    summary:
      "Aplikasi pengelolaan stok multi-gudang dengan barcode scanning dan prediksi restock.",
    problem:
      "Stok tidak pernah cocok antar gudang, dan tim sering kehabisan barang laris karena tidak ada peringatan dini.",
    solution:
      "Aplikasi web dengan pemindaian barcode dari ponsel, sinkronisasi langsung antar gudang, dan prediksi restock berdasarkan laju penjualan 30 hari terakhir.",
    features: [
      "Pindai barcode langsung dari browser ponsel",
      "Riwayat perpindahan barang antar gudang",
      "Peringatan stok minimum otomatis",
      "Prediksi restock berbasis laju penjualan",
      "Laporan abis-pakai bulanan",
    ],
    results: [
      { value: "99,4%", label: "akurasi stok" },
      { value: "-41%", label: "barang kehabisan stok" },
      { value: "3 gudang", label: "tersinkronisasi real-time" },
    ],
    accent: "teal",
  },
  {
    slug: "sentra-karya-profile",
    title: "Sentra Karya — Company Profile",
    client: "Sentra Karya",
    category: "Company Profile",
    year: 2025,
    role: "Desainer & Developer",
    stack: ["Next.js", "MDX", "Tailwind CSS", "Motion"],
    summary:
      "Website profil perusahaan konsultan arsitektur dengan katalog proyek dan artikel insight.",
    problem:
      "Profil perusahaan terlihat usang dan tidak menampilkan portofolio secara meyakinkan kepada calon klien korporat.",
    solution:
      "Struktur ulang total: hero yang tegas, katalog proyek dengan detail studi kasus, profil tim, dan blog insight yang dikelola lewat MDX.",
    features: [
      "Katalog proyek dengan filter tipe & tahun",
      "Halaman studi kasus lengkap",
      "Blog insight berbasis MDX",
      "Halaman karier dengan form lamaran",
      "Metadata & Open Graph untuk setiap halaman",
    ],
    results: [
      { value: "2,4×", label: "kunjungan ke halaman kontak" },
      { value: "31%", label: "lead baru dari organik" },
      { value: "100%", label: "skor aksesibilitas halaman utama" },
    ],
    accent: "sky",
  },
  {
    slug: "lautan-toko",
    title: "Lautan Toko",
    client: "Lautan Pescatarian",
    category: "E-Commerce",
    year: 2024,
    role: "Web Developer",
    stack: ["Next.js", "Stripe", "Tailwind CSS", "Sanity CMS"],
    summary:
      "Toko online produk laut segar dengan langganan mingguan dan checkout dua langkah.",
    problem:
      "Penjualan hanya lewat WhatsApp, pesanan sering tertukar, dan pelanggan tidak bisa melihat ketersediaan harian.",
    solution:
      "Katalog harian yang diperbarui dari CMS, keranjang dengan estimasi pengiriman, checkout dua langkah via Stripe, serta opsi langganan mingguan otomatis.",
    features: [
      "Katalog stok harian dari headless CMS",
      "Checkout dua langkah dengan Stripe",
      "Langganan mingguan & penagihan berulang",
      "Notifikasi status pesanan via email",
      "Halaman produk dengan galeri responsif",
    ],
    results: [
      { value: "+57%", label: "pesanan bulanan" },
      { value: "2,1%", label: "konversi checkout" },
      { value: "46%", label: "pelanggan langganan" },
    ],
    accent: "rose",
  },
  {
    slug: "jejak-travel-booking",
    title: "Jejak Travel — Booking Trip",
    client: "Jejak Travel",
    category: "Web App",
    year: 2024,
    role: "Web Developer",
    stack: ["React", "Vite", "Express", "MySQL", "Framer Motion"],
    summary:
      "Platform pemesanan tur lokal dengan ketersediaan slot real-time dan ulasan terverifikasi.",
    problem:
      "Pemesanan masih manual lewat telepon, slot sering dobel, dan ulasan tidak terkurasi.",
    solution:
      "Sistem pemesanan dengan kalender ketersediaan langsung, pengaturan kapasitas per keberangkatan, dan ulasan yang hanya bisa ditulis setelah trip selesai.",
    features: [
      "Kalender ketersediaan real-time",
      "Kapasitas otomatis per jadwal",
      "Ulasan terverifikasi peserta",
      "Voucher digital via email",
      "Panel admin untuk operator tur",
    ],
    results: [
      { value: "0", label: "booking dobel dalam 6 bulan" },
      { value: "+64%", label: "pemesanan online" },
      { value: "4,8/5", label: "rating rata-rata trip" },
    ],
    accent: "lime",
  },
];

export const testimonials = [
  {
    quote:
      "Aldo tidak hanya menerjemahkan desain kami ke kode — ia menemukan celah di alur pengguna yang bahkan belum kami sadari. Hasilnya bersih dan cepat.",
    name: "Dinda Rahmawati",
    role: "Product Lead, Nusa Fintech",
  },
  {
    quote:
      "Komunikasinya jelas, jadwalnya tepat, dan animasi yang dibuat terasa mahal tanpa mengorbankan kecepatan situs. Klien kami puas sejak versi pertama.",
    name: "Bagas Nugroho",
    role: "Founder, Kreasi Studio",
  },
  {
    quote:
      "Website kami selesai sebelum deadline dan tim internal bisa mengedit konten sendiri. Itu yang paling kami butuhkan.",
    name: "Sari Halim",
    role: "Marketing Manager, Sentra Karya",
  },
];

export type Faq = { q: string; a: string };

/**
 * Single source of truth for FAQ content — rendered by the FAQ section and
 * emitted as FAQPage JSON-LD for rich results in Google Search.
 */
export const FAQS: Faq[] = [
  {
    q: "Bagaimana cara memulai setelah membeli lisensi?",
    a: "Setelah lisensi aktif, Anda mendaftarkan sekolah dan langsung mendapat kode organisasi unik beserta akun admin. Dari sana Anda bisa membuat akun guru, siswa, dan orang tua.",
  },
  {
    q: "Apakah data antar sekolah tercampur?",
    a: "Tidak. Sekolah by GloApp bersifat multi-tenant — setiap sekolah berdiri di balik kode organisasinya sendiri dan datanya terisolasi penuh dari sekolah lain.",
  },
  {
    q: "Bagaimana absensi QR + GPS mencegah kecurangan?",
    a: "Guru membuka sesi absensi berdurasi terbatas. Saat siswa scan QR, lokasi diverifikasi terhadap koordinat sekolah, sehingga kehadiran tidak bisa diisi dari luar area sekolah.",
  },
  {
    q: "Apakah orang tua membayar SPP langsung di aplikasi?",
    a: "Tagihan dibuat oleh admin dan ditargetkan ke semua siswa, angkatan, kelas, atau individu. Orang tua mengunggah bukti transfer, lalu admin memverifikasi (PAID/REJECTED).",
  },
  {
    q: "Apakah lisensi dibayar sekali atau berkala?",
    a: "Lisensi dibayar sekali sebesar Rp4.000.000 per sekolah dan berlaku seumur hidup. Hanya ada biaya operasional Rp100.000 per tahun untuk hosting dan pemeliharaan — tidak ada biaya berulang lainnya.",
  },
  {
    q: "Bisakah satu yayasan mengelola banyak sekolah?",
    a: "Bisa. Paket Yayasan mendukung banyak unit sekolah dengan onboarding, migrasi data, dan manajer akun khusus.",
  },
];

import { Container, SectionHeading } from "./ui";

const FAQS: { q: string; a: string }[] = [
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
    a: "Lisensi dibayar sekali sebesar Rp3.000.000 per sekolah dan berlaku seumur hidup. Hanya ada biaya operasional Rp100.000 per tahun untuk hosting dan pemeliharaan — tidak ada biaya berulang lainnya.",
  },
  {
    q: "Bisakah satu yayasan mengelola banyak sekolah?",
    a: "Bisa. Paket Yayasan mendukung banyak unit sekolah dengan onboarding, migrasi data, dan manajer akun khusus.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
        />

        <div className="mx-auto grid w-full max-w-3xl gap-3">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors open:border-gradient-brand"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {q}
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

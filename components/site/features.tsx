import {
  QrCode,
  GraduationCap,
  Wallet,
  CalendarClock,
  FileText,
  Megaphone,
  Users,
  ScrollText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeading } from "./ui";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: QrCode,
    title: "Absensi QR + Geofencing GPS",
    description:
      "Guru membuka sesi absensi berdurasi, siswa scan QR. Lokasi dikunci ke koordinat sekolah sehingga kehadiran tidak bisa dipalsukan dari luar.",
    span: true,
  },
  {
    icon: GraduationCap,
    title: "Akademik & Nilai",
    description:
      "Mata pelajaran, ujian harian/UTS/UAS, input nilai massal, dan perhitungan nilai akhir per semester otomatis.",
  },
  {
    icon: FileText,
    title: "Rapor Digital & Kenaikan Kelas",
    description:
      "Generate rapor per kelas, terbitkan ke orang tua, hitung kelayakan kenaikan, dan promosikan siswa ke tahun ajaran berikutnya.",
  },
  {
    icon: Wallet,
    title: "Pembayaran SPP",
    description:
      "Tetapkan tagihan ke semua siswa, angkatan, kelas, atau individu. Orang tua unggah bukti transfer, admin verifikasi.",
  },
  {
    icon: CalendarClock,
    title: "Jadwal Pelajaran",
    description:
      "Susun jadwal per kelas, mata pelajaran, dan guru. Setiap pengguna melihat jadwalnya sendiri.",
  },
  {
    icon: Users,
    title: "Manajemen Sivitas",
    description:
      "Data guru (NIP), siswa (NIS/NISN), dan orang tua yang tertaut ke anak — semua dalam satu direktori.",
  },
  {
    icon: Megaphone,
    title: "Pengumuman & Notifikasi",
    description:
      "Sebar pengumuman bergambar ke seluruh sekolah dan kirim notifikasi real-time ke setiap peran.",
  },
  {
    icon: ScrollText,
    title: "Audit Log & Dashboard",
    description:
      "Setiap aksi tercatat. Dashboard metrik memberi admin gambaran utuh operasional sekolah.",
  },
];

export function Features() {
  return (
    <section id="fitur" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Fitur Lengkap"
          title={
            <>
              Semua yang dibutuhkan sekolah,{" "}
              <span className="text-gradient-brand">dalam satu lisensi</span>
            </>
          }
          description="Dari absensi sampai rapor, dari SPP sampai audit. Tidak perlu lagi belasan aplikasi terpisah."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, span }: Feature) {
  return (
    <div
      className={`group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gradient-brand ${
        span ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
        <Icon className="size-5" />
      </span>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

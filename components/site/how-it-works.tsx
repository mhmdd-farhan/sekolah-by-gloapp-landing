import { KeyRound, Building2, UserPlus, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeading } from "./ui";

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: KeyRound,
    step: "01",
    title: "Beli Lisensi",
    description:
      "Pilih paket lisensi sesuai ukuran sekolah. Aktivasi langsung setelah pembayaran dikonfirmasi.",
  },
  {
    icon: Building2,
    step: "02",
    title: "Daftarkan Sekolah",
    description:
      "Daftarkan organisasi Anda dan dapatkan kode sekolah unik (mis. SCH-X82F91) beserta akun admin pertama.",
  },
  {
    icon: UserPlus,
    step: "03",
    title: "Undang Sivitas",
    description:
      "Buat akun guru, siswa, dan orang tua. Mereka bergabung memakai kode sekolah Anda — data tetap terisolasi.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Mulai Beroperasi",
    description:
      "Susun kelas & jadwal, buka absensi, kelola SPP, dan terbitkan rapor — semua aktif di hari pertama.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Cara Kerja"
          title={
            <>
              Dari lisensi ke{" "}
              <span className="text-gradient-brand">sekolah aktif</span> dalam
              4 langkah
            </>
          }
          description="Model multi-tenant: setiap sekolah berdiri sendiri di balik satu kode organisasi."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-mono text-sm text-brand">{step}</span>
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

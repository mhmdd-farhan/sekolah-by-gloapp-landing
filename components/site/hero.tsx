import Link from "next/link";
import {
  ArrowRight,
  QrCode,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container, Eyebrow } from "./ui";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-brand-glow absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <Container className="flex flex-col items-center gap-8 pb-20 pt-20 text-center sm:pt-28">
        <Eyebrow>
          <Sparkles className="size-3.5" /> Sistem Operasi Sekolah Modern
        </Eyebrow>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Satu lisensi untuk{" "}
          <span className="text-gradient-brand">menjalankan seluruh</span>{" "}
          operasional sekolah Anda.
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          <strong className="font-medium text-foreground">Sekolah by GloApp</strong>{" "}
          menyatukan absensi, akademik, rapor digital, dan pembayaran SPP dalam
          satu platform. Beli lisensi, daftarkan sekolah Anda, lalu undang
          admin, guru, orang tua, dan siswa.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03]"
          >
            Beli Lisensi Sekarang
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            href="#cara-kerja"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Lihat Cara Kerja
          </Link>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          Multi-tenant • Per-sekolah terisolasi • Kode organisasi unik seperti{" "}
          <span className="text-foreground">SCH-X82F91</span>
        </p>

        <HeroPreview />
      </Container>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative mt-8 w-full max-w-4xl">
      <div className="rounded-3xl border border-border bg-card/80 p-2 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="rounded-[1.25rem] border border-border/60 bg-background/60 p-5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Kehadiran Hari Ini" value="96.4%" trend="+2.1%" />
            <StatCard label="SPP Terverifikasi" value="312" trend="bulan ini" />
            <StatCard label="Rapor Terbit" value="1.248" trend="semester" />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-border/60 bg-card p-5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Sesi Absensi — Kelas 7A</span>
                <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">
                  Live
                </span>
              </div>
              <div className="mt-4 space-y-2.5">
                {[
                  ["Ahmad Fauzi", "Hadir", "07:01"],
                  ["Bunga Lestari", "Hadir", "07:02"],
                  ["Citra Dewi", "Terlambat", "07:18"],
                ].map(([name, status, time]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2 text-sm"
                  >
                    <span>{name}</span>
                    <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      {status === "Terlambat" ? (
                        <span className="text-destructive">{status}</span>
                      ) : (
                        <span className="text-brand">{status}</span>
                      )}
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-gradient-brand bg-accent/30 p-5 text-center">
              <div className="grid size-24 place-items-center rounded-2xl bg-background">
                <QrCode className="size-16 text-brand" strokeWidth={1.2} />
              </div>
              <p className="text-sm font-medium">Scan QR Siswa</p>
              <p className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <MapPin className="size-3.5 text-brand" /> Terkunci lokasi GPS
                sekolah
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-brand" /> Audit log lengkap
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-brand" /> Akses berbasis peran
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="size-4 text-brand" /> Data per-sekolah terisolasi
        </span>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 text-left">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="font-mono text-[11px] text-brand">{trend}</p>
    </div>
  );
}

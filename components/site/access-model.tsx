import Link from "next/link";
import {
  Download,
  Smartphone,
  KeyRound,
  ArrowRight,
  Check,
} from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { WHATSAPP_URL } from "@/lib/site";

const FREE_POINTS = [
  "Aplikasi Android gratis, tanpa biaya unduh",
  "Dipakai admin, guru, orang tua, dan siswa",
  "Cukup masuk dengan kode organisasi sekolah",
];

const LICENSE_POINTS = [
  "Satu kali bayar untuk satu sekolah",
  "Aktifkan seluruh sistem & kode organisasi",
  "Semua fitur tanpa terkecuali, seumur hidup",
];

export function AccessModel() {
  return (
    <section id="akses" className="py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Cara Akses"
          title={
            <>
              Aplikasinya{" "}
              <span className="text-gradient-brand">gratis diunduh</span>,
              lisensinya yang berbayar
            </>
          }
          description="Siapa pun bisa mengunduh aplikasi Android-nya tanpa biaya. Yang berbayar hanya lisensi sekolah — sekali aktivasi untuk membuka seluruh sistem bagi seluruh sivitas."
        />

        <div className="mx-auto grid w-full max-w-4xl gap-4 sm:grid-cols-2">
          {/* Gratis — unduh aplikasi */}
          <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Smartphone className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight">
                  Aplikasi Android
                </span>
                <span className="font-mono text-sm text-brand">Gratis</span>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {FREE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/download"
              className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Download className="size-4" />
              Unduh Aplikasi Gratis
            </Link>
          </div>

          {/* Berbayar — lisensi sekolah */}
          <div className="relative flex flex-col gap-5 rounded-3xl border border-gradient-brand bg-card p-7 shadow-xl shadow-brand/15 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-brand text-brand-foreground">
                <KeyRound className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold tracking-tight">
                  Lisensi Sekolah
                </span>
                <span className="font-mono text-sm text-brand">
                  Rp3.000.000 — sekali bayar
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {LICENSE_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/30 transition-transform hover:scale-[1.02]"
            >
              Beli Lisensi
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <p className="-mt-4 text-center text-sm text-muted-foreground">
          Singkatnya: <span className="text-foreground">unduh aplikasinya gratis</span>,
          lalu beli satu lisensi untuk mengaktifkan sekolah Anda.
        </p>
      </Container>
    </section>
  );
}

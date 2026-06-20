import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Smartphone,
  ShieldCheck,
  ArrowLeft,
  QrCode,
  Wallet,
  Bell,
} from "lucide-react";
import { Container, Eyebrow, Logo } from "@/components/site/ui";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/site";

const APK_FILE = "/sekolah-by-gloapp.apk";
const APK_SIZE = "82.6 MB";
const APK_VERSION = "2.0.0";

export const metadata: Metadata = {
  title: "Download Aplikasi Android",
  description: `Unduh aplikasi ${SITE_NAME} untuk Android. Absensi QR + GPS, rapor digital, pembayaran SPP, dan notifikasi sekolah langsung dari ponsel.`,
  alternates: { canonical: "/download" },
  openGraph: {
    title: `Download Aplikasi Android — ${SITE_NAME}`,
    description: `Unduh aplikasi ${SITE_NAME} untuk Android.`,
    url: "/download",
  },
};

const HIGHLIGHTS = [
  {
    icon: QrCode,
    title: "Absensi QR + GPS",
    description: "Scan kehadiran terkunci lokasi sekolah langsung dari ponsel.",
  },
  {
    icon: Wallet,
    title: "Pembayaran SPP",
    description: "Lihat tagihan dan unggah bukti transfer kapan saja.",
  },
  {
    icon: Bell,
    title: "Notifikasi Real-time",
    description: "Pengumuman dan info akademik tersampaikan seketika.",
  },
];

const STEPS = [
  "Tekan tombol Download APK di atas untuk mengunduh berkas.",
  "Buka berkas, lalu izinkan “Instal dari sumber tidak dikenal” bila diminta Android.",
  "Selesaikan pemasangan, buka aplikasi, dan masuk dengan akun sekolah Anda.",
];

export default function DownloadPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="bg-brand-glow absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />

      <Container className="flex flex-col items-center gap-10 py-20 text-center sm:py-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Kembali ke beranda
        </Link>

        <Logo size={64} className="rounded-2xl" />

        <Eyebrow>
          <Smartphone className="size-3.5" /> Aplikasi Android
        </Eyebrow>

        <div className="flex flex-col items-center gap-4">
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Bawa{" "}
            <span className="text-gradient-brand">{SITE_NAME}</span> di
            saku Anda.
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Unduh aplikasi resmi untuk Android dan jalankan absensi, akademik,
            dan pembayaran sekolah langsung dari ponsel.
          </p>
        </div>

        {/* Download button — same-origin file in /public, the download
            attribute forces a save instead of opening in the browser. */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={APK_FILE}
            download="sekolah-by-gloapp.apk"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-brand px-7 py-4 text-base font-medium text-brand-foreground shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03]"
          >
            <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
            Download APK
          </a>
          <p className="font-mono text-xs text-muted-foreground">
            Android • Versi {APK_VERSION} • {APK_SIZE}
          </p>
        </div>

        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card/70 p-5 text-center backdrop-blur"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-2xl rounded-3xl border border-border bg-card/70 p-7 text-left backdrop-blur sm:p-9">
          <h2 className="text-lg font-semibold tracking-tight">
            Cara memasang
          </h2>
          <ol className="mt-5 flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <li key={i} className="flex items-start gap-3.5">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand font-mono text-xs font-medium text-brand-foreground">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-6 flex items-center gap-2 border-t border-border/60 pt-5 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-brand" />
            Berkas resmi dari {SITE_NAME}. Ada kendala pemasangan?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline-offset-2 hover:underline"
            >
              Hubungi kami
            </a>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}

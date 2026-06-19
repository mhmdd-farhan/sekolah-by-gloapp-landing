import { Check, Sparkles, Infinity as InfinityIcon } from "lucide-react";
import { Container, SectionHeading } from "./ui";
import { WHATSAPP_URL } from "@/lib/site";

const FEATURES: string[] = [
  "Semua fitur tanpa terkecuali",
  "Absensi QR + geofencing GPS",
  "Manajemen kelas, jadwal & sivitas",
  "Pembayaran SPP & verifikasi bukti",
  "Nilai akademik & ujian otomatis",
  "Rapor digital & kenaikan kelas",
  "Pengumuman & notifikasi real-time",
  "Audit log & dashboard penuh",
  "Pembaruan fitur tanpa biaya tambahan",
  "Dukungan prioritas",
];

export function Pricing() {
  return (
    <section
      id="lisensi"
      className="relative overflow-hidden border-y border-border/60 bg-card/30 py-24"
    >
      <div className="bg-brand-glow absolute inset-x-0 top-0 -z-10 h-1/2" />
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Lisensi"
          title={
            <>
              Satu kali bayar,{" "}
              <span className="text-gradient-brand">akses seumur hidup</span>
            </>
          }
          description="Bayar sekali, miliki sistemnya selamanya. Hanya biaya operasional Rp100.000 per tahun untuk hosting & pemeliharaan."
        />

        <div className="mx-auto w-full max-w-xl">
          <div className="relative flex flex-col gap-7 rounded-3xl border border-gradient-brand bg-card p-8 shadow-2xl shadow-brand/15 sm:p-10">
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground shadow-lg shadow-brand/30">
              <Sparkles className="size-3.5" /> Lisensi Lifetime
            </span>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight">
                Sekolah by GloApp
              </h3>
              <p className="text-sm text-muted-foreground">
                Satu lisensi untuk satu sekolah. Semua fitur aktif sejak hari
                pertama.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight">
                  Rp3.000.000
                </span>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 font-mono text-sm text-brand">
                <InfinityIcon className="size-4" /> sekali bayar — seumur hidup
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                + biaya operasional Rp100.000 / tahun (hosting & pemeliharaan)
              </span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3.5 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/30 transition-transform hover:scale-[1.02]"
            >
              Beli Lisensi via WhatsApp
            </a>

            <ul className="grid gap-3 border-t border-border/60 pt-7 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Termasuk pembaruan fitur berkala dan keamanan data per-sekolah.
            Hosting & pemeliharaan dikenakan biaya operasional Rp100.000/tahun.
          </p>
        </div>
      </Container>
    </section>
  );
}

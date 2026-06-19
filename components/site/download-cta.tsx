import Link from "next/link";
import { Download, Smartphone } from "lucide-react";
import { Container } from "./ui";
import { SITE_NAME } from "@/lib/site";

export function DownloadCta() {
  return (
    <section id="download" className="pb-8 pt-4">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-gradient-brand bg-card px-6 py-10 sm:px-10 sm:py-12">
          <div className="bg-brand-glow absolute inset-0 -z-10" />

          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-brand-foreground shadow-lg shadow-brand/30">
                <Smartphone className="size-6" />
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Sudah punya kode sekolah? Unduh aplikasinya.
                </h2>
                <p className="text-sm text-muted-foreground">
                  Aplikasi Android {SITE_NAME}{" "}
                  <span className="text-foreground">gratis</span> untuk admin,
                  guru, orang tua, dan siswa.
                </p>
              </div>
            </div>

            <Link
              href="/download"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-medium text-brand-foreground shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
              Unduh Aplikasi Android
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

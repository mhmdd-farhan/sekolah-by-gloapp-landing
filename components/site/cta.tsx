import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui";
import { WHATSAPP_URL } from "@/lib/site";

export function Cta() {
  return (
    <section className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-gradient-brand bg-card px-6 py-16 text-center sm:px-12">
          <div className="bg-brand-glow absolute inset-0 -z-10" />
          <div className="bg-grid absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />

          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Siap menjadikan sekolah Anda{" "}
            <span className="text-gradient-brand">sepenuhnya digital?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Beli lisensi Sekolah by GloApp hari ini, daftarkan sekolah Anda, dan
            jalankan operasional dari satu tempat.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-brand-foreground shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03]"
            >
              Beli Lisensi
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Jadwalkan Demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

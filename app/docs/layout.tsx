import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Logo } from "@/components/site/ui";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dokumentasi Aplikasi",
  description: `Panduan lengkap penggunaan aplikasi ${SITE_NAME} untuk Admin, Guru, Siswa, dan Orang Tua.`,
  alternates: { canonical: "/docs" },
  openGraph: {
    title: `Dokumentasi — ${SITE_NAME}`,
    description: `Panduan lengkap penggunaan aplikasi ${SITE_NAME}.`,
    url: "/docs",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground shrink-0">
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Beranda</span>
          </Link>

          <div className="h-4 w-px bg-border/60 shrink-0" />

          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={SITE_NAME}>
            <Logo size={28} />
            <span className="text-sm font-semibold tracking-tight hidden sm:block">
              Sekolah <span className="text-muted-foreground">by gloapp</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 ml-1">
            <span className="text-muted-foreground/40 text-sm">/</span>
            <span className="flex items-center gap-1.5 text-sm font-medium">
              <BookOpen className="size-4 text-brand" />
              Dokumentasi
            </span>
          </div>

          <div className="ml-auto">
            <span className="font-mono text-[11px] text-muted-foreground/60 bg-accent/40 px-2 py-0.5 rounded border border-border/60">
              Juni 2026
            </span>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}

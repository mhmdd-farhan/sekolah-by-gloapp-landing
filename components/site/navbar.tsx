"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Container, Logo } from "./ui";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Fitur", href: "#fitur" },
  { label: "Peran", href: "#peran" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Lisensi", href: "#lisensi" },
  { label: "FAQ", href: "#faq" },
  { label: "Panduan", href: "/docs" },
  { label: "Unduh App", href: "/download" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Sekolah by GloApp — beranda">
            <Logo size={36} />
            <span className="text-base font-semibold tracking-tight">
              Sekolah <span className="text-muted-foreground">by gloapp</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/download"
              aria-label="Unduh aplikasi gratis"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card sm:px-3.5"
            >
              <Download className="size-4" />
              <span>Unduh Gratis</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-[1.03]"
            >
              Beli Lisensi
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="grid size-10 place-items-center rounded-lg border border-border bg-card/60 text-foreground transition-colors hover:bg-card md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-background border-l border-border transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b border-border/60 px-5">
          <span className="text-sm font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            aria-label="Tutup menu"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 p-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="mt-auto flex flex-col gap-3 border-t border-border/60 p-5">
          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            <Download className="size-4" />
            Unduh Gratis
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25"
          >
            Beli Lisensi
          </a>
        </div>
      </div>
    </>
  );
}

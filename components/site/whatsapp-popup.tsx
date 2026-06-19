"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsappPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const showBubble = open && !dismissed;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showBubble ? (
        <div className="animate-in fade-in slide-in-from-bottom-2 relative w-72 rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-black/25 duration-300">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Tutup"
            className="absolute right-3 top-3 grid size-6 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>

          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Tim Sekolah by GloApp</p>
              <p className="font-mono text-[11px] text-brand">● Online</p>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Halo! 👋 Mau tanya soal lisensi atau jadwalkan demo? Chat kami
            langsung di WhatsApp.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-4" />
            Chat via WhatsApp
          </a>
        </div>
      ) : null}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
        onClick={() => setDismissed(true)}
        className="group relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:opacity-0" />
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}

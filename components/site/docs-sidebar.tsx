"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const DOC_SECTIONS = [
  {
    group: "Memulai",
    items: [
      { id: "gambaran-umum", no: 1, label: "Gambaran Umum" },
      { id: "role-pengguna", no: 2, label: "Role Pengguna" },
      { id: "autentikasi", no: 3, label: "Login & Registrasi" },
    ],
  },
  {
    group: "Dashboard & Profil",
    items: [
      { id: "dashboard", no: 4, label: "Dashboard" },
      { id: "profil", no: 5, label: "Profil Pengguna" },
    ],
  },
  {
    group: "Akademik",
    items: [
      { id: "absensi", no: 6, label: "Absensi" },
      { id: "mata-pelajaran", no: 11, label: "Mata Pelajaran" },
      { id: "jadwal", no: 12, label: "Jadwal Pelajaran" },
      { id: "ujian", no: 23, label: "Ujian" },
      { id: "nilai", no: 24, label: "Nilai Akademik" },
      { id: "rapor", no: 25, label: "Rapor" },
    ],
  },
  {
    group: "Manajemen Data",
    items: [
      { id: "manajemen-siswa", no: 7, label: "Siswa" },
      { id: "manajemen-guru", no: 8, label: "Guru" },
      { id: "manajemen-kelas", no: 9, label: "Kelas" },
      { id: "tingkat", no: 10, label: "Tingkat" },
      { id: "manajemen-ortu", no: 13, label: "Orang Tua / Wali" },
      { id: "manajemen-pengguna", no: 14, label: "Pengguna" },
      { id: "profil-organisasi", no: 15, label: "Profil Organisasi" },
      { id: "anggota-organisasi", no: 16, label: "Anggota Organisasi" },
    ],
  },
  {
    group: "Keuangan",
    items: [
      { id: "pembayaran", no: 17, label: "Pembayaran" },
      { id: "verifikasi-pembayaran", no: 18, label: "Verifikasi Pembayaran" },
      { id: "kategori-pembayaran", no: 19, label: "Kategori Pembayaran" },
      { id: "penugasan-tagihan", no: 20, label: "Penugasan Tagihan" },
    ],
  },
  {
    group: "Komunikasi",
    items: [
      { id: "pengumuman", no: 21, label: "Pengumuman" },
      { id: "notifikasi", no: 22, label: "Notifikasi" },
    ],
  },
  {
    group: "Referensi",
    items: [
      { id: "ringkasan-akses", no: 26, label: "Ringkasan Akses per Role" },
    ],
  },
];

function NavItem({
  item,
  active,
  onClick,
}: {
  item: { id: string; no: number; label: string };
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-colors",
        active
          ? "bg-brand/15 text-brand font-medium"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
      )}
    >
      <span
        className={cn(
          "font-mono text-[10px] shrink-0 w-5 text-center",
          active ? "text-brand" : "text-muted-foreground/50",
        )}
      >
        {String(item.no).padStart(2, "0")}
      </span>
      {item.label}
      {active && <ChevronRight className="ml-auto size-3 text-brand" />}
    </a>
  );
}

function SidebarContent({
  active,
  onItemClick,
}: {
  active: string;
  onItemClick?: () => void;
}) {
  return (
    <nav className="flex flex-col gap-6 py-2">
      {DOC_SECTIONS.map((group) => (
        <div key={group.group}>
          <p className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            {group.group}
          </p>
          <div className="flex flex-col gap-0.5">
            {group.items.map((item) => (
              <NavItem
                key={item.id}
                item={item}
                active={active === item.id}
                onClick={onItemClick}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function DocsSidebar({
  activeSection,
  open,
  onClose,
}: {
  activeSection: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 overflow-y-auto bg-background border-r border-border px-4 transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="sticky top-0 flex items-center justify-between bg-background py-4 mb-2 border-b border-border/60">
          <div>
            <p className="text-sm font-semibold">Dokumentasi Aplikasi</p>
            <p className="text-xs text-muted-foreground mt-0.5">GloApp School Mobile</p>
          </div>
          <button
            onClick={onClose}
            className="grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            aria-label="Tutup navigasi"
          >
            <X className="size-4" />
          </button>
        </div>
        <SidebarContent active={activeSection} onItemClick={onClose} />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col">
        <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
          <SidebarContent active={activeSection} />
        </div>
      </aside>
    </>
  );
}

export function getSectionLabel(id: string): string {
  for (const group of DOC_SECTIONS) {
    const item = group.items.find((i) => i.id === id);
    if (item) return item.label;
  }
  return "Dokumentasi";
}

export function ActiveSectionTracker({
  onActiveChange,
}: {
  onActiveChange: (id: string) => void;
}) {
  const allIds = DOC_SECTIONS.flatMap((g) => g.items.map((i) => i.id));

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 120;
    let current = allIds[0];
    for (const id of allIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    }
    onActiveChange(current);
  }, [allIds, onActiveChange]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return null;
}

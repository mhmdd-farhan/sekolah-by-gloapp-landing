import { Shield, Presentation, Users, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeading } from "./ui";

type Role = {
  icon: LucideIcon;
  role: string;
  title: string;
  points: string[];
};

const ROLES: Role[] = [
  {
    icon: Shield,
    role: "ADMIN",
    title: "Admin Sekolah",
    points: [
      "Kelola seluruh data & pengguna",
      "Verifikasi pembayaran SPP",
      "Terbitkan rapor & kenaikan kelas",
      "Pantau dashboard & audit log",
    ],
  },
  {
    icon: Presentation,
    role: "TEACHER",
    title: "Guru",
    points: [
      "Buka sesi absensi QR",
      "Input nilai ujian massal",
      "Lihat jadwal & kelas sendiri",
      "Isi catatan wali kelas",
    ],
  },
  {
    icon: Users,
    role: "PARENT",
    title: "Orang Tua",
    points: [
      "Pantau kehadiran anak",
      "Unggah bukti pembayaran",
      "Lihat rapor & nilai",
      "Terima pengumuman sekolah",
    ],
  },
  {
    icon: BookOpen,
    role: "STUDENT",
    title: "Siswa",
    points: [
      "QR kehadiran pribadi",
      "Lihat jadwal pelajaran",
      "Cek nilai & rapor",
      "Notifikasi terbaru",
    ],
  },
];

export function Roles() {
  return (
    <section id="peran" className="border-y border-border/60 bg-card/30 py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Empat Peran"
          title={
            <>
              Satu platform,{" "}
              <span className="text-gradient-brand">pengalaman tiap peran</span>
            </>
          }
          description="Setiap pengguna hanya melihat yang relevan untuknya — akses dikontrol ketat berbasis peran."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map(({ icon: Icon, role, title, points }) => (
            <div
              key={role}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-brand/15 text-brand">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {role}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <ul className="flex flex-col gap-2">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

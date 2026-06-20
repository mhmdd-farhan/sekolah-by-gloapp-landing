"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import {
  ShieldCheck,
  GraduationCap,
  Users,
  User,
  QrCode,
  CalendarDays,
  BookOpen,
  FileText,
  Wallet,
  Bell,
  Megaphone,
  ClipboardList,
  Building2,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Info,
} from "lucide-react";
import { DocsSidebar, ActiveSectionTracker, getSectionLabel } from "@/components/site/docs-sidebar";
import { cn } from "@/lib/utils";

/* ─── Reusable doc primitives ─────────────────────────────────────── */

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-border/40 pb-14 pt-12 last:border-none"
    >
      {children}
    </section>
  );
}

function SectionTitle({
  no,
  icon: Icon,
  children,
}: {
  no: number;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-mono text-[11px] text-muted-foreground/60 uppercase tracking-widest">
          Bagian {String(no).padStart(2, "0")}
        </p>
        <h2 className="text-xl font-semibold leading-tight tracking-tight">{children}</h2>
      </div>
    </div>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-base font-semibold text-foreground">{children}</h3>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-3 flex flex-col gap-3">
      {items.map((step, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 font-mono text-[11px] font-semibold text-brand">
            {i + 1}
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground pt-0.5">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mt-4 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed",
        type === "warning"
          ? "border-amber-500/30 bg-amber-500/10 text-amber-200"
          : "border-brand/30 bg-brand/10 text-foreground/80",
      )}
    >
      {type === "warning" ? (
        <AlertTriangle className="size-4 shrink-0 text-amber-400 mt-0.5" />
      ) : (
        <Info className="size-4 shrink-0 text-brand mt-0.5" />
      )}
      <span>{children}</span>
    </div>
  );
}

function RoleBadge({ role }: { role: "Admin" | "Guru" | "Siswa" | "Orang Tua" | "Semua" }) {
  const colors: Record<string, string> = {
    Admin: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    Guru: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    Siswa: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    "Orang Tua": "bg-amber-500/15 text-amber-300 border-amber-500/30",
    Semua: "bg-accent text-foreground border-border",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium", colors[role])}>
      {role}
    </span>
  );
}

function AccessBadge({ access }: { access: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-accent/60 border border-border/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      <ChevronRight className="size-3" /> {access}
    </span>
  );
}

function Divider() {
  return <div className="my-6 border-t border-border/40" />;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border/60">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/60 bg-accent/40">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 text-left font-medium text-foreground text-xs uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={cn("border-b border-border/40 last:border-none", i % 2 === 1 && "bg-accent/20")}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-accent/60 border border-border/60 px-1.5 py-0.5 font-mono text-[12px] text-foreground">
      {children}
    </code>
  );
}

/* ─── Main page ───────────────────────────────────────────────────── */

export default function DocsPage() {
  const [active, setActive] = useState("gambaran-umum");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col">
      {/* Mobile sticky nav bar — visible only on small screens */}
      <div className="sticky top-16 z-30 flex items-center gap-3 border-b border-border/60 bg-background/90 px-5 py-2.5 backdrop-blur-xl md:hidden">
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
          aria-label="Buka navigasi dokumentasi"
        >
          <Menu className="size-4" />
          Menu
        </button>
        <div className="h-4 w-px bg-border/60" />
        <span className="truncate text-sm text-muted-foreground">
          {getSectionLabel(active)}
        </span>
      </div>

      <div className="flex flex-1">
        <DocsSidebar activeSection={active} open={menuOpen} onClose={() => setMenuOpen(false)} />
        <ActiveSectionTracker onActiveChange={setActive} />

        <main className="min-w-0 flex-1 px-5 sm:px-8 lg:px-12 pb-24">

        {/* ── 1. Gambaran Umum ─────────────────────────────────────── */}
        <Section id="gambaran-umum">
          <SectionTitle no={1} icon={BookOpen}>Gambaran Umum Aplikasi</SectionTitle>
          <Body>
            GloApp School Mobile adalah aplikasi manajemen sekolah berbasis mobile yang menghubungkan
            seluruh komponen sekolah — Admin, Guru, Siswa, dan Orang Tua — dalam satu platform terpadu.
            Aplikasi ini mencakup fitur absensi, nilai akademik, ujian online, rapor digital,
            manajemen pembayaran, pengumuman, dan banyak lagi.
          </Body>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Absensi QR + GPS", desc: "Kehadiran terverifikasi lokasi, real-time." },
              { icon: GraduationCap, title: "Akademik Lengkap", desc: "Nilai, ujian online, dan rapor digital." },
              { icon: Wallet, title: "Pembayaran SPP", desc: "Tagihan, bukti transfer, dan verifikasi admin." },
              { icon: Bell, title: "Notifikasi Real-time", desc: "Pengumuman dan info akademik seketika." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 rounded-xl border border-border/60 bg-card/50 p-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand/15 text-brand">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 2. Role Pengguna ─────────────────────────────────────── */}
        <Section id="role-pengguna">
          <SectionTitle no={2} icon={Users}>Role Pengguna</SectionTitle>
          <Body>Terdapat 4 jenis role pengguna dalam aplikasi, masing-masing dengan hak akses berbeda.</Body>

          <div className="mt-5 flex flex-col gap-3">
            {[
              {
                role: "Admin" as const,
                desc: "Administrator sekolah. Akses penuh ke semua fitur, termasuk manajemen data master, verifikasi pembayaran, dan konfigurasi sistem.",
              },
              {
                role: "Guru" as const,
                desc: "Guru / Pengajar. Dapat mengelola absensi kelas, membuat ujian, memasukkan nilai, dan melihat jadwal mengajar.",
              },
              {
                role: "Siswa" as const,
                desc: "Dapat melihat informasi akademik pribadi, mengerjakan ujian, membayar tagihan, dan melihat riwayat absensi.",
              },
              {
                role: "Orang Tua" as const,
                desc: "Dapat memantau aktivitas dan tagihan anak, serta membaca pengumuman.",
              },
            ].map(({ role, desc }) => (
              <div key={role} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/50 p-4">
                <RoleBadge role={role} />
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 3. Autentikasi ───────────────────────────────────────── */}
        <Section id="autentikasi">
          <SectionTitle no={3} icon={ShieldCheck}>Autentikasi — Login &amp; Registrasi</SectionTitle>

          <SubTitle>3.1 Login</SubTitle>
          <Body>Semua pengguna (Admin, Guru, Siswa, Orang Tua) menggunakan halaman yang sama untuk masuk.</Body>
          <Steps
            items={[
              "Buka aplikasi — akan muncul halaman splash sebentar.",
              "Masukkan Email atau Nomor Telepon yang sudah terdaftar.",
              "Masukkan Password.",
              "Tekan tombol Masuk.",
              "Jika berhasil, aplikasi langsung mengarahkan ke Dashboard sesuai role.",
              "Jika gagal, akan muncul pesan error (akun tidak ditemukan, password salah, dsb.).",
            ]}
          />

          <Divider />

          <SubTitle>3.2 Registrasi Organisasi Baru</SubTitle>
          <Body>Digunakan oleh sekolah yang belum terdaftar di sistem dan ingin membuat akun baru.</Body>
          <Steps
            items={[
              "Di halaman Login, tekan Daftar Organisasi Baru.",
              "Isi data organisasi: Nama Sekolah, Alamat, Nomor Telepon, Email.",
              "Isi data akun Admin pertama: Nama, Email, Password.",
              "Tekan Daftar.",
              "Sistem membuat akun Admin dan kode unik organisasi.",
              "Kode organisasi ini dibagikan kepada Guru, Siswa, atau Orang Tua untuk mendaftar.",
            ]}
          />

          <Divider />

          <SubTitle>3.3 Bergabung ke Organisasi yang Sudah Ada</SubTitle>
          <Body>Digunakan oleh Guru, Siswa, atau Orang Tua yang ingin bergabung ke sekolah yang sudah terdaftar.</Body>
          <Steps
            items={[
              "Di halaman Login, tekan Daftar ke Sekolah yang Sudah Ada.",
              "Masukkan Kode Organisasi yang diberikan oleh Admin sekolah.",
              "Isi data diri: Nama, Email, Nomor Telepon, Password.",
              "Pilih Role (Guru / Siswa / Orang Tua).",
              "Tekan Daftar.",
              "Setelah berhasil, akun langsung aktif dan bisa login.",
            ]}
          />
        </Section>

        {/* ── 4. Dashboard ─────────────────────────────────────────── */}
        <Section id="dashboard">
          <SectionTitle no={4} icon={ClipboardList}>Dashboard (Beranda)</SectionTitle>
          <Body>
            Dashboard adalah halaman utama setelah login. Tampilannya berbeda-beda tergantung role pengguna.
          </Body>

          {[
            {
              role: "Admin" as const,
              summary: ["Total Siswa terdaftar", "Total Guru aktif", "Total Kelas yang ada"],
              menu: ["Siswa, Guru, Kelas, Orang Tua, Pengguna", "Pembayaran, Kategori Pembayaran, Penugasan Tagihan", "Mata Pelajaran, Jadwal Pelajaran", "Pengumuman, Notifikasi", "Ujian, Nilai, Rapor", "Absensi, Monitoring Absensi", "Profil Organisasi, Anggota, Tingkat"],
              extra: "Bisa menyusun ulang urutan menu cepat. Tarik ke bawah (pull-to-refresh) untuk memperbarui data.",
            },
            {
              role: "Guru" as const,
              summary: ["Jumlah kelas yang diajar", "Jumlah siswa yang diajar"],
              menu: ["Absensi, Jadwal Mengajar", "Pengumuman, Notifikasi", "Ujian, Nilai, Rapor", "Profil"],
              extra: "Bisa menyusun ulang urutan menu cepat. Pull-to-refresh untuk memperbarui data.",
            },
            {
              role: "Siswa" as const,
              summary: ["Status absensi hari ini (Hadir / Tidak Hadir)", "Jumlah tagihan yang belum dibayar"],
              menu: ["Absensi (riwayat kehadiran)", "Pembayaran (tagihan sekolah)", "Ujian (lihat dan kerjakan)", "Profil", "Pengumuman, Notifikasi", "Nilai, Rapor"],
              extra: "",
            },
            {
              role: "Orang Tua" as const,
              summary: ["Jumlah anak yang terdaftar", "Tagihan anak yang belum dibayar"],
              menu: ["Absensi Anak", "Pembayaran", "Profil", "Pengumuman, Notifikasi", "Nilai, Rapor"],
              extra: "",
            },
          ].map(({ role, summary, menu, extra }, i) => (
            <div key={role} className="mt-6 rounded-xl border border-border/60 bg-card/50 overflow-hidden">
              <div className="flex items-center gap-2.5 px-5 py-3 bg-accent/30 border-b border-border/40">
                <RoleBadge role={role} />
                <span className="text-sm font-medium">Dashboard {role}</span>
              </div>
              <div className="p-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2">Ringkasan</p>
                  <ul className="flex flex-col gap-1.5">
                    {summary.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 shrink-0 text-brand mt-0.5" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2">Menu Cepat</p>
                  <ul className="flex flex-col gap-1.5">
                    {menu.map((m) => (
                      <li key={m} className="text-sm text-muted-foreground">• {m}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {extra && (
                <div className="px-5 pb-4">
                  <Callout>{extra}</Callout>
                </div>
              )}
            </div>
          ))}
        </Section>

        {/* ── 5. Profil ────────────────────────────────────────────── */}
        <Section id="profil">
          <SectionTitle no={5} icon={User}>Profil Pengguna</SectionTitle>

          <SubTitle>5.1 Informasi yang Ditampilkan (Semua Role)</SubTitle>
          <ul className="mt-2 flex flex-col gap-1.5">
            {["Nama lengkap", "Email", "Nomor telepon", "Role (Admin / Guru / Siswa / Orang Tua)", "ID Organisasi"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-brand shrink-0" /> {i}
              </li>
            ))}
          </ul>

          <SubTitle>5.2 Fitur Kartu Siswa (Khusus Siswa)</SubTitle>
          <ul className="mt-2 flex flex-col gap-1.5">
            {["Tampilkan Kartu Siswa Digital dengan foto dan data lengkap.", "Kartu siswa dilengkapi QR Code unik.", "Bisa ekspor/cetak kartu siswa dalam format PDF."].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-brand shrink-0" /> {i}
              </li>
            ))}
          </ul>

          <SubTitle>5.3 Edit Profil</SubTitle>
          <Body>Admin dapat mengubah nama, email, dan nomor telepon via tombol Edit di halaman profil, lalu tekan Simpan.</Body>

          <SubTitle>5.4 Logout</SubTitle>
          <Body>Tersedia di halaman profil. Tekan Keluar → konfirmasi → sesi berakhir, kembali ke halaman login.</Body>
        </Section>

        {/* ── 6. Absensi ───────────────────────────────────────────── */}
        <Section id="absensi">
          <SectionTitle no={6} icon={QrCode}>Absensi</SectionTitle>

          <SubTitle>6.1 Riwayat Absensi — Admin</SubTitle>
          <div className="mt-1 flex flex-wrap gap-2 mb-3">
            <AccessBadge access="Menu Cepat → Absensi / Monitoring Absensi" />
          </div>
          <Body>Admin dapat melihat semua catatan absensi seluruh warga sekolah.</Body>
          <ul className="mt-3 flex flex-col gap-1.5">
            {["Filter rentang tanggal (Hari ini, Minggu ini, Bulan ini, Semua).", "Filter berdasarkan role (Semua, Siswa, Guru).", "Setiap baris: Nama, Tanggal, Waktu, Status (Hadir / Terlambat / Tidak Hadir).", "Pull-to-refresh untuk memperbarui data."].map((i) => (
              <li key={i} className="text-sm text-muted-foreground">• {i}</li>
            ))}
          </ul>

          <Divider />

          <SubTitle>6.2 Riwayat Absensi — Guru</SubTitle>
          <Body>Guru hanya dapat melihat riwayat absensi diri sendiri. Filter berdasarkan tanggal tersedia, beserta tombol Mulai Sesi Absensi (FAB).</Body>

          <SubTitle>6.3 Riwayat Absensi — Siswa</SubTitle>
          <Body>Siswa dapat melihat riwayat absensi diri sendiri dengan ringkasan statistik (Hadir, Terlambat, Tidak Hadir) dan indikator warna per hari.</Body>

          <Divider />

          <SubTitle>6.4 Mulai Sesi Absensi (Khusus Guru)</SubTitle>
          <Steps
            items={[
              "Dari Dashboard atau halaman Absensi, tekan tombol Mulai Sesi (FAB).",
              "Pilih Kelas yang akan diabsensi.",
              "Pilih Mata Pelajaran.",
              "Pilih Tingkat/Grade.",
              "Tentukan durasi sesi (dalam jam).",
              "Sistem mengambil lokasi GPS otomatis — pastikan izin lokasi sudah diberikan.",
              "Tekan Mulai Sesi.",
              "Sistem membuat QR Code sesi absensi yang ditunjukkan ke siswa.",
              "Siswa scan QR Code dalam waktu yang ditentukan.",
            ]}
          />

          <Divider />

          <SubTitle>6.5 Scan QR Code Absensi (Siswa &amp; Guru)</SubTitle>
          <Steps
            items={[
              "Guru menampilkan QR Code sesi absensi ke layar atau proyektor.",
              "Siswa buka aplikasi → fitur Scan Absensi (atau langsung dari notifikasi).",
              "Arahkan kamera ke QR Code.",
              "Sistem memvalidasi lokasi dan waktu.",
              "Jika valid, status absensi tercatat sebagai Hadir atau Terlambat (tergantung waktu scan).",
              "Muncul konfirmasi di layar.",
            ]}
          />
        </Section>

        {/* ── 7. Manajemen Siswa ───────────────────────────────────── */}
        <Section id="manajemen-siswa">
          <SectionTitle no={7} icon={Users}>Manajemen Siswa</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <RoleBadge role="Guru" />
            <AccessBadge access="Menu Cepat → Siswa" />
          </div>

          <SubTitle>7.1 Melihat Daftar Siswa</SubTitle>
          <Body>Tampilkan semua siswa terdaftar. Cari berdasarkan nama. Setiap kartu menampilkan: Foto, Nama, Kelas, Email.</Body>

          <SubTitle>7.2 Tambah Siswa Baru (Admin saja)</SubTitle>
          <Steps
            items={[
              "Tekan tombol Tambah Siswa (FAB +).",
              "Isi: Nama Lengkap (wajib), Email (wajib, unik), Nomor Telepon, Password awal, Tingkat, Kelas.",
              "Upload foto profil (opsional).",
              "Tekan Simpan. Akun siswa langsung aktif.",
            ]}
          />

          <SubTitle>7.3 Edit Data Siswa (Admin saja)</SubTitle>
          <Body>Dari daftar siswa, tekan kartu → Edit → ubah data → Simpan Perubahan.</Body>

          <SubTitle>7.4 Hapus Siswa (Admin saja)</SubTitle>
          <Body>Buka detail siswa → ikon Hapus (merah) → konfirmasi.</Body>
          <Callout type="warning">
            Penghapusan siswa bersifat permanen dan tidak bisa dibatalkan. Seluruh riwayat akademik siswa akan ikut terhapus.
          </Callout>

          <SubTitle>7.5 Ekspor Data Siswa ke PDF (Admin)</SubTitle>
          <Body>Di halaman daftar siswa, tekan tombol Export PDF untuk mengunduh daftar lengkap siswa.</Body>
        </Section>

        {/* ── 8. Manajemen Guru ────────────────────────────────────── */}
        <Section id="manajemen-guru">
          <SectionTitle no={8} icon={GraduationCap}>Manajemen Guru</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Guru" />
          </div>

          <SubTitle>8.1 Melihat Daftar Guru</SubTitle>
          <Body>Tampilkan semua guru terdaftar. Pencarian berdasarkan nama.</Body>

          <SubTitle>8.2 Tambah Guru Baru</SubTitle>
          <Steps
            items={[
              "Tekan tombol Tambah Guru (FAB).",
              "Isi: Nama Lengkap (wajib), Email (wajib), Nomor Telepon, Password awal.",
              "Upload foto profil (opsional).",
              "Tekan Simpan.",
            ]}
          />

          <SubTitle>8.3 Edit / Hapus Guru</SubTitle>
          <Body>Tekan kartu guru → Edit atau Hapus → konfirmasi jika menghapus.</Body>

          <SubTitle>8.4 Ekspor Data Guru ke PDF</SubTitle>
          <Body>Tombol Export PDF tersedia di halaman daftar guru.</Body>
        </Section>

        {/* ── 9. Manajemen Kelas ───────────────────────────────────── */}
        <Section id="manajemen-kelas">
          <SectionTitle no={9} icon={Building2}>Manajemen Kelas</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Kelas" />
          </div>

          <SubTitle>9.1 Melihat Daftar Kelas</SubTitle>
          <Body>Tampilkan semua kelas: Nama Kelas, Tingkat, Jumlah Siswa, Wali Kelas.</Body>

          <SubTitle>9.2 Tambah Kelas Baru</SubTitle>
          <Steps
            items={[
              "Tekan Tambah Kelas (FAB).",
              'Isi Nama Kelas (contoh: "X-A", "VII B"), Tingkat/Grade, Wali Kelas.',
              "Tekan Simpan.",
            ]}
          />

          <SubTitle>9.3 Edit / Hapus Kelas</SubTitle>
          <Body>Tekan kartu kelas → Edit (ubah nama, tingkat, wali kelas) atau Hapus → konfirmasi.</Body>

          <SubTitle>9.4 Kelola Anggota Kelas</SubTitle>
          <Body>Dari detail kelas, Admin dapat melihat daftar siswa yang terdaftar di kelas tersebut.</Body>
        </Section>

        {/* ── 10. Tingkat ──────────────────────────────────────────── */}
        <Section id="tingkat">
          <SectionTitle no={10} icon={ClipboardList}>Tingkat (Grade Level)</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Tingkat" />
          </div>

          <Body>
            Digunakan untuk mendefinisikan tingkatan kelas yang ada di sekolah
            (misalnya: Kelas 7, 8, 9 untuk SMP; Kelas X, XI, XII untuk SMA).
          </Body>

          <SubTitle>10.1 Lihat / Tambah / Edit / Hapus Tingkat</SubTitle>
          <Steps
            items={[
              "Tampilkan semua tingkat yang sudah dibuat.",
              'Tekan Tambah (FAB) → isi nama tingkat (contoh: "Kelas X") → Simpan.',
              "Tekan item tingkat → pilih Edit atau Hapus.",
            ]}
          />
        </Section>

        {/* ── 11. Mata Pelajaran ───────────────────────────────────── */}
        <Section id="mata-pelajaran">
          <SectionTitle no={11} icon={BookOpen}>Mata Pelajaran</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Mata Pelajaran" />
          </div>

          <SubTitle>11.1 Lihat Daftar Mata Pelajaran</SubTitle>
          <Body>Tampilkan semua mata pelajaran yang tersedia di sekolah.</Body>

          <SubTitle>11.2 Tambah Mata Pelajaran</SubTitle>
          <Steps
            items={[
              "Tekan Tambah (FAB).",
              'Isi nama (contoh: "Matematika") dan kode mapel (opsional).',
              "Tekan Simpan.",
            ]}
          />

          <SubTitle>11.3 Edit / Hapus Mata Pelajaran</SubTitle>
          <Body>Tekan item mapel → pilih Edit atau Hapus.</Body>
        </Section>

        {/* ── 12. Jadwal Pelajaran ─────────────────────────────────── */}
        <Section id="jadwal">
          <SectionTitle no={12} icon={CalendarDays}>Jadwal Pelajaran</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <RoleBadge role="Guru" />
            <AccessBadge access="Menu Cepat → Jadwal" />
          </div>

          <SubTitle>12.1 Lihat Jadwal</SubTitle>
          <Body>
            Jadwal ditampilkan per hari (Senin s.d. Minggu) dengan tab navigasi.
            Setiap entri: Kelas, Mata Pelajaran, Guru, Jam Mulai, Jam Selesai.
            Guru hanya melihat jadwal mengajar mereka sendiri; Admin melihat seluruh jadwal.
          </Body>

          <SubTitle>12.2 Tambah Jadwal Baru (Admin saja)</SubTitle>
          <Steps
            items={[
              "Tekan Tambah Jadwal (FAB).",
              "Pilih Kelas, Mata Pelajaran, Guru pengampu.",
              "Pilih Hari (Senin–Minggu).",
              "Atur Jam Mulai dan Jam Selesai.",
              "Tekan Simpan.",
            ]}
          />

          <SubTitle>12.3 Edit / Hapus Jadwal (Admin saja)</SubTitle>
          <Body>Tekan item jadwal → pilih Edit atau Hapus.</Body>
        </Section>

        {/* ── 13. Orang Tua ────────────────────────────────────────── */}
        <Section id="manajemen-ortu">
          <SectionTitle no={13} icon={Users}>Manajemen Orang Tua / Wali</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Orang Tua" />
          </div>

          <SubTitle>13.1 Lihat Daftar Orang Tua</SubTitle>
          <Body>Tampilkan semua orang tua/wali yang terdaftar. Pencarian berdasarkan nama.</Body>

          <SubTitle>13.2 Tambah Orang Tua Baru</SubTitle>
          <Steps
            items={[
              "Tekan Tambah (FAB).",
              "Isi: Nama Lengkap (wajib), Email (wajib), Nomor Telepon, Password awal.",
              "Pilih Siswa yang diwalikan (hubungkan ke akun siswa).",
              "Tekan Simpan.",
            ]}
          />
          <Callout>Satu orang tua bisa dihubungkan ke lebih dari satu siswa (untuk keluarga dengan beberapa anak).</Callout>

          <SubTitle>13.3 Edit / Hapus Data Orang Tua</SubTitle>
          <Body>Tekan kartu orang tua → pilih Edit atau Hapus.</Body>
        </Section>

        {/* ── 14. Manajemen Pengguna ───────────────────────────────── */}
        <Section id="manajemen-pengguna">
          <SectionTitle no={14} icon={Users}>Manajemen Pengguna (Users)</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Pengguna" />
          </div>

          <Body>Fitur untuk melihat dan mengelola semua akun pengguna sistem, lintas role.</Body>

          <SubTitle>14.1 Lihat Daftar Pengguna</SubTitle>
          <Body>
            Tampilkan semua akun. Filter berdasarkan Role (Semua, Admin, Guru, Siswa, Orang Tua).
            Pencarian berdasarkan nama.
          </Body>

          <SubTitle>14.2 Tambah Pengguna Baru</SubTitle>
          <Steps
            items={[
              "Tekan Tambah Pengguna (FAB).",
              "Isi: Nama, Email, Password, pilih Role.",
              "Tekan Simpan.",
            ]}
          />
        </Section>

        {/* ── 15. Profil Organisasi ────────────────────────────────── */}
        <Section id="profil-organisasi">
          <SectionTitle no={15} icon={Building2}>Profil Organisasi (Sekolah)</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Organisasi / Profil Sekolah" />
          </div>

          <SubTitle>15.1 Lihat Informasi Sekolah</SubTitle>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {["Nama Sekolah", "Kode Organisasi", "Alamat, Telepon, Email, Website", "Logo Sekolah", "Tahun Berdiri", "Visi & Misi", "Motto"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-brand shrink-0" /> {i}
              </li>
            ))}
          </ul>
          <Callout>Kode Organisasi digunakan oleh Guru, Siswa, atau Orang Tua untuk mendaftar ke sekolah.</Callout>

          <SubTitle>15.2 Edit Profil Organisasi</SubTitle>
          <Steps
            items={[
              "Tekan tombol Edit.",
              "Ubah data yang diperlukan.",
              "Upload logo baru (opsional).",
              "Tekan Simpan.",
            ]}
          />
        </Section>

        {/* ── 16. Anggota Organisasi ───────────────────────────────── */}
        <Section id="anggota-organisasi">
          <SectionTitle no={16} icon={Users}>Anggota Organisasi</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Anggota" />
          </div>

          <Body>
            Menampilkan semua anggota yang bergabung ke organisasi sekolah: Nama, Role, Tanggal Bergabung.
            Admin dapat mengubah role anggota atau menghapus akses anggota dari organisasi.
          </Body>
        </Section>

        {/* ── 17. Pembayaran ───────────────────────────────────────── */}
        <Section id="pembayaran">
          <SectionTitle no={17} icon={Wallet}>Pembayaran (Siswa &amp; Orang Tua)</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Siswa" />
            <RoleBadge role="Orang Tua" />
            <AccessBadge access="Menu Cepat → Pembayaran" />
          </div>

          <SubTitle>17.1 Lihat Daftar Tagihan</SubTitle>
          <Body>Menampilkan semua tagihan yang ditujukan kepada siswa (atau anak, jika Orang Tua).</Body>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Informasi per tagihan", items: ["Judul tagihan", "Kategori (SPP, Seragam, Kegiatan, dsb.)", "Jumlah yang harus dibayar", "Tenggat waktu", "Status tagihan"] },
              { label: "Filter status", items: ["Semua", "Belum Dibayar", "Menunggu Verifikasi", "Lunas", "Ditolak"] },
            ].map(({ label, items }) => (
              <div key={label} className="rounded-xl border border-border/60 bg-card/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2">{label}</p>
                <ul className="flex flex-col gap-1.5">
                  {items.map((i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <SubTitle>17.2 Bayar Tagihan</SubTitle>
          <Steps
            items={[
              "Tekan tagihan yang statusnya Belum Dibayar.",
              "Halaman detail terbuka — tampil nominal, metode pembayaran, dan instruksi transfer.",
              "Lakukan pembayaran melalui bank/metode yang ditentukan sekolah.",
              "Kembali ke aplikasi → tekan Upload Bukti Pembayaran.",
              "Pilih foto bukti transfer dari galeri atau kamera.",
              "Tekan Kirim Bukti. Status berubah ke Menunggu Verifikasi.",
              "Admin akan memverifikasi pembayaran.",
              "Jika disetujui → status Lunas. Jika ditolak → status Ditolak disertai catatan alasan.",
            ]}
          />
        </Section>

        {/* ── 18. Verifikasi Pembayaran ────────────────────────────── */}
        <Section id="verifikasi-pembayaran">
          <SectionTitle no={18} icon={ShieldCheck}>Verifikasi Pembayaran (Admin)</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Pembayaran (Admin)" />
          </div>

          <SubTitle>18.1 Lihat Semua Pembayaran Siswa</SubTitle>
          <Body>Admin dapat melihat seluruh riwayat pembayaran dari semua siswa. Filter berdasarkan status dan pencarian berdasarkan nama siswa atau judul tagihan.</Body>

          <SubTitle>18.2 Verifikasi Pembayaran</SubTitle>
          <Steps
            items={[
              "Filter status ke Menunggu Verifikasi untuk melihat yang perlu diproses.",
              "Tekan tagihan yang ingin diverifikasi.",
              "Lihat detail: nominal, bukti transfer, nama siswa.",
              "Tekan Verifikasi / Setujui → status berubah ke Lunas.",
              "Atau tekan Tolak → isi catatan alasan → status berubah ke Ditolak.",
              "Siswa mendapat notifikasi hasil verifikasi.",
            ]}
          />
        </Section>

        {/* ── 19. Kategori Pembayaran ──────────────────────────────── */}
        <Section id="kategori-pembayaran">
          <SectionTitle no={19} icon={Wallet}>Kategori Pembayaran</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Kategori Pembayaran" />
          </div>

          <Body>Kategori untuk mengklasifikasikan jenis tagihan (SPP, Seragam, Buku, Kegiatan Ekstrakurikuler, dsb.).</Body>

          <Steps
            items={[
              "Lihat semua kategori yang sudah dibuat.",
              "Tekan Tambah (FAB) → isi nama kategori → Simpan.",
              "Tekan item kategori → pilih Edit atau Hapus.",
            ]}
          />
        </Section>

        {/* ── 20. Penugasan Tagihan ────────────────────────────────── */}
        <Section id="penugasan-tagihan">
          <SectionTitle no={20} icon={FileText}>Penugasan Tagihan</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <AccessBadge access="Menu Cepat → Penugasan Tagihan" />
          </div>

          <Body>Fitur untuk membuat tagihan dan menugaskannya kepada siswa atau kelas tertentu.</Body>

          <SubTitle>20.1 Buat Penugasan Tagihan Baru</SubTitle>
          <Steps
            items={[
              "Tekan Buat Tagihan (FAB).",
              'Isi Judul tagihan (contoh: "SPP Juli 2025").',
              "Pilih Kategori dari daftar kategori.",
              "Isi Jumlah nominal.",
              "Atur Tenggat waktu bayar.",
              "Pilih Target penerima: Semua Siswa, Kelas Tertentu, atau Siswa Tertentu.",
              "Tekan Buat Tagihan.",
              "Sistem otomatis membuat tagihan untuk semua target yang dipilih.",
            ]}
          />
          <Callout>Siswa yang ditarget akan langsung melihat tagihan di halaman pembayaran mereka.</Callout>
        </Section>

        {/* ── 21. Pengumuman ───────────────────────────────────────── */}
        <Section id="pengumuman">
          <SectionTitle no={21} icon={Megaphone}>Pengumuman</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Semua" />
            <AccessBadge access="Menu Cepat → Pengumuman" />
          </div>

          <SubTitle>21.1 Melihat Daftar Pengumuman (Semua Role)</SubTitle>
          <Body>
            Tampilkan semua pengumuman yang diterbitkan. Setiap kartu: Judul, Ringkasan, Tanggal terbit.
            Tekan kartu untuk membaca isi lengkap. Pull-to-refresh untuk memperbarui.
          </Body>

          <SubTitle>21.2 Buat Pengumuman (Admin saja)</SubTitle>
          <Steps
            items={[
              "Tekan Tambah Pengumuman (FAB).",
              "Isi Judul dan Isi / konten lengkap.",
              "Tentukan Target audiens (Semua, atau role tertentu).",
              "Tekan Simpan & Terbitkan.",
              "Pengumuman langsung tampil di daftar semua pengguna.",
            ]}
          />

          <SubTitle>21.3 Edit / Hapus Pengumuman (Admin saja)</SubTitle>
          <Body>Buka detail pengumuman → ikon Edit (pensil) untuk mengubah, atau ikon Hapus (tempat sampah) → konfirmasi.</Body>
        </Section>

        {/* ── 22. Notifikasi ───────────────────────────────────────── */}
        <Section id="notifikasi">
          <SectionTitle no={22} icon={Bell}>Notifikasi</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Semua" />
            <AccessBadge access="Menu Cepat → Notifikasi (ikon lonceng)" />
          </div>

          <Body>Halaman ini menampilkan riwayat notifikasi yang pernah diterima pengguna.</Body>

          <SubTitle>Jenis Notifikasi</SubTitle>
          <ul className="mt-2 flex flex-col gap-1.5">
            {[
              "Absensi tercatat (Hadir / Terlambat)",
              "Pembayaran berhasil diverifikasi atau ditolak",
              "Pengumuman baru",
              "Nilai / Rapor sudah diterbitkan",
              "Ujian baru tersedia",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bell className="size-4 text-brand shrink-0" /> {i}
              </li>
            ))}
          </ul>

          <Callout>Daftar notifikasi mendukung infinite scroll dan pull-to-refresh untuk memperbarui.</Callout>
        </Section>

        {/* ── 23. Ujian ────────────────────────────────────────────── */}
        <Section id="ujian">
          <SectionTitle no={23} icon={FileText}>Ujian</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <RoleBadge role="Guru" />
            <RoleBadge role="Siswa" />
            <AccessBadge access="Menu Cepat → Ujian" />
          </div>

          <SubTitle>23.1 Melihat Daftar Ujian</SubTitle>
          <div className="mt-2 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Filter Tipe", val: "Semua / UTS / UAS" },
              { label: "Filter Semester", val: "Semua / Semester 1 / Semester 2" },
              { label: "Filter Status", val: "Semua / Draft / Published" },
            ].map(({ label, val }) => (
              <div key={label} className="rounded-lg border border-border/60 bg-card/50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">{label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{val}</p>
              </div>
            ))}
          </div>
          <Callout>Siswa hanya melihat ujian berstatus Published. Admin &amp; Guru melihat semua status termasuk Draft.</Callout>

          <Divider />

          <SubTitle>23.2 Buat Ujian Baru (Admin &amp; Guru)</SubTitle>
          <Steps
            items={[
              "Tekan Buat Ujian (FAB).",
              "Isi: Judul ujian, Mata Pelajaran, Kelas, Tipe (UTS/UAS), Semester (1/2), Tanggal Ujian, Skor Maksimal (default 100), Deskripsi (opsional).",
              "Tekan Simpan. Ujian dibuat dengan status DRAFT — siswa belum bisa melihatnya.",
            ]}
          />

          <Divider />

          <SubTitle>23.3 Tambah Soal Ujian (Admin &amp; Guru)</SubTitle>
          <Steps
            items={[
              "Dari detail ujian, tekan Kelola Soal.",
              "Tekan Tambah Soal di bagian bawah layar.",
              "Isi Nomor Soal (otomatis urut), Teks Soal (wajib), Tipe Soal (Pilihan Ganda / Essay), Poin (default 1).",
              "Untuk Pilihan Ganda: isi Opsi A, B (wajib), C dan D (opsional), dan tentukan jawaban benar.",
              "Tekan Tambah untuk menyimpan soal ke daftar sementara.",
              "Ulangi untuk soal berikutnya.",
              "Tekan Simpan Semua (kanan bawah) setelah semua soal selesai.",
            ]}
          />
          <Callout>Untuk menghapus soal: tekan ikon tempat sampah merah di sebelah soal. Tetap tekan Simpan Semua untuk mengonfirmasi perubahan.</Callout>

          <Divider />

          <SubTitle>23.4 Publish &amp; Unpublish Ujian</SubTitle>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-brand/30 bg-brand/5 p-4">
              <p className="text-sm font-semibold text-brand mb-2">Publish</p>
              <p className="text-sm text-muted-foreground">Buka Detail Ujian → tekan Publish (ikon centang hijau) di AppBar. Siswa di kelas yang dituju sekarang bisa mengakses.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/50 p-4">
              <p className="text-sm font-semibold mb-2">Unpublish</p>
              <p className="text-sm text-muted-foreground">Buka Detail Ujian → tekan Unpublish → konfirmasi dialog. Status kembali ke DRAFT.</p>
            </div>
          </div>

          <SubTitle>23.5 Flow Lengkap Guru Membuat Ujian</SubTitle>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {[
              "Buat Ujian (DRAFT)",
              "Tambah Soal satu per satu",
              "Simpan Semua Soal",
              "Preview (opsional)",
              "Publish Ujian",
              "Siswa bisa mengerjakan",
            ].map((step, i, arr) => (
              <span key={step} className="contents">
                <span className="rounded-lg border border-border/60 bg-card/50 px-3 py-1.5">{step}</span>
                {i < arr.length - 1 && <ChevronRight className="size-4 text-brand shrink-0" />}
              </span>
            ))}
          </div>

          <Divider />

          <SubTitle>23.6 Mengerjakan Ujian (Siswa)</SubTitle>
          <Steps
            items={[
              "Buka halaman Ujian dari Dashboard atau menu.",
              "Cari ujian yang ingin dikerjakan (hanya Published yang tampil).",
              "Tekan kartu ujian → Mulai Ujian.",
              "Untuk Pilihan Ganda: tekan salah satu opsi (A/B/C/D).",
              "Untuk Essay: ketik jawaban di kolom teks.",
              "Navigasi soal dengan tombol Berikutnya / Sebelumnya.",
              "Setelah semua dijawab, tekan Kirim Jawaban → konfirmasi.",
              "Skor otomatis dihitung untuk Pilihan Ganda. Essay menunggu penilaian Guru.",
            ]}
          />

          <Divider />

          <SubTitle>23.7 Nilai Ujian Essay (Admin &amp; Guru)</SubTitle>
          <Steps
            items={[
              "Dari Detail Ujian → tab Daftar Pengumpulan.",
              "Tekan nama siswa untuk melihat detail jawaban.",
              "Masukkan skor untuk setiap jawaban Essay.",
              "Tekan Simpan Nilai.",
            ]}
          />
        </Section>

        {/* ── 24. Nilai Akademik ───────────────────────────────────── */}
        <Section id="nilai">
          <SectionTitle no={24} icon={ClipboardList}>Nilai Akademik</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <RoleBadge role="Guru" />
            <RoleBadge role="Siswa" />
            <RoleBadge role="Orang Tua" />
            <AccessBadge access="Menu Cepat → Nilai" />
          </div>

          <SubTitle>24.1 Melihat Nilai (Admin &amp; Guru)</SubTitle>
          <Body>Filter berdasarkan Semester, Tahun Ajaran, dan Kelas (Admin bisa semua kelas; Guru hanya kelas yang diajar).</Body>

          <div className="mt-4 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">Indikator warna</p>
            <div className="flex flex-wrap gap-2">
              {[
                { color: "bg-emerald-500/20 border-emerald-500/40 text-emerald-300", label: "Hijau (≥ 75) — Nilai bagus" },
                { color: "bg-amber-500/20 border-amber-500/40 text-amber-300", label: "Kuning (60–74) — Perlu perhatian" },
                { color: "bg-red-500/20 border-red-500/40 text-red-300", label: "Merah (< 60) — Perlu bimbingan" },
              ].map(({ color, label }) => (
                <span key={label} className={cn("rounded-full border px-3 py-1 text-xs font-medium", color)}>{label}</span>
              ))}
            </div>
          </div>

          <Callout>Aksi yang tersedia untuk Admin &amp; Guru: Hitung Nilai (Compute) untuk menghitung ulang dari data ujian, dan Edit Catatan per siswa per mapel.</Callout>

          <SubTitle>24.2 Melihat Nilai (Siswa &amp; Orang Tua)</SubTitle>
          <Body>Tampilkan nilai pribadi (atau nilai anak untuk Orang Tua). Filter berdasarkan semester dan tahun ajaran dengan indikator warna.</Body>
        </Section>

        {/* ── 25. Rapor ────────────────────────────────────────────── */}
        <Section id="rapor">
          <SectionTitle no={25} icon={FileText}>Rapor</SectionTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            <RoleBadge role="Admin" />
            <RoleBadge role="Guru" />
            <RoleBadge role="Siswa" />
            <RoleBadge role="Orang Tua" />
            <AccessBadge access="Menu Cepat → Rapor" />
          </div>

          <SubTitle>25.1 Aksi Admin</SubTitle>
          <ul className="mt-2 flex flex-col gap-1.5">
            {["Generate Rapor: buat rapor otomatis dari data nilai.", "Hitung Kenaikan Kelas: proses kenaikan berdasarkan nilai.", "Export / Cetak: cetak rapor individual atau massal ke PDF.", "Publish Rapor: terbitkan agar siswa bisa mengaksesnya."].map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" /> {i}
              </li>
            ))}
          </ul>

          <SubTitle>25.2 Melihat &amp; Mengunduh Rapor (Semua Role)</SubTitle>
          <Steps
            items={[
              "Buka halaman Rapor dari Dashboard.",
              "Pilih semester dan tahun ajaran.",
              "Tekan Lihat Rapor.",
              "Tampilkan rapor lengkap: data siswa, nilai semua mata pelajaran, nilai sikap, keterangan kenaikan kelas.",
              "Tekan Cetak / Download PDF dari Detail Rapor.",
              "Pilih Simpan ke Galeri atau Bagikan via WhatsApp, Email, dsb.",
            ]}
          />

          <SubTitle>Isi Rapor PDF</SubTitle>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {["Header sekolah (nama, logo, alamat)", "Data siswa (nama, kelas, semester, tahun ajaran)", "Tabel nilai per mata pelajaran (UTS, UAS, Rata-rata)", "Kolom nilai sikap", "Keterangan kelulusan / kenaikan kelas", "Tanda tangan (jika tersedia)"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-brand shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── 26. Ringkasan Akses ──────────────────────────────────── */}
        <Section id="ringkasan-akses">
          <SectionTitle no={26} icon={ShieldCheck}>Ringkasan Akses per Role</SectionTitle>
          <Body>Tabel berikut merangkum fitur mana yang bisa diakses oleh setiap role.</Body>

          <div className="mt-4 overflow-x-auto rounded-xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-accent/40">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Fitur</th>
                  {(["Admin", "Guru", "Siswa", "Orang Tua"] as const).map((r) => (
                    <th key={r} className="px-3 py-3 text-center">
                      <RoleBadge role={r} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Login & Register", "✓", "✓", "✓", "✓"],
                  ["Dashboard", "✓", "✓", "✓", "✓"],
                  ["Profil", "Lihat + Edit", "Lihat", "Lihat + Kartu PDF", "Lihat"],
                  ["Riwayat Absensi", "Semua", "Diri sendiri", "Diri sendiri", "—"],
                  ["Mulai Sesi Absensi", "—", "✓", "—", "—"],
                  ["Scan QR Absensi", "—", "✓", "✓", "—"],
                  ["Manajemen Siswa", "CRUD + PDF", "Lihat", "—", "—"],
                  ["Manajemen Guru", "CRUD + PDF", "—", "—", "—"],
                  ["Manajemen Kelas", "CRUD", "—", "—", "—"],
                  ["Tingkat", "CRUD", "—", "—", "—"],
                  ["Mata Pelajaran", "CRUD", "—", "—", "—"],
                  ["Jadwal Pelajaran", "CRUD", "Lihat", "—", "—"],
                  ["Manajemen Orang Tua", "CRUD", "—", "—", "—"],
                  ["Manajemen Pengguna", "CRUD", "—", "—", "—"],
                  ["Profil Organisasi", "Lihat + Edit", "—", "—", "—"],
                  ["Anggota Organisasi", "Kelola", "—", "—", "—"],
                  ["Pembayaran (tagihan)", "—", "—", "✓", "✓"],
                  ["Verifikasi Pembayaran", "✓", "—", "—", "—"],
                  ["Kategori Pembayaran", "CRUD", "—", "—", "—"],
                  ["Penugasan Tagihan", "CRUD", "—", "—", "—"],
                  ["Pengumuman", "CRUD", "Lihat", "Lihat", "Lihat"],
                  ["Notifikasi", "✓", "✓", "✓", "✓"],
                  ["Ujian (lihat daftar)", "Semua status", "Semua status", "Published saja", "—"],
                  ["Buat & Kelola Ujian", "✓", "✓", "—", "—"],
                  ["Tambah Soal Ujian", "✓", "✓", "—", "—"],
                  ["Publish Ujian", "✓", "✓", "—", "—"],
                  ["Kerjakan Ujian", "—", "—", "✓", "—"],
                  ["Nilai Ujian Essay", "✓", "✓", "—", "—"],
                  ["Nilai Akademik", "Lihat + Edit semua", "Lihat + Edit kelas", "Lihat sendiri", "Lihat anak"],
                  ["Rapor", "Generate + Publish + Cetak", "Lihat + Cetak", "Lihat + Cetak", "Lihat + Cetak"],
                ].map((row, i) => (
                  <tr key={row[0]} className={cn("border-b border-border/40 last:border-none", i % 2 === 1 && "bg-accent/10")}>
                    <td className="px-4 py-2.5 text-sm font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="px-3 py-2.5 text-center text-sm text-muted-foreground">
                        <span className={cn(cell === "✓" && "text-brand font-semibold", cell === "—" && "text-muted-foreground/30")}>
                          {cell}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-xs text-muted-foreground/50 text-center">
            Dokumentasi ini dibuat berdasarkan versi aplikasi per Juni 2026. Fitur dapat berubah sesuai pembaruan sistem.
          </p>
        </Section>

        </main>
      </div>
    </div>
  );
}

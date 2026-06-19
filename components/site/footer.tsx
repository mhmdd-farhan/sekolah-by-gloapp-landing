import Link from "next/link";
import { Container, Logo } from "./ui";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Produk",
    links: ["Fitur", "Lisensi", "Cara Kerja", "Keamanan"],
  },
  {
    title: "Peran",
    links: ["Admin", "Guru", "Orang Tua", "Siswa"],
  },
  {
    title: "Perusahaan",
    links: ["Tentang", "Kontak", "Blog", "Karier"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <Container className="flex flex-col gap-12 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-3">
            <Link href="#" className="flex items-center gap-2.5" aria-label="Sekolah by GloApp — beranda">
              <Logo size={36} />
              <span className="text-base font-semibold tracking-tight">
                Sekolah <span className="text-muted-foreground">by GloApp</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Sistem operasi sekolah berbasis lisensi — absensi, akademik,
              rapor, dan pembayaran dalam satu platform.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} GloApp. Hak cipta dilindungi.
          </p>
          <div className="flex gap-5">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Syarat Layanan
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

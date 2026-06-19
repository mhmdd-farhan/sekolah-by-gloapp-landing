import Link from "next/link";
import { Container, Logo } from "./ui";
import { WHATSAPP_URL } from "@/lib/site";

const NAV = [
  { label: "Fitur", href: "#fitur" },
  { label: "Peran", href: "#peran" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Lisensi", href: "#lisensi" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2.5" aria-label="Sekolah by GloApp — beranda">
          <Logo size={36} />
          <span className="text-base font-semibold tracking-tight">
            Sekolah <span className="text-muted-foreground">by gloapp</span>
          </span>
        </Link>

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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:scale-[1.03]"
          >
            Beli Lisensi
          </a>
        </div>
      </Container>
    </header>
  );
}

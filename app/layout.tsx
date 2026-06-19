import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sekolah by GloApp — Software ERP Sekolah Berbasis Lisensi",
  description:
    "Satu lisensi, satu sistem operasi sekolah. Absensi QR + GPS, rapor digital, pembayaran SPP, dan manajemen akademik untuk admin, guru, orang tua, dan siswa.",
  keywords: [
    "software sekolah",
    "ERP sekolah",
    "aplikasi sekolah",
    "absensi QR",
    "rapor digital",
    "SPP online",
    "GloApp",
  ],
  openGraph: {
    title: "Sekolah by GloApp — Software ERP Sekolah Berbasis Lisensi",
    description:
      "Kelola seluruh operasional sekolah dalam satu platform multi-tenant. Beli lisensi, daftarkan sekolah, undang seluruh sivitas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={`${geistMono.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}

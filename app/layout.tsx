import type { Metadata, Viewport } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/site/structured-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = `${SITE_NAME} — Software ERP Sekolah Berbasis Lisensi`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Sekolah by GloApp",
    "GloApp",
    "software sekolah",
    "aplikasi sekolah",
    "ERP sekolah",
    "sistem informasi sekolah",
    "absensi QR sekolah",
    "absensi GPS",
    "rapor digital",
    "pembayaran SPP online",
    "manajemen akademik",
    "aplikasi manajemen sekolah",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: "GloApp",
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description:
      "Kelola seluruh operasional sekolah dalam satu platform multi-tenant. Beli lisensi, daftarkan sekolah, undang seluruh sivitas.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Add your Google Search Console token here once verified:
  // verification: { google: "xxxxxxxxxxxxxxxxxxxxxxxx" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#100f16" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} ${geistMono.variable} min-h-screen antialiased`}>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}

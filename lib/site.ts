export const WHATSAPP_NUMBER = "6283838497519";

const WHATSAPP_MESSAGE =
  "Halo, saya tertarik dengan lisensi Sekolah by GloApp dan ingin tahu lebih lanjut.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/**
 * Canonical production URL. Override per-environment with NEXT_PUBLIC_SITE_URL
 * (e.g. on Vercel preview deployments) without touching code.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sekolah.gloapp.my.id"
).replace(/\/$/, "");

export const SITE_NAME = "Sekolah by GloApp";

export const SITE_DESCRIPTION =
  "Satu lisensi, satu sistem operasi sekolah. Absensi QR + GPS, rapor digital, pembayaran SPP, dan manajemen akademik untuk admin, guru, orang tua, dan siswa.";

/** Lifetime license price, in IDR — kept in one place for copy + structured data. */
export const LICENSE_PRICE_IDR = 4_000_000;

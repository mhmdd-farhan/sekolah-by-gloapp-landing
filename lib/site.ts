export const WHATSAPP_NUMBER = "6283838497519";

const WHATSAPP_MESSAGE =
  "Halo, saya tertarik dengan lisensi Sekolah by GloApp dan ingin tahu lebih lanjut.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

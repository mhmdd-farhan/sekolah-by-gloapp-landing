import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt =
  "Sekolah by GloApp — Software ERP Sekolah Berbasis Lisensi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Statically generated at build time and cached.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 25% 0%, #2a1b4d 0%, #100f16 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "#AA55FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            🎓
          </div>
          <div style={{ fontSize: "34px", fontWeight: 600 }}>{SITE_NAME}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Satu lisensi untuk menjalankan seluruh operasional sekolah.
          </div>
          <div style={{ fontSize: "30px", color: "#c9b8e8", maxWidth: "900px" }}>
            Absensi QR + GPS · Rapor digital · Pembayaran SPP · Manajemen
            akademik
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: "24px",
            color: "#9d8bbf",
          }}
        >
          <span>Multi-tenant</span>
          <span>·</span>
          <span>Lisensi seumur hidup</span>
          <span>·</span>
          <span>sekolah.gloapp.my.id</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

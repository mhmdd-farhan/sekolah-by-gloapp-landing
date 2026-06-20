"use client";

import { useEffect, useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const VIDEO_ID = "vBKSdC-HH94";
const YT_WATCH = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

function embedUrl(autoplay: boolean, muted: boolean) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: muted ? "1" : "0",
    rel: "0",
    playsinline: "1",
    modestbranding: "1",
    enablejsapi: "1",
  });
  return `https://www.youtube.com/embed/${VIDEO_ID}?${params}`;
}

type PlayMode = "idle" | "muted" | "sound";

export function VideoSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<PlayMode>("idle");
  const [thumbError, setThumbError] = useState(false);

  /* auto-play muted when 15% of the container enters viewport */
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mode === "idle") {
          setMode("muted");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mode]);

  const thumbSrc = thumbError
    ? `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,oklch(0.6_0.2_300/0.07),transparent)]" />

      <Container className="flex flex-col items-center gap-8">
        {/* heading */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Eyebrow>
            <Play className="size-3.5" /> Tonton Demo
          </Eyebrow>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Dari lisensi hingga absensi —{" "}
            <span className="text-gradient-brand">dalam satu video</span>
          </h2>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Lihat cara membeli lisensi, mendaftarkan sekolah, dan menggunakan
            fitur utama GloApp School Mobile secara langsung.
          </p>
        </div>

        {/* video container — fixed 16:9 */}
        <div
          ref={wrapperRef}
          className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-black shadow-2xl shadow-black/40 ring-1 ring-white/5 aspect-video"
        >
          {mode !== "idle" ? (
            <iframe
              key={mode}
              src={embedUrl(true, mode === "muted")}
              title="Demo GloApp School Mobile"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            /* thumbnail + play overlay */
            <button
              onClick={() => setMode("sound")}
              className="group absolute inset-0 flex w-full items-center justify-center"
              aria-label="Putar video demo GloApp School Mobile"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumbSrc}
                alt="Preview video demo GloApp School Mobile"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                onError={() => setThumbError(true)}
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
              <div className="relative flex size-16 items-center justify-center rounded-full bg-brand shadow-xl shadow-brand/40 transition-transform group-hover:scale-110 sm:size-20">
                <Play className="size-7 translate-x-0.5 text-brand-foreground sm:size-9" />
              </div>
            </button>
          )}
        </div>

        {/* fallback link */}
        <a
          href={YT_WATCH}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground"
        >
          <ExternalLink className="size-3" />
          Tonton langsung di YouTube
        </a>
      </Container>
    </section>
  );
}

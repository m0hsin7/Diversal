import { useEffect, useRef } from "react";
import webFilm from "@/assets/diversal-film.webm";
import heroPoster from "@/assets/hero-poster.jpg";
import { useIsMobile, usePrefersReducedMotion } from "@/hooks/use-motion";

export function PageFilm() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || reduced) return;

    let animationFrame = 0;
    const update = () => {
      animationFrame = 0;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
      const scale = 1.035 + progress * 0.075;
      const drift = progress * -3.5;
      const lateral = Math.sin(progress * Math.PI * 4) * 2.4;
      const exposure = 0.88 + Math.sin(progress * Math.PI * 3) * 0.08;

      frame.style.setProperty("--film-scale", scale.toFixed(4));
      frame.style.setProperty("--film-drift", `${drift.toFixed(2)}%`);
      frame.style.setProperty("--film-focus", `${(0.96 - progress * 0.08).toFixed(3)}`);
      frame.style.setProperty("--film-lateral", `${lateral.toFixed(2)}%`);
      frame.style.setProperty("--film-exposure", exposure.toFixed(3));
    };
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isMobile, reduced]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;
    const resume = () => {
      if (document.visibilityState !== "visible") return;
      video.muted = true;
      if (video.paused) {
        void video.play().catch(() => {
          /* Poster remains visible when device autoplay is restricted. */
        });
      }
    };
    resume();
    video.addEventListener("canplay", resume);
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("pageshow", resume);
    window.addEventListener("touchstart", resume, { passive: true });
    window.addEventListener("pointerdown", resume, { passive: true });
    return () => {
      video.removeEventListener("canplay", resume);
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("pageshow", resume);
      window.removeEventListener("touchstart", resume);
      window.removeEventListener("pointerdown", resume);
    };
  }, [reduced]);

  return (
    <div ref={frameRef} className="page-film" aria-hidden="true">
      <img src={heroPoster} alt="" className="page-film-media" style={{ zIndex: 1 }} />
      {!reduced && (
        <video
          ref={videoRef}
          className="page-film-media"
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ zIndex: 2 }}
        >
          <source src={webFilm} type="video/webm" />
          <source src="/diversal-film.webm" type="video/webm" />
        </video>
      )}
      <div className="page-film-grade" style={{ zIndex: 3 }} />
    </div>
  );
}
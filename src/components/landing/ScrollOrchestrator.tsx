import { useEffect } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollOrchestrator() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-scene]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const simple = reduced.matches || mobile.matches;

      scenes.forEach((scene) => {
        if (simple) {
          scene.style.setProperty("--scene-progress", "0.5");
          scene.style.setProperty("--scene-enter", "1");
          scene.style.setProperty("--scene-exit", "1");
          scene.style.setProperty("--scene-y", "0px");
          scene.style.setProperty("--scene-scale", "1");
          scene.style.setProperty("--scene-focus", "1");
          return;
        }

        const rect = scene.getBoundingClientRect();
        const progress = clamp((viewport - rect.top) / (viewport + rect.height));
        const enter = clamp((viewport - rect.top) / Math.min(viewport * 0.48, 440));
        const exit = clamp((rect.bottom + viewport * 0.12) / (viewport * 0.58));
        const travel = (0.5 - progress) * 64;
        const centerDistance = Math.abs(rect.top + rect.height / 2 - viewport / 2);
        const focus = clamp(1 - centerDistance / Math.max(viewport, rect.height));

        scene.style.setProperty("--scene-progress", progress.toFixed(4));
        scene.style.setProperty("--scene-enter", enter.toFixed(4));
        scene.style.setProperty("--scene-exit", exit.toFixed(4));
        scene.style.setProperty("--scene-y", `${travel.toFixed(2)}px`);
        scene.style.setProperty("--scene-scale", (0.975 + enter * 0.025).toFixed(4));
        scene.style.setProperty("--scene-focus", focus.toFixed(4));
      });

      const heroProgress = clamp(window.scrollY / Math.max(1, viewport));
      document.documentElement.style.setProperty("--hero-progress", heroProgress.toFixed(4));
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduced.addEventListener("change", requestUpdate);
    mobile.addEventListener("change", requestUpdate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduced.removeEventListener("change", requestUpdate);
      mobile.removeEventListener("change", requestUpdate);
    };
  }, []);

  return null;
}
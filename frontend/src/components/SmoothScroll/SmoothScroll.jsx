import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    // Don't let Lenis control scroll inside the mega menu
    const stopLenisOnMenu = (event) => {
      const menu = event.target.closest(".products-mega-menu");

      if (menu) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener("wheel", stopLenisOnMenu, {
      passive: true,
    });

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("wheel", stopLenisOnMenu);
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;
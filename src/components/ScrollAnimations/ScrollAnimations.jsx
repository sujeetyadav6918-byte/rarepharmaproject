import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimations() {
  useGSAP(() => {
    // =========================
    // SECTION LABELS
    // =========================

    gsap.utils.toArray(".section-label").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
        },
      });
    });

    // =========================
    // BIG HEADINGS
    // =========================

    gsap.utils
      .toArray(".home-page h2, .about-page h2")
      .forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 70,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

    // =========================
    // HOME CARDS / ROWS
    // =========================

    gsap.utils
      .toArray(".featured-card, .area-row, .trust-row")
      .forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: (index % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
          },
        });
      });

    // =========================
    // ABOUT PRINCIPLES
    // =========================

    gsap.utils
      .toArray(".principle-row")
      .forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          x: -40,
          duration: 0.8,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });

    // =========================
    // HISTORY PHOTOS
    // =========================

    gsap.utils.toArray(".history-photo").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 80,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      });
    });

    // =========================
    // HISTORY STORY CARDS
    // =========================

    gsap.utils
      .toArray(".history-story-card")
      .forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

    // =========================
    // HISTORY IMAGE PARALLAX
    // =========================

    gsap.utils
      .toArray(".history-photo img")
      .forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 1.12,
          },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".history-photo"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

    // =========================
    // CTA
    // =========================

    gsap.utils
      .toArray(".home-cta h2, .about-cta h2")
      .forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 90,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });

    // =========================
    // HERO MOLECULE
    // =========================

    const molecule = document.querySelector(".hero-molecule");

    if (molecule) {
      gsap.to(molecule, {
        y: -18,
        rotation: 4,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    // =========================
    // REFRESH SCROLLTRIGGER
    // =========================

    ScrollTrigger.refresh();
  });

  return null;
}

export default ScrollAnimations;
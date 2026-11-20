/* =========================================================
   AZKA FARID — QUR'AN STUDIES PAGE
   File: IslamicTopic.js
   Version: Clean, Safe & Responsive
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =====================================================
       01. SELECT ELEMENTS
    ===================================================== */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const header = document.getElementById("site-header");
  const yearElement = document.getElementById("year");

  /* =====================================================
       02. AUTOMATIC FOOTER YEAR
    ===================================================== */

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* =====================================================
       03. MOBILE NAVIGATION
    ===================================================== */

  const closeMobileMenu = () => {
    if (!mainNav || !menuToggle) return;

    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
  };

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);

      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    /* Close menu after clicking navigation links */

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });

    /* Close menu with Escape key */

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  /* =====================================================
       04. HEADER SCROLL EFFECT
    ===================================================== */

  const updateHeader = () => {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 25);
  };

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true,
  });

  /* =====================================================
       05. REVEAL ANIMATION
    ===================================================== */

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });
  } else {
    /* Fallback for browsers without IntersectionObserver */

    revealItems.forEach((item) => {
      item.classList.add("visible");
    });
  }

  /* =====================================================
       06. SMOOTH SCROLL NAVIGATION
    ===================================================== */

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      /* Ignore empty hash links */

      if (!href || href === "#") return;

      const targetId = href.slice(1);

      const targetElement = document.getElementById(targetId);

      /* Continue normally if the target does not exist */

      if (!targetElement) return;

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  });

  /* =====================================================
       07. INITIAL PAGE STATE
    ===================================================== */

  closeMobileMenu();
});

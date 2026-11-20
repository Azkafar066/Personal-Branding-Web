
/* =========================================
   AZKA FARID — ABOUT ME PAGE
   Main JavaScript
   Updated: Qur'an Studies Integration
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  "use strict";

  /* =====================================
     1. SELECT ELEMENTS
  ===================================== */

  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  const currentYear = document.getElementById("current-year");

  const navLinks = document.querySelectorAll("#nav-menu a");

  const revealElements = document.querySelectorAll(".reveal");

  const profileImage = document.getElementById("profile-image");


  /* =====================================
     2. AUTOMATIC COPYRIGHT YEAR
  ===================================== */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  /* =====================================
     3. HEADER SCROLL EFFECT
  ===================================== */

  function handleHeaderScroll() {

    if (!header) return;

    header.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  }

  window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
  );

  handleHeaderScroll();


  /* =====================================
     4. MOBILE NAVIGATION
  ===================================== */

  function closeMenu() {

    if (!navMenu || !menuToggle) return;

    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

  }


  function openMenu() {

    if (!navMenu || !menuToggle) return;

    navMenu.classList.add("open");
    menuToggle.classList.add("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Close navigation menu"
    );

  }


  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navMenu.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    });


    // Close after clicking a navigation link

    navLinks.forEach(link => {

      link.addEventListener("click", closeMenu);

    });


    // Close when clicking outside

    document.addEventListener("click", event => {

      const clickedInsideMenu = navMenu.contains(event.target);

      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }

    });


    // Close using Escape

    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }

    });


    // Reset menu when returning to desktop

    window.addEventListener("resize", () => {

      if (window.innerWidth > 850) {
        closeMenu();
      }

    });

  }


  /* =====================================
     5. REVEAL ANIMATION
  ===================================== */

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  if (
    prefersReducedMotion ||
    !("IntersectionObserver" in window)
  ) {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  } else {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  }


  /* =====================================
     6. PROFILE IMAGE FALLBACK
  ===================================== */

  if (profileImage) {

    profileImage.addEventListener("error", () => {

      profileImage.style.display = "none";

      profileImage
        .parentElement
        ?.classList.add("no-image");

    });

  }


  /* =====================================
     7. ACTIVE NAVIGATION
  ===================================== */

  function updateActiveNavigation() {

    const currentPage = window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();

    navLinks.forEach(link => {

      const href = link.getAttribute("href");

      if (!href || href.startsWith("#")) return;

      const linkPage = href
        .split("/")
        .pop()
        .split("?")[0]
        .toLowerCase();

      const isActive = linkPage === currentPage;

      link.classList.toggle("active", isActive);

      if (isActive) {

        link.setAttribute(
          "aria-current",
          "page"
        );

      } else {

        link.removeAttribute("aria-current");

      }

    });

  }

  updateActiveNavigation();


  /* =====================================
     8. SMOOTH INTERNAL NAVIGATION
  ===================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

      anchor.addEventListener("click", event => {

        const targetId = anchor.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start"
        });

      });

    });


  /* =====================================
     9. PROFILE CARD KEYBOARD SUPPORT
  ===================================== */

  document
    .querySelectorAll(".profile-card")
    .forEach(card => {

      card.addEventListener("keydown", event => {

        if (event.key === "Enter") {
          card.click();
        }

      });

    });


  /* =====================================
     10. QUR'AN STUDIES NAVIGATION
  ===================================== */

  const quranCard = document.querySelector(".quran-card");

  if (quranCard) {

    quranCard.setAttribute(
      "aria-label",
      "Open Al-Qur'an Studies learning page"
    );

  }


  /* =====================================
     11. PAGE INITIALIZATION
  ===================================== */

  document.body.classList.add("page-loaded");

});








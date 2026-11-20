/* =========================================================
   AZKA FARID — FOOTBALL PASSION PAGE
   File: Football.js
   Version: Complete & Responsive
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================
       ELEMENTS
    ========================================= */

  const header = document.querySelector(".header");
  const navMenu = document.getElementById("nav-menu");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const currentYear = document.getElementById("current-year");

  /* =========================================
       MOBILE NAVIGATION
    ========================================= */

  const openMenu = () => {
    if (!navMenu || !menuToggle) return;

    navMenu.classList.add("active");
    menuToggle.classList.add("active");

    document.body.classList.add("menu-open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
  };

  const closeMenu = () => {
    if (!navMenu || !menuToggle) return;

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("active");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  /* =========================================
       CLOSE MENU AFTER CLICKING NAV LINK
    ========================================= */

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  /* =========================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================= */

  document.addEventListener("click", (event) => {
    if (!navMenu || !menuToggle) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  /* =========================================
       CLOSE MENU WITH ESCAPE KEY
    ========================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  /* =========================================
       RESET MENU ON WINDOW RESIZE
    ========================================= */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

  const handleHeaderScroll = () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleHeaderScroll);

  handleHeaderScroll();

  /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";

    if (href.toLowerCase().includes("passionhobbies.html")) {
      link.classList.add("active");
    }
  });

  /* =========================================
       FOOTER CURRENT YEAR
    ========================================= */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =========================================
       SMOOTH SCROLL
    ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (!targetElement) return;

      event.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  /* =========================================
       PAGE LOADING ANIMATION
    ========================================= */

  document.body.classList.add("page-loaded");

  /* =========================================
       INITIALIZATION
    ========================================= */

  console.log("Azka Farid Football Page Initialized!");
});

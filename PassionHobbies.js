/* =========================================================
   AZKA FARID — PASSION & HOBBIES
   File: PassionHobbies.js
   Version: Updated & Responsive
   Design: Premium Modern Islamic Personal Branding
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================================
     01. ELEMENTS
  ========================================================= */

  const header = document.querySelector(".header");
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const currentYear = document.getElementById("current-year");

  /* =========================================================
     02. HAMBURGER MENU
  ========================================================= */

  const openMenu = () => {
    if (!navMenu || !navToggle) return;

    navMenu.classList.add("active");
    navToggle.classList.add("active");
    document.body.classList.add("menu-open");

    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation menu");
  };

  const closeMenu = () => {
    if (!navMenu || !navToggle) return;

    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    document.body.classList.remove("menu-open");

    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  };

  const toggleMenu = () => {
    if (!navMenu || !navToggle) return;

    navMenu.classList.contains("active") ? closeMenu() : openMenu();
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);
  }

  /* =========================================================
     03. CLOSE MENU AFTER NAVIGATION
  ========================================================= */

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* =========================================================
     04. CLOSE MENU WHEN CLICKING OUTSIDE
  ========================================================= */

  document.addEventListener("click", (event) => {
    if (!navMenu || !navToggle) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);

    if (
      navMenu.classList.contains("active") &&
      !clickedInsideMenu &&
      !clickedToggle
    ) {
      closeMenu();
    }
  });

  /* =========================================================
     05. CLOSE MENU WITH ESCAPE
  ========================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  /* =========================================================
     06. RESPONSIVE MENU
  ========================================================= */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  /* =========================================================
     07. HEADER SCROLL EFFECT
  ========================================================= */

  const handleHeaderScroll = () => {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true,
  });

  handleHeaderScroll();

  /* =========================================================
     08. ACTIVE NAVIGATION
  ========================================================= */

  const currentPage = (
    window.location.pathname.split("/").pop() || "Homepage.html"
  ).toLowerCase();

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const linkPage = href.split("#")[0].split("/").pop().toLowerCase();

    const isCurrentPage = linkPage !== "" && linkPage === currentPage;

    link.classList.toggle("active", isCurrentPage);
  });

  /* =========================================================
     09. AUTOMATIC FOOTER YEAR
  ========================================================= */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =========================================================
     10. SMOOTH INTERNAL NAVIGATION
  ========================================================= */

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
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

      closeMenu();
    });
  });

  /* =========================================================
     11. PAGE LOADED
  ========================================================= */

  document.body.classList.add("page-loaded");

  /* =========================================================
     12. INITIALIZATION
  ========================================================= */

  console.log("Azka Farid | Passion & Hobbies Page Initialized Successfully.");
});

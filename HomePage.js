
/* =========================================================
   AZKA FARID — ISLAMIC PERSONAL BRANDING HOMEPAGE
   File: HomePage.js
   Version: Enhanced & Responsive
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================
     01. ELEMENTS
  ========================================= */

  const header = document.querySelector(".header");
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const currentYear = document.getElementById("current-year");

  /* =========================================
     02. MOBILE NAVIGATION
  ========================================= */

  function openMenu() {
    if (!navMenu || !navToggle) return;

    navMenu.classList.add("active");
    navToggle.classList.add("active");

    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation menu");

    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    if (!navMenu || !navToggle) return;

    navMenu.classList.remove("active");
    navToggle.classList.remove("active");

    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");

    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    if (!navMenu || !navToggle) return;

    const isOpen = navMenu.classList.contains("active");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", toggleMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking outside
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

  // Close menu with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close mobile menu when returning to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  /* =========================================
     03. HEADER SCROLL EFFECT
  ========================================= */

  function updateHeader() {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", updateHeader, {
    passive: true,
  });

  updateHeader();

  /* =========================================
     04. ACTIVE NAVIGATION
  ========================================= */

  function setActiveNavigation() {
    let currentPage = window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();

    if (!currentPage) {
      currentPage = "homepage.html";
    }

    if (currentPage === "index.html") {
      currentPage = "homepage.html";
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#")) return;

      const linkPage = href.split("/").pop().toLowerCase();

      const normalizedLinkPage =
        linkPage === "index.html" ? "homepage.html" : linkPage;

      const isCurrentPage = normalizedLinkPage === currentPage;

      link.classList.toggle("active", isCurrentPage);

      if (isCurrentPage) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  setActiveNavigation();

  /* =========================================
     05. SCROLL REVEAL ANIMATION
  ========================================= */

  const revealSelectors = [
    ".section-heading",
    ".about-content",
    ".about-image",
    ".education-card",
    ".islamic-card",
    ".skill-card",
    ".vision-card",
    ".portfolio-card",
    ".blog-card",
    ".contact-content",

    // Passion & Hobbies Preview
    ".passion-preview-visual",
    ".passion-preview-info",
    ".passion-visual-item",
    ".passion-interest-item",
  ];

  const revealElements = document.querySelectorAll(
    revealSelectors.join(", ")
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("show");
    });
  }

  /* =========================================
     06. AUTOMATIC FOOTER YEAR
  ========================================= */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =========================================
     07. SMOOTH SECTION SCROLL
  ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      let targetElement;

      try {
        targetElement = document.querySelector(targetId);
      } catch (error) {
        return;
      }

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        closeMenu();
      }
    });
  });

  /* =========================================
     08. IMAGE ERROR DETECTION
  ========================================= */

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("image-error");
    });
  });

  /* =========================================
     09. PAGE INITIALIZATION
  ========================================= */

  document.body.classList.add("page-loaded");

  console.log(
    "AZKA FARID | Islamic Personal Branding Homepage initialized."
  );
});


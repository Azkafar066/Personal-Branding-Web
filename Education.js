/* =========================================================
   AZKA FARID — EDUCATION PAGE JAVASCRIPT
   File: Education.js
   Version: Clean & Revised

   Features:
   1. Current Year
   2. Header Scroll Effect
   3. Mobile Navigation
   4. Scroll Reveal Animation
   5. Active Navigation
   6. Smooth Anchor Scrolling
   7. Education Card Interaction
   8. Sidebar Link Interaction
   9. Image Error Handling
   10. Page Initialization
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =====================================================
       01. CURRENT YEAR
    ===================================================== */

  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* =====================================================
       02. HEADER SCROLL EFFECT
    ===================================================== */

  const header = document.getElementById("site-header");

  const handleHeaderScroll = () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true,
  });

  handleHeaderScroll();

  /* =====================================================
       03. MOBILE NAVIGATION
    ===================================================== */

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  const closeMobileMenu = () => {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.remove("active");

    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  };

  const openMobileMenu = () => {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.add("active");

    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("active");

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu after clicking a navigation link

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });

    // Close menu when clicking outside

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMobileMenu();
      }
    });

    // Close menu with Escape key

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });

    // Close menu when returning to desktop width

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }

  /* =====================================================
       04. SCROLL REVEAL ANIMATION
    ===================================================== */

  const revealElements = document.querySelectorAll(".reveal");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("active");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      },
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  /* =====================================================
       05. ACTIVE NAVIGATION
    ===================================================== */

  const currentPage = window.location.pathname.split("/").pop().toLowerCase();

  const navigationLinks = document.querySelectorAll("#nav-menu a");

  navigationLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (!linkHref) return;

    // Ignore anchor-only links and external URLs

    if (
      linkHref.startsWith("#") ||
      linkHref.startsWith("http") ||
      linkHref.startsWith("mailto:") ||
      linkHref.startsWith("tel:")
    ) {
      return;
    }

    const linkPage = linkHref.split("/").pop().split("#")[0].toLowerCase();

    if (linkPage && linkPage === currentPage) {
      link.classList.add("active");

      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");

      link.removeAttribute("aria-current");
    }
  });

  /* =====================================================
       06. SMOOTH ANCHOR SCROLLING
    ===================================================== */

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
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
        headerHeight -
        15;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });

  /* =====================================================
       07. EDUCATION CARD INTERACTION
    ===================================================== */

  const educationCards = document.querySelectorAll(".education-card");

  educationCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("card-hover");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("card-hover");
    });

    card.addEventListener("focusin", () => {
      card.classList.add("card-hover");
    });

    card.addEventListener("focusout", (event) => {
      if (!card.contains(event.relatedTarget)) {
        card.classList.remove("card-hover");
      }
    });
  });

  /* =====================================================
       08. SCHOOL LOGO IMAGE ERROR HANDLING
    ===================================================== */

  const schoolLogos = document.querySelectorAll(".school-logo");

  schoolLogos.forEach((image) => {
    image.addEventListener("error", () => {
      console.warn(
        "Education logo could not be loaded:",
        image.getAttribute("src"),
      );
    });
  });

  /* =====================================================
       09. ACADEMIC SIDEBAR LINK INTERACTION
    ===================================================== */

  const academicLinks = document.querySelectorAll(".academic-link-card");

  academicLinks.forEach((link) => {
    link.addEventListener("focus", () => {
      link.classList.add("link-focused");
    });

    link.addEventListener("blur", () => {
      link.classList.remove("link-focused");
    });
  });

  /* =====================================================
       10. PAGE INITIALIZATION
    ===================================================== */

  document.body.classList.add("page-loaded");

  console.log("Azka Farid Education Page initialized successfully.");
});

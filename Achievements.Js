/* =========================================================
   AZKA FARID — ACHIEVEMENTS PAGE
   File: Achievements.js
   Version: Clean, Responsive & Interactive
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =====================================================
     01. CURRENT YEAR
  ===================================================== */

  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =====================================================
     02. HEADER SCROLL EFFECT
  ===================================================== */

  const header = document.getElementById("site-header");

  const handleHeaderScroll = () => {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 40);
  };

  handleHeaderScroll();

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true,
  });

  /* =====================================================
     03. HAMBURGER NAVIGATION
  ===================================================== */

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  const openMenu = () => {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.add("active");
    menuToggle.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation menu");
  };

  const closeMenu = () => {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("active");

      isOpen ? closeMenu() : openMenu();
    });

    // Close menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }
    });

    // Close menu with Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Close menu when returning to desktop layout
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  /* =====================================================
     04. SCROLL REVEAL ANIMATION
  ===================================================== */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
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
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((element) => {
      element.classList.add("active");
    });
  }

  /* =====================================================
     05. SMOOTH ANCHOR SCROLLING
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
        behavior: "smooth",
      });
    });
  });

  /* =====================================================
     06. ACHIEVEMENT GALLERY FILTER
  ===================================================== */

  const filterButtons = document.querySelectorAll(".filter-btn");
  const evidenceCards = document.querySelectorAll(".evidence-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter || "all";

      // Update active filter button
      filterButtons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      // Filter gallery cards
      evidenceCards.forEach((card) => {
        const category = card.dataset.category || "";

        const shouldShow =
          selectedFilter === "all" || category === selectedFilter;

        card.classList.toggle("hidden", !shouldShow);

        if (shouldShow) {
          card.classList.add("active");
        }
      });
    });

    button.setAttribute(
      "aria-pressed",
      button.classList.contains("active") ? "true" : "false",
    );
  });

  /* =====================================================
     07. LIGHTBOX ELEMENTS
  ===================================================== */

  const lightbox = document.getElementById("evidence-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDescription = document.getElementById("lightbox-description");

  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  let currentImageIndex = 0;
  let previousFocusElement = null;

  /* =====================================================
     08. GET AVAILABLE GALLERY IMAGES
  ===================================================== */

  const getAvailableCards = () => {
    return Array.from(evidenceCards).filter((card) => {
      const image = card.querySelector("img");

      return (
        image &&
        image.getAttribute("src") &&
        image.getAttribute("src").trim() !== "" &&
        !card.classList.contains("hidden")
      );
    });
  };

  /* =====================================================
     09. OPEN LIGHTBOX
  ===================================================== */

  const openLightbox = (card) => {
    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxDescription) {
      return;
    }

    const availableCards = getAvailableCards();
    const image = card.querySelector("img");

    if (!image || !image.src) return;

    if (image.complete && image.naturalWidth === 0) return;

    currentImageIndex = availableCards.indexOf(card);

    if (currentImageIndex === -1) return;

    previousFocusElement = document.activeElement;

    updateLightbox();

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");

    if (lightboxClose) {
      lightboxClose.focus();
    }
  };

  /* =====================================================
     10. UPDATE LIGHTBOX CONTENT
  ===================================================== */

  const updateLightbox = () => {
    if (!lightboxImage || !lightboxTitle || !lightboxDescription) {
      return;
    }

    const availableCards = getAvailableCards();

    if (!availableCards.length) return;

    const card = availableCards[currentImageIndex];

    if (!card) return;

    const image = card.querySelector("img");

    const title =
      card.dataset.title ||
      card.querySelector("h3")?.textContent ||
      "Achievement Evidence";

    const description =
      card.dataset.description || card.querySelector("p")?.textContent || "";

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt || title;

    lightboxTitle.textContent = title;

    lightboxDescription.textContent = description;

    // Update navigation buttons
    if (lightboxPrev) {
      lightboxPrev.disabled = availableCards.length <= 1;
    }

    if (lightboxNext) {
      lightboxNext.disabled = availableCards.length <= 1;
    }
  };

  /* =====================================================
     11. CLOSE LIGHTBOX
  ===================================================== */

  const closeLightbox = () => {
    if (!lightbox) return;

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

    if (lightboxImage) {
      lightboxImage.removeAttribute("src");
    }

    if (
      previousFocusElement &&
      typeof previousFocusElement.focus === "function"
    ) {
      previousFocusElement.focus();
    }
  };

  /* =====================================================
     12. PREVIOUS / NEXT IMAGE
  ===================================================== */

  const showPreviousImage = () => {
    const availableCards = getAvailableCards();

    if (availableCards.length <= 1) return;

    currentImageIndex =
      (currentImageIndex - 1 + availableCards.length) % availableCards.length;

    updateLightbox();
  };

  const showNextImage = () => {
    const availableCards = getAvailableCards();

    if (availableCards.length <= 1) return;

    currentImageIndex = (currentImageIndex + 1) % availableCards.length;

    updateLightbox();
  };

  /* =====================================================
     13. GALLERY IMAGE INTERACTIONS
  ===================================================== */

  const evidenceGrid = document.querySelector(".evidence-grid");

  if (evidenceGrid) {
    evidenceGrid.addEventListener("click", (event) => {
      const card = event.target.closest(".evidence-card");

      if (!card) return;

      const image = card.querySelector("img");

      // Do not open an empty placeholder
      if (!image || !image.getAttribute("src")) return;

      openLightbox(card);
    });

    // Keyboard accessibility
    evidenceGrid.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;

      const card = event.target.closest(".evidence-card");

      if (!card) return;

      const image = card.querySelector("img");

      if (!image || !image.getAttribute("src")) return;

      event.preventDefault();

      openLightbox(card);
    });
  }

  /* =====================================================
     14. LIGHTBOX BUTTON EVENTS
  ===================================================== */

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", showPreviousImage);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener("click", showNextImage);
  }

  // Close when clicking the lightbox background
  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  /* =====================================================
     15. LIGHTBOX KEYBOARD CONTROLS
  ===================================================== */

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("active")) {
      return;
    }

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPreviousImage();
    }

    if (event.key === "ArrowRight") {
      showNextImage();
    }
  });

  /* =====================================================
     16. INITIAL ACCESSIBILITY SETTINGS
  ===================================================== */

  if (lightbox) {
    lightbox.setAttribute("aria-hidden", "true");
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
  }

  console.log("Achievements Page initialized successfully.");
});

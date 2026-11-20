
/* =========================================
   AZKA FARID - MY PERSONAL PROFILE
   JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTS
  const pageLoader = document.getElementById("pageLoader");
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");
  const currentYear = document.getElementById("currentYear");

  // PAGE LOADER
  const hideLoader = () => {
    if (pageLoader) {
      pageLoader.classList.add("loaded");
    }
  };

  window.addEventListener("load", hideLoader);

  // Fallback if load event has already fired
  if (document.readyState === "complete") {
    hideLoader();
  }

  // CURRENT YEAR
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // MOBILE NAVIGATION
  function closeMenu() {
    if (!mainNav || !menuToggle) return;

    mainNav.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  function openMenu() {
    if (!mainNav || !menuToggle) return;

    mainNav.classList.add("open");
    document.body.classList.add("menu-open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");

    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when navigation link is selected
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    // Close when clicking outside
    document.addEventListener("click", event => {
      const clickedInside =
        mainNav.contains(event.target) ||
        menuToggle.contains(event.target);

      if (!clickedInside) {
        closeMenu();
      }
    });

    // Close with Escape
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Close when returning to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        closeMenu();
      }
    });
  }

  // HEADER SCROLL EFFECT
  function updateHeader() {
    if (!siteHeader) return;

    if (window.scrollY > 40) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  // BACK TO TOP VISIBILITY
  function updateBackToTop() {
    if (!backToTop) return;

    if (window.scrollY > 450) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  // SCROLL REVEAL
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
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
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }

  // ACTIVE SECTION NAVIGATION
  const sections = document.querySelectorAll("main section[id]");
  const sectionLinks = document.querySelectorAll(".section-nav-inner a");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeId = entry.target.id;

            sectionLinks.forEach(link => {
              const targetId = link.getAttribute("href");

              link.classList.toggle(
                "active",
                targetId === `#${activeId}`
              );
            });
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }

  // BACK TO TOP ACTION
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // PROFILE IMAGE FALLBACK
  const profilePhoto = document.getElementById("profilePhoto");
  const photoFallback = document.getElementById("photoFallback");

  function showPhotoFallback() {
    if (photoFallback) {
      photoFallback.style.display = "flex";
    }

    if (profilePhoto) {
      profilePhoto.style.display = "none";
    }
  }

  if (profilePhoto) {
    profilePhoto.addEventListener("error", showPhotoFallback);

    if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
      showPhotoFallback();
    }
  }

  // SMOOTH INTERNAL NAVIGATION
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(null, "", targetId);
    });
  });

  // SCROLL LISTENERS
  window.addEventListener("scroll", () => {
    updateHeader();
    updateBackToTop();
  }, { passive: true });

  // INITIAL STATE
  updateHeader();
  updateBackToTop();

  // GLOBAL UTILITIES
  window.scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.closeProfileMenu = closeMenu;

});

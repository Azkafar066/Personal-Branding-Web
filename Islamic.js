
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const menuToggle = document.getElementById("menu-toggle");

  const sideLinks = [
    ...document.querySelectorAll(".side-link")
  ];

  // MOBILE SIDEBAR

  const closeMenu = () => {
    sidebar?.classList.remove("active");
    overlay?.classList.remove("show");

    document.body.classList.remove("sidebar-open");

    menuToggle?.setAttribute("aria-expanded", "false");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("active");

    overlay?.classList.toggle("show", isOpen);

    document.body.classList.toggle("sidebar-open", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  overlay?.addEventListener("click", closeMenu);

  sideLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // CURRENT YEAR

  const year = new Date().getFullYear();

  ["current-year", "footer-year"].forEach(id => {
    const node = document.getElementById(id);

    if (node) {
      node.textContent = year;
    }
  });

  // REVEAL ANIMATION

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.12
    });

    revealItems.forEach(item => {
      observer.observe(item);
    });

  } else {

    revealItems.forEach(item => {
      item.classList.add("show");
    });

  }

  // ACTIVE SIDEBAR SECTION

  const sections = [
    ...document.querySelectorAll(".section-anchor")
  ];

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        sideLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );

        });

      });

    }, {
      rootMargin: "-30% 0px -60% 0px"
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }

  // SMOOTH INTERNAL NAVIGATION

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", event => {

      const target = document.querySelector(
        anchor.getAttribute("href")
      );

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});


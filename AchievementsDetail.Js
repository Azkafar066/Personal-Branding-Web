/* =========================================================
   AZKA FARID — ACHIEVEMENT DETAIL PAGE
   File: AchievementDetail.js
   Version: Clean, Responsive & Dynamic
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =====================================================
     01. ACHIEVEMENT DATA
  ===================================================== */

  const achievements = {
    tahfizh: {
      title: "Sertifikasi Tahfizh",
      category: "QUR'AN MEMORIZATION",
      subtitle: "Juz 30",
      description: "Sebuah pencapaian dalam perjalanan menghafal Al-Qur'an.",

      year: "",
      organizer: "Pondok Tahfizh Plus Abu Dzar",
      location: "Pondok Tahfizh Plus Abu Dzar",
      achievement: "Sertifikasi Tahfizh",

      image: "",
      imageAlt: "Dokumentasi Sertifikasi Tahfizh",

      story:
        "Pencapaian ini menjadi bagian dari perjalanan saya dalam mempelajari dan menghafal Al-Qur'an. Prosesnya mengajarkan pentingnya kesungguhan, kesabaran, kedisiplinan, serta konsistensi dalam menjaga hafalan.",

      reflection:
        "Saya belajar bahwa menghafal Al-Qur'an bukan hanya tentang menyelesaikan hafalan, tetapi juga tentang menjaga, memahami, dan berusaha mengamalkannya dalam kehidupan sehari-hari.",
    },

    discipline: {
      title: "Santri Terdisiplin",
      category: "DISCIPLINE AWARD",
      subtitle: "Best Discipline Student Award",

      description:
        "Penghargaan atas kedisiplinan dan tanggung jawab selama menjalani kehidupan sebagai santri.",

      year: "2024–2025",
      organizer: "Pondok Tahfizh Plus Abu Dzar",
      location: "Pondok Tahfizh Plus Abu Dzar",
      achievement: "Siswa Terbaik Kedisiplinan",

      image: "",
      imageAlt: "Dokumentasi Penghargaan Santri Terdisiplin",

      story:
        "Penghargaan ini menjadi salah satu pengalaman berkesan selama menjalani kehidupan di pondok. Saya belajar untuk menghargai waktu, menaati peraturan, menjalankan tanggung jawab, dan membiasakan diri untuk lebih teratur dalam aktivitas sehari-hari.",

      reflection:
        "Pengalaman ini mengajarkan bahwa kedisiplinan bukan hanya tentang mengikuti aturan, tetapi juga tentang membangun tanggung jawab dan kebiasaan baik yang bermanfaat untuk masa depan.",
    },

    "public-speaking": {
      title: "Public Speaking Competition",
      category: "PUBLIC SPEAKING",
      subtitle: "3rd Place",

      description:
        "Pengalaman mengikuti kompetisi public speaking dan memperoleh posisi juara ketiga.",

      year: "",
      organizer: "",
      location: "",
      achievement: "3rd Place",

      image: "",
      imageAlt: "Dokumentasi Public Speaking Competition",

      story:
        "Kompetisi ini menjadi pengalaman berharga untuk mengembangkan kemampuan berbicara di depan umum. Melalui pengalaman tersebut, saya belajar menyampaikan gagasan dengan lebih percaya diri dan terstruktur.",

      reflection:
        "Saya belajar bahwa kemampuan berbicara di depan umum membutuhkan latihan, persiapan, keberanian, dan kemauan untuk terus berkembang.",
    },

    kasti: {
      title: "Juara 1 Lomba Kasti",
      category: "SPORTS ACHIEVEMENT",
      subtitle: "First Place",

      description:
        "Pencapaian juara pertama dalam perlombaan kasti pada perayaan 17 Agustus.",

      year: "",
      organizer: "SD Auliya",
      location: "SD Auliya",
      achievement: "Juara 1",

      image: "",
      imageAlt: "Dokumentasi Juara 1 Lomba Kasti",

      story:
        "Perlombaan kasti ini menjadi salah satu pengalaman menyenangkan yang memberikan kesempatan untuk belajar bekerja sama, menjaga kekompakan, dan berusaha memberikan yang terbaik bersama tim.",

      reflection:
        "Pengalaman ini mengajarkan pentingnya kerja sama, komunikasi, semangat sportivitas, dan saling mendukung untuk mencapai tujuan bersama.",
    },

    bulldozer: {
      title: "Juara 1 Team Outbound",
      category: "TEAMWORK ACHIEVEMENT",
      subtitle: "First Place",

      description:
        "Pencapaian juara pertama dalam kegiatan outbound melalui permainan tim Bulldozer.",

      year: "",
      organizer: "SD Auliya",
      location: "SD Auliya",
      achievement: "Juara 1",

      image: "",
      imageAlt: "Dokumentasi Juara 1 Team Outbound",

      story:
        "Kegiatan outbound ini menjadi pengalaman yang menyenangkan dan berkesan. Melalui permainan Bulldozer, saya belajar pentingnya kekompakan, komunikasi, dan kerja sama dalam menyelesaikan tantangan bersama tim.",

      reflection:
        "Saya belajar bahwa keberhasilan sebuah tim tidak hanya bergantung pada kemampuan individu, tetapi juga pada kepercayaan, komunikasi, dan kerja sama setiap anggota.",
    },
  };

  /* =====================================================
     02. GET HTML ELEMENTS
  ===================================================== */

  const elements = {
    title: document.getElementById("detailTitle"),
    category: document.getElementById("detailCategory"),
    subtitle: document.getElementById("detailSubtitle"),
    description: document.getElementById("detailDescription"),

    year: document.getElementById("detailYear"),
    organizer: document.getElementById("detailOrganizer"),
    location: document.getElementById("detailLocation"),
    achievement: document.getElementById("detailAchievement"),

    image: document.getElementById("detailImage"),
    imageCaption: document.getElementById("detailImageCaption"),

    story: document.getElementById("detailStory"),
    reflection: document.getElementById("detailReflection"),

    breadcrumbTitle: document.getElementById("breadcrumbTitle"),

    previousButton: document.getElementById("previousAchievement"),
    nextButton: document.getElementById("nextAchievement"),

    notFound: document.getElementById("notFound"),

    currentYear: document.getElementById("currentYear"),
  };

  /* =====================================================
     03. GET ACHIEVEMENT ID FROM URL
  ===================================================== */

  const params = new URLSearchParams(window.location.search);
  const achievementId = params.get("id");

  const achievementKeys = Object.keys(achievements);
  const currentIndex = achievementKeys.indexOf(achievementId);

  const currentAchievement = achievements[achievementId];

  /* =====================================================
     04. CURRENT YEAR
  ===================================================== */

  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  /* =====================================================
     05. HEADER SCROLL EFFECT
  ===================================================== */

  const header = document.querySelector(".site-header");

  function handleHeaderScroll() {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", handleHeaderScroll);
  handleHeaderScroll();

  /* =====================================================
     06. MOBILE NAVIGATION
  ===================================================== */

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* =====================================================
     07. SCROLL REVEAL
  ===================================================== */

  function initializeReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    // Make content visible first as a safe fallback.
    revealElements.forEach((element) => {
      element.classList.add("active");
    });

    if (!("IntersectionObserver" in window)) {
      return;
    }

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px",
        },
      );

      revealElements.forEach((element) => {
        observer.observe(element);
      });
    } catch (error) {
      console.warn("Reveal animation unavailable:", error);
    }
  }

  /* =====================================================
     08. IMAGE PLACEHOLDER
  ===================================================== */

  function showImagePlaceholder(message = "Achievement Documentation") {
    if (!elements.image) return;

    const placeholder = document.createElement("div");

    placeholder.className = "detail-image-placeholder";

    const icon = document.createElement("i");
    icon.className = "fas fa-image";

    const heading = document.createElement("strong");
    heading.textContent = message;

    const description = document.createElement("span");
    description.textContent =
      "Achievement documentation will be displayed here.";

    placeholder.appendChild(icon);
    placeholder.appendChild(heading);
    placeholder.appendChild(description);

    elements.image.replaceWith(placeholder);

    elements.image = null;
  }

  /* =====================================================
     09. UPDATE IMAGE
  ===================================================== */

  function updateImage(data) {
    if (!elements.image) return;

    const imagePath = data.image;

    if (!imagePath || imagePath.trim() === "") {
      showImagePlaceholder();
      return;
    }

    elements.image.src = imagePath;
    elements.image.alt = data.imageAlt || data.title;

    elements.image.addEventListener(
      "error",
      () => {
        showImagePlaceholder("Image Not Available");
      },
      { once: true },
    );
  }

  /* =====================================================
     10. UPDATE PAGE CONTENT
  ===================================================== */

  function updateText(element, value, fallback = "Not specified") {
    if (!element) return;

    element.textContent =
      value && String(value).trim() !== "" ? value : fallback;
  }

  function renderAchievement(data) {
    if (!data) return;

    // Browser title
    document.title = `${data.title} | Azka Farid`;

    // Hero information
    updateText(elements.title, data.title);
    updateText(elements.category, data.category);
    updateText(elements.subtitle, data.subtitle);
    updateText(elements.description, data.description);

    // Achievement information
    updateText(elements.year, data.year);
    updateText(elements.organizer, data.organizer);
    updateText(elements.location, data.location);
    updateText(elements.achievement, data.achievement);

    // Breadcrumb
    updateText(elements.breadcrumbTitle, data.title);

    // Story
    updateText(elements.story, data.story);

    // Reflection
    updateText(elements.reflection, data.reflection);

    // Image caption
    updateText(elements.imageCaption, data.imageAlt, data.title);

    // Image
    updateImage(data);
  }

  /* =====================================================
     11. NOT FOUND HANDLER
  ===================================================== */

  function renderNotFound() {
    document.title = "Achievement Not Found | Azka Farid";

    updateText(elements.title, "Achievement Not Found");

    updateText(elements.category, "PAGE NOT FOUND");

    updateText(elements.subtitle, "Achievement details are unavailable.");

    updateText(
      elements.description,
      "The achievement you are looking for could not be found.",
    );

    updateText(elements.year, "");
    updateText(elements.organizer, "");
    updateText(elements.location, "");
    updateText(elements.achievement, "");

    updateText(elements.breadcrumbTitle, "Not Found");

    updateText(
      elements.story,
      "Please return to the achievements page and select an available achievement.",
    );

    updateText(
      elements.reflection,
      "Thank you for visiting the achievement page.",
    );

    updateText(elements.imageCaption, "Achievement Not Found");

    if (elements.image) {
      showImagePlaceholder("Achievement Not Found");
    }

    if (elements.notFound) {
      elements.notFound.style.display = "block";
    }

    if (elements.previousButton) {
      elements.previousButton.disabled = true;
    }

    if (elements.nextButton) {
      elements.nextButton.disabled = true;
    }
  }

  /* =====================================================
     12. PREVIOUS & NEXT ACHIEVEMENT
  ===================================================== */

  function navigateAchievement(direction) {
    const newIndex = currentIndex + direction;

    if (newIndex < 0 || newIndex >= achievementKeys.length) {
      return;
    }

    const nextId = achievementKeys[newIndex];

    window.location.href = `AchievementDetail.html?id=${encodeURIComponent(nextId)}`;
  }

  function initializeNavigation() {
    if (elements.previousButton) {
      elements.previousButton.disabled = currentIndex <= 0;

      elements.previousButton.addEventListener("click", () => {
        navigateAchievement(-1);
      });
    }

    if (elements.nextButton) {
      elements.nextButton.disabled = currentIndex >= achievementKeys.length - 1;

      elements.nextButton.addEventListener("click", () => {
        navigateAchievement(1);
      });
    }
  }

  /* =====================================================
     13. SMOOTH SCROLL LINKS
  ===================================================== */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      let target;

      try {
        target = document.querySelector(targetId);
      } catch (error) {
        return;
      }

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  /* =====================================================
     14. INITIALIZE PAGE
  ===================================================== */

  if (!currentAchievement) {
    renderNotFound();

    initializeNavigation();
    initializeReveal();

    return;
  }

  // Render achievement data
  renderAchievement(currentAchievement);

  // Initialize navigation
  initializeNavigation();

  // Initialize reveal animation
  initializeReveal();

  /* =====================================================
     15. CONSOLE INFORMATION
  ===================================================== */

  console.info("Achievement Detail Page initialized:", achievementId);
});

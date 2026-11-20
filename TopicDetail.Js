/* =========================================================
   AZKA FARID ISLAMIC
   TOPIC DETAIL PAGE JAVASCRIPT
   Dynamic Learning System
   Supports:
   01. Introduction to the Qur'an
   02. History: Revelation & Compilation
   03. Tajwid & Recitation
   04. Tafsir & Meaning
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =====================================================
     01. ELEMENT SELECTOR
  ===================================================== */

  const select = (selector) => document.querySelector(selector);
  const selectAll = (selector) => document.querySelectorAll(selector);

  const params = new URLSearchParams(window.location.search);
  const topicParam = params.get("topic");

  const currentYear = select("#currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =====================================================
     02. PAGE LOADER
  ===================================================== */

  const pageLoader = select("#pageLoader");

  const hidePageLoader = () => {
    if (pageLoader) pageLoader.classList.add("hidden");
  };

  window.addEventListener("load", hidePageLoader);

  if (document.readyState === "complete") {
    hidePageLoader();
  }

  window.setTimeout(hidePageLoader, 2500);

  /* =====================================================
     03. HEADER SCROLL EFFECT
  ===================================================== */

  const siteHeader = select("#siteHeader");

  const handleHeaderScroll = () => {
    if (!siteHeader) return;

    siteHeader.classList.toggle("scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true,
  });

  handleHeaderScroll();

  /* =====================================================
     04. MOBILE NAVIGATION
  ===================================================== */

  const menuToggle = select("#menuToggle");
  const mainNav = select("#mainNav");

  if (menuToggle && mainNav) {
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mainNav.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* =====================================================
     05. TOPIC DATA — CARD 02
  ===================================================== */

  const historyTopic = {
    id: "revelation-and-compilation",

    title: "History: Revelation & Compilation",

    heroTitle: "History of the",
    heroHighlight: "Qur'an",

    description:
      "Mempelajari awal turunnya wahyu, proses penjagaan Al-Qur'an, serta sejarah pengumpulan dan penyeragaman mushaf.",

    duration: "20–25 Minutes",
    level: "Beginner Level",

    overview:
      "Menelusuri perjalanan turunnya wahyu dan bagaimana Al-Qur'an dijaga, dikumpulkan, serta disalin menjadi mushaf standar.",

    overviewHeading: "Explore the <span>History.</span>",

    reflectionIntro:
      "Setelah mempelajari sejarah turunnya dan penjagaan Al-Qur'an, luangkan waktu untuk merenungkan pelajaran yang kamu dapatkan.",

    learn: [
      "Awal turunnya wahyu kepada Nabi Muhammad ﷺ",
      "Proses turunnya Al-Qur'an secara bertahap",
      "Penjagaan Al-Qur'an pada masa Nabi ﷺ",
      "Pengumpulan Al-Qur'an pada masa Abu Bakr",
      "Penyeragaman mushaf pada masa Utsman",
    ],

    objectives: [
      "Menjelaskan peristiwa turunnya wahyu pertama",
      "Memahami hikmah turunnya Al-Qur'an secara bertahap",
      "Mengenal cara penjagaan Al-Qur'an",
      "Membedakan pengumpulan pada masa Abu Bakr dan Utsman",
      "Mengenal tokoh-tokoh dalam sejarah pengumpulan mushaf",
    ],

    sections: [
      {
        title: "The Beginning of Revelation",
        subtitle: "Awal Turunnya Wahyu",

        content: `
          <p>
            Wahyu Al-Qur'an pertama kali diturunkan kepada Nabi Muhammad ﷺ
            ketika beliau berada di Gua Hira. Peristiwa ini menjadi awal
            kenabian dan turunnya petunjuk Allah kepada umat manusia.
          </p>

          <div class="definition-card">
            <span class="definition-label">THE FIRST REVELATION</span>
            <h3>Surah Al-'Alaq ayat 1–5</h3>
            <p>
              Lima ayat pertama Surah Al-'Alaq dikenal sebagai wahyu pertama
              yang diterima Nabi Muhammad ﷺ melalui Malaikat Jibril.
            </p>
          </div>

          <div class="evidence-card">
            <span class="evidence-label">QS. AL-'ALAQ: 1–5</span>
            <div class="arabic-verse">
              اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَ
            </div>
            <p>
              "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan."
            </p>
            <span class="verse-lesson">
              Lesson: Wahyu pertama mengawali risalah kenabian dan
              mengandung perintah membaca.
            </span>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Knowledge Note</strong>
              <p>
                Gua Hira merupakan tempat Nabi Muhammad ﷺ menerima wahyu
                pertama. Peristiwa ini menjadi awal turunnya Al-Qur'an.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "The Gradual Revelation",
        subtitle: "Turunnya Al-Qur'an Secara Bertahap",

        content: `
          <p>
            Al-Qur'an tidak diturunkan sekaligus dalam satu waktu.
            Wahyu diturunkan secara bertahap selama masa kerasulan
            Nabi Muhammad ﷺ.
          </p>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3>Penguatan Hati Nabi ﷺ</h3>
                <p>
                  Turunnya wahyu secara bertahap menjadi penguat bagi
                  Rasulullah ﷺ dalam menjalankan tugas risalah.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </span>
              <div>
                <h3>Pembelajaran Bertahap</h3>
                <p>
                  Ayat-ayat Al-Qur'an memberikan bimbingan kepada umat
                  sesuai dengan keadaan dan peristiwa yang dihadapi.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
              <div>
                <h3>Memudahkan Penghayatan</h3>
                <p>
                  Turunnya wahyu secara bertahap membantu para sahabat
                  mempelajari, menghafal, dan memahami ayat-ayatnya.
                </p>
              </div>
            </div>
          </div>

          <div class="evidence-card">
            <span class="evidence-label">QS. AL-ISRA': 106</span>
            <div class="arabic-verse">
              وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ
            </div>
            <p>
              Ayat ini menjelaskan bahwa Al-Qur'an diturunkan secara
              berangsur-angsur agar dibacakan kepada manusia secara
              perlahan.
            </p>
            <span class="verse-lesson">
              Lesson: Wahyu diturunkan secara bertahap, bukan sekaligus.
            </span>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Important Note</strong>
              <p>
                Masa turunnya wahyu berlangsung sekitar 23 tahun,
                selama periode kerasulan Nabi Muhammad ﷺ.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "The Preservation of the Qur'an",
        subtitle: "Penjagaan Al-Qur'an pada Masa Nabi ﷺ",

        content: `
          <p>
            Pada masa Nabi Muhammad ﷺ, Al-Qur'an dijaga melalui hafalan
            para sahabat dan penulisan wahyu. Kedua cara ini saling
            mendukung dalam menjaga keaslian dan penyampaian wahyu.
          </p>

          <div class="function-grid">
            <div class="function-card">
              <i class="fa-solid fa-brain"></i>
              <h3>Hafalan</h3>
              <p>
                Para sahabat menghafal ayat-ayat Al-Qur'an dan
                mempelajarinya langsung dari Rasulullah ﷺ.
              </p>
            </div>

            <div class="function-card">
              <i class="fa-solid fa-pen"></i>
              <h3>Penulisan Wahyu</h3>
              <p>
                Wahyu ditulis oleh para penulis wahyu yang ditugaskan
                oleh Rasulullah ﷺ.
              </p>
            </div>

            <div class="function-card">
              <i class="fa-solid fa-book"></i>
              <h3>Pengajaran</h3>
              <p>
                Ayat-ayat Al-Qur'an diajarkan dan dibacakan kepada
                para sahabat.
              </p>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Knowledge Note</strong>
              <p>
                Penjagaan Al-Qur'an tidak hanya berkaitan dengan tulisan,
                tetapi juga hafalan, pembacaan, dan pengajaran yang
                berlangsung di tengah masyarakat Muslim.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "Compilation under Abu Bakr",
        subtitle: "Pengumpulan Al-Qur'an pada Masa Abu Bakr",

        content: `
          <p>
            Setelah wafatnya Nabi Muhammad ﷺ, sejumlah penghafal Al-Qur'an
            gugur dalam Perang Yamamah. Umar bin Al-Khattab kemudian
            menyampaikan kepada Abu Bakr pentingnya mengumpulkan
            lembaran-lembaran Al-Qur'an.
          </p>

          <div class="definition-card">
            <span class="definition-label">HISTORICAL FIGURE</span>
            <h3>Zayd ibn Thabit رضي الله عنه</h3>
            <p>
              Abu Bakr menugaskan Zayd ibn Thabit, yang pernah menjadi
              penulis wahyu, untuk menelusuri dan mengumpulkan
              catatan Al-Qur'an.
            </p>
          </div>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-comments"></i>
              </span>
              <div>
                <h3>Usulan Umar bin Al-Khattab</h3>
                <p>
                  Umar mengusulkan pengumpulan Al-Qur'an karena
                  kekhawatiran atas gugurnya banyak penghafal.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-file-lines"></i>
              </span>
              <div>
                <h3>Tugas Zayd ibn Thabit</h3>
                <p>
                  Zayd menelusuri bahan-bahan tertulis dan hafalan
                  untuk mengumpulkan ayat-ayat Al-Qur'an.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-box-archive"></i>
              </span>
              <div>
                <h3>Penyimpanan Lembaran</h3>
                <p>
                  Lembaran yang terkumpul berada pada Abu Bakr,
                  kemudian Umar, dan selanjutnya Hafsah binti Umar.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Historical Note</strong>
              <p>
                Peristiwa ini dikenal sebagai pengumpulan Al-Qur'an
                pada masa Khalifah Abu Bakr. Rujukan utamanya adalah
                Sahih al-Bukhari nomor 4986.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "Standardization under Uthman",
        subtitle: "Penyeragaman Mushaf pada Masa Utsman",

        content: `
          <p>
            Pada masa Khalifah Utsman bin Affan, wilayah Islam semakin
            luas dan perbedaan cara membaca di sejumlah wilayah
            menjadi perhatian. Hudzaifah ibn al-Yaman menyampaikan
            kekhawatirannya kepada Utsman.
          </p>

          <div class="definition-card">
            <span class="definition-label">HISTORICAL FIGURE</span>
            <h3>Utsman ibn Affan رضي الله عنه</h3>
            <p>
              Utsman meminta lembaran yang tersimpan pada Hafsah
              untuk disalin menjadi beberapa mushaf standar.
            </p>
          </div>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-users"></i>
              </span>
              <div>
                <h3>Tim Penyalinan</h3>
                <p>
                  Tim yang dipimpin Zayd ibn Thabit bersama
                  Abdullah ibn az-Zubayr, Sa'id ibn al-'As,
                  dan Abdurrahman ibn al-Harith.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-copy"></i>
              </span>
              <div>
                <h3>Penyalinan Mushaf</h3>
                <p>
                  Lembaran yang sebelumnya disimpan Hafsah
                  dijadikan dasar untuk menghasilkan salinan mushaf.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-share-nodes"></i>
              </span>
              <div>
                <h3>Penyebaran Salinan</h3>
                <p>
                  Salinan mushaf dikirim ke berbagai wilayah Muslim
                  untuk membantu menjaga keseragaman rujukan tertulis.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Important Distinction</strong>
              <p>
                Pengumpulan pada masa Abu Bakr dan penyeragaman
                pada masa Utsman adalah dua tahap sejarah yang berbeda.
                Utsman menyalin dan menyebarkan mushaf standar
                berdasarkan lembaran yang telah dikumpulkan sebelumnya.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "Qur'anic and Hadith Evidence",
        subtitle: "Dalil dan Penjelasan",

        content: `
          <p>
            Sejarah turunnya wahyu dan penjagaan Al-Qur'an dapat
            dipelajari melalui ayat Al-Qur'an dan riwayat hadis
            yang menjelaskan peristiwa tersebut.
          </p>

          <div class="evidence-card">
            <span class="evidence-label">QS. AL-HIJR: 9</span>
            <div class="arabic-verse">
              إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
            </div>
            <p>
              "Sesungguhnya Kamilah yang menurunkan Adz-Dzikr
              (Al-Qur'an), dan pasti Kami pula yang memeliharanya."
            </p>
            <span class="verse-lesson">
              Lesson: Ayat ini menyatakan penjagaan Allah terhadap
              Adz-Dzikr.
            </span>
          </div>

          <div class="evidence-card">
            <span class="evidence-label">QS. AL-ISRA': 106</span>
            <div class="arabic-verse">
              وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ
            </div>
            <p>
              Ayat ini menjelaskan bahwa Al-Qur'an diturunkan
              secara berangsur-angsur.
            </p>
            <span class="verse-lesson">
              Lesson: Turunnya wahyu berlangsung secara bertahap.
            </span>
          </div>

          <div class="hadith-evidence">
            <span class="evidence-label">SAHIH AL-BUKHARI: 4986</span>
            <p>
              Riwayat Zayd ibn Thabit menjelaskan pengumpulan
              Al-Qur'an pada masa Abu Bakr atas usulan Umar.
            </p>
            <span class="verse-lesson">
              Lesson: Pengumpulan dilakukan dengan menelusuri
              bahan tertulis dan hafalan.
            </span>
          </div>

          <div class="hadith-evidence">
            <span class="evidence-label">SAHIH AL-BUKHARI: 4987</span>
            <p>
              Riwayat Anas ibn Malik menjelaskan penyalinan mushaf
              pada masa Utsman dan pengiriman salinannya ke berbagai wilayah.
            </p>
            <span class="verse-lesson">
              Lesson: Penyeragaman mushaf merupakan tahap berbeda
              dari pengumpulan pada masa Abu Bakr.
            </span>
          </div>
        `,
      },

      {
        title: "Key Takeaways",
        subtitle: "Ringkasan Pembelajaran",

        content: `
          <p>
            Mari mengingat kembali beberapa poin penting dari
            sejarah turunnya wahyu dan pengumpulan mushaf.
          </p>

          <div class="takeaway-card">
            <div class="takeaway-item">
              <i class="fa-solid fa-check-circle"></i>
              Wahyu pertama diterima Nabi Muhammad ﷺ di Gua Hira.
            </div>

            <div class="takeaway-item">
              <i class="fa-solid fa-check-circle"></i>
              Wahyu pertama yang dikenal adalah Surah Al-'Alaq ayat 1–5.
            </div>

            <div class="takeaway-item">
              <i class="fa-solid fa-check-circle"></i>
              Al-Qur'an diturunkan secara bertahap selama masa kerasulan.
            </div>

            <div class="takeaway-item">
              <i class="fa-solid fa-check-circle"></i>
              Pada masa Nabi ﷺ, Al-Qur'an dijaga melalui hafalan dan penulisan.
            </div>

            <div class="takeaway-item">
              <i class="fa-solid fa-check-circle"></i>
              Abu Bakr menugaskan Zayd ibn Thabit untuk mengumpulkan Al-Qur'an.
            </div>

            <div class="takeaway-item">
              <i class="fa-solid fa-check-circle"></i>
              Utsman memerintahkan penyalinan dan penyebaran mushaf standar.
            </div>
          </div>

          <div class="learning-quote">
            <span class="quote-mark">“</span>
            <p>Learn. Understand. Preserve. Reflect.</p>
            <span>A JOURNEY THROUGH QUR'ANIC HISTORY</span>
          </div>
        `,
      },

      {
        title: "References",
        subtitle: "Referensi dan Bacaan Lanjutan",

        content: `
          <p>
            Referensi berikut menjadi dasar pembelajaran sejarah
            turunnya wahyu dan pengumpulan mushaf.
          </p>

          <div class="reference-group">
            <h3>
              <i class="fa-solid fa-book-quran"></i>
              Primary Source — Al-Qur'an
            </h3>
            <ul>              <li>QS. Al-'Alaq: 1–5</li>
              <li>QS. Al-Isra': 106</li>
              <li>QS. Al-Hijr: 9</li>
              <li>QS. Al-Furqan: 32</li>
            </ul>
          </div>

          <div class="reference-group">
            <h3>
              <i class="fa-solid fa-scroll"></i>
              Hadith Sources
            </h3>
            <ul>
              <li>Sahih al-Bukhari, Hadith No. 4986.</li>
              <li>Sahih al-Bukhari, Hadith No. 4987.</li>
            </ul>
          </div>

          <div class="reference-group">
            <h3>
              <i class="fa-solid fa-book"></i>
              Books & Further Reading
            </h3>
            <ul>
              <li>
                Manna' Khalil al-Qaththan,
                <em>Mabāḥith fī 'Ulūm al-Qur'ān</em>.
              </li>
              <li>
                Subhi ash-Shalih,
                <em>Mabāḥith fī 'Ulūm al-Qur'ān</em>.
              </li>
            </ul>
          </div>

          <div class="reference-group">
            <h3>
              <i class="fa-solid fa-globe"></i>
              Online Hadith References
            </h3>
            <ul>
              <li>
                <a href="https://sunnah.com/bukhari:4986"
                   target="_blank" rel="noopener noreferrer">
                  Sahih al-Bukhari 4986
                </a>
              </li>
              <li>
                <a href="https://sunnah.com/bukhari:4987"
                   target="_blank" rel="noopener noreferrer">
                  Sahih al-Bukhari 4987
                </a>
              </li>
            </ul>
          </div>

          <div class="reference-note">
            <i class="fa-solid fa-circle-info"></i>
            <p>
              Materi ini merupakan pengantar sejarah. Untuk kajian
              lebih mendalam, pelajari penjelasan ulama dan kitab
              Ulumul Qur'an dengan bimbingan guru.
            </p>
          </div>
        `,
      },
    ],

    quiz: [
      {
        question: "Di manakah Nabi Muhammad ﷺ menerima wahyu pertama?",
        options: ["Gua Tsur", "Gua Hira", "Masjid Nabawi", "Bukit Uhud"],
        answer: "b",
        explanation:
          "Wahyu pertama diterima Nabi Muhammad ﷺ ketika beliau berada di Gua Hira.",
      },
      {
        question: "Surah apakah yang ayat 1–5 dikenal sebagai wahyu pertama?",
        options: ["Al-Fatihah", "Al-Baqarah", "Al-'Alaq", "Al-Ikhlas"],
        answer: "c",
        explanation:
          "Lima ayat pertama Surah Al-'Alaq dikenal sebagai wahyu pertama.",
      },
      {
        question:
          "Siapakah yang mengusulkan pengumpulan Al-Qur'an kepada Abu Bakr?",
        options: [
          "Umar bin Al-Khattab",
          "Ali bin Abi Talib",
          "Utsman bin Affan",
          "Abdullah ibn Mas'ud",
        ],
        answer: "a",
        explanation:
          "Umar bin Al-Khattab mengusulkan pengumpulan Al-Qur'an setelah banyak penghafal gugur dalam Perang Yamamah.",
      },
      {
        question:
          "Siapakah yang ditugaskan Abu Bakr untuk mengumpulkan Al-Qur'an?",
        options: [
          "Bilal ibn Rabah",
          "Abu Hurairah",
          "Zayd ibn Thabit",
          "Khalid ibn Walid",
        ],
        answer: "c",
        explanation:
          "Zayd ibn Thabit ditugaskan karena beliau pernah menjadi penulis wahyu.",
      },
      {
        question: "Apa fokus utama pekerjaan pada masa Utsman bin Affan?",
        options: [
          "Menurunkan wahyu baru",
          "Menyalin dan menyebarkan mushaf standar",
          "Mengubah susunan surah",
          "Mengganti seluruh ayat Al-Qur'an",
        ],
        answer: "b",
        explanation:
          "Utsman memerintahkan penyalinan mushaf dan mengirimkan salinannya ke berbagai wilayah.",
      },
    ],

    reflectionQuestions: [
      "Apa pelajaran yang kamu dapatkan dari turunnya wahyu secara bertahap?",
      "Mengapa hafalan dan penulisan memiliki peran penting dalam penjagaan Al-Qur'an?",
      "Apa perbedaan pengumpulan pada masa Abu Bakr dan penyeragaman pada masa Utsman?",
      "Bagaimana cara kita ikut menjaga hubungan dengan Al-Qur'an dalam kehidupan sehari-hari?",
    ],
  };

  /* =====================================================
   TOPIC DATA — CARD 03
   RECITATION: TAJWID & RECITATION
===================================================== */

  const recitationTopic = {
    id: "tajwid-and-recitation",
    title: "Tajwid & Recitation",
    heroTitle: "Tajwid &",
    heroHighlight: "Recitation",
    description:
      "Mengenal dasar-dasar tajwid, makharijul huruf, sifat huruf, dan pentingnya belajar membaca kepada guru.",
    duration: "20–25 Minutes",
    level: "Beginner Level",
    overview:
      "Mempelajari dasar membaca Al-Qur'an dengan tartil, mengenal makharijul huruf dan sifatnya, memahami hukum tajwid dasar, serta pentingnya talaqqi dan musyafahah bersama guru.",
    overviewHeading: "Explore the <span>Recitation.</span>",
    reflectionIntro:
      "Setelah mempelajari tajwid dan adab membaca Al-Qur'an, renungkan bagian yang ingin kamu perbaiki dan latih bersama guru.",
    learn: [
      "Makna tartil dan tujuan mempelajari ilmu tajwid",
      "Pengertian makharijul huruf dan lima tempat keluarnya huruf",
      "Sifat-sifat huruf dan pengaruhnya terhadap bacaan",
      "Hukum nun sukun, tanwin, mim sukun, mad, qalqalah, dan ghunnah",
      "Pentingnya talaqqi dan musyafahah bersama guru",
    ],
    objectives: [
      "Menjelaskan makna membaca Al-Qur'an dengan tartil",
      "Mengenal lima tempat utama keluarnya huruf",
      "Membedakan makharijul huruf dan sifat huruf",
      "Mengenali beberapa hukum tajwid dasar",
      "Memahami manfaat belajar bacaan secara langsung kepada guru",
    ],
    sections: [
      {
        title: "Introduction to Qur'anic Recitation",
        subtitle: "Pengantar Membaca Al-Qur'an",
        content: `
        <p>Membaca Al-Qur'an dengan baik membutuhkan perhatian terhadap pelafalan huruf, panjang-pendek bacaan, dan kaidah tajwid. Salah satu prinsip pentingnya adalah membaca dengan tartil.</p>
        <div class="evidence-card">
          <span class="evidence-label">QS. AL-MUZZAMMIL: 4</span>
          <div class="arabic-verse">وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا</div>
          <p>"Dan bacalah Al-Qur'an itu dengan tartil (perlahan-lahan dan jelas)."</p>
          <span class="verse-lesson">Lesson: Membaca dengan tartil berarti memperhatikan kejelasan dan ketepatan bacaan.</span>
        </div>
        <div class="definition-card">
          <span class="definition-label">LEARNING FOUNDATION</span>
          <h3>Mengapa belajar tajwid?</h3>
          <p>Ilmu tajwid membantu pembaca melafalkan setiap huruf dari tempat keluarnya, menjaga sifat huruf, dan menerapkan hukum bacaan sesuai kaidah.</p>
        </div>
        <div class="knowledge-note">
          <i class="fa-solid fa-lightbulb"></i>
          <div><strong>Learning Note</strong><p>Belajar teori tajwid perlu disertai latihan membaca dan koreksi dari guru agar pelafalan dapat diperiksa secara langsung.</p></div>
        </div>
      `,
      },
      {
        title: "Foundations of Tajwid",
        subtitle: "Dasar-Dasar Ilmu Tajwid",
        content: `
        <p>Secara bahasa, tajwid berkaitan dengan makna memperbagus. Dalam istilah pembelajaran Al-Qur'an, tajwid adalah memberikan hak dan sifat setiap huruf serta menerapkan hukum bacaan sebagaimana kaidahnya.</p>
        <div class="function-grid">
          <div class="function-card"><i class="fa-solid fa-location-dot"></i><h3>Makharijul Huruf</h3><p>Tempat keluarnya huruf ketika dilafalkan.</p></div>
          <div class="function-card"><i class="fa-solid fa-wave-square"></i><h3>Sifatul Huruf</h3><p>Karakter atau sifat bunyi yang melekat pada huruf.</p></div>
          <div class="function-card"><i class="fa-solid fa-book-open"></i><h3>Ahkamul Huruf</h3><p>Hukum bacaan ketika huruf bertemu huruf lainnya.</p></div>
        </div>
        <div class="definition-card"><span class="definition-label">BASIC TOPICS</span><h3>Materi tajwid dasar</h3><p>Di antaranya hukum nun sukun dan tanwin, mim sukun, mad, qalqalah, serta ghunnah. Setiap hukum dipelajari melalui contoh dan latihan bacaan.</p></div>
        <div class="knowledge-note"><i class="fa-solid fa-circle-info"></i><div><strong>Important Note</strong><p>Ringkasan teori di halaman ini merupakan pengantar. Rincian praktik dan ukuran bacaan perlu mengikuti riwayat bacaan serta bimbingan guru.</p></div></div>
      `,
      },
      {
        title: "Makharijul Huruf",
        subtitle: "Tempat Keluarnya Huruf",
        content: `
        <p>Makharijul huruf membahas tempat keluarnya bunyi huruf hijaiyah. Dalam pembagian umum, tempat utama keluarnya huruf dijelaskan melalui lima kelompok berikut.</p>
        <div class="position-list">
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-wind"></i></span><div><h3>Al-Jawf (الْجَوْفُ)</h3><p>Rongga mulut dan tenggorokan; berkaitan dengan huruf mad ا، و، ي.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-volume-high"></i></span><div><h3>Al-Halq (الْحَلْقُ)</h3><p>Tenggorokan; mencakup ء، ه، ع، ح، غ، خ.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-language"></i></span><div><h3>Al-Lisan (اللِّسَانُ)</h3><p>Lidah; menjadi tempat keluarnya sebagian besar huruf hijaiyah.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-comment"></i></span><div><h3>Asy-Syafatan (الشَّفَتَانِ)</h3><p>Kedua bibir; berkaitan dengan huruf seperti ف، ب، م، و.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-water"></i></span><div><h3>Al-Khaisyum (الْخَيْشُومُ)</h3><p>Rongga hidung; menjadi tempat keluarnya suara ghunnah.</p></div></div>
        </div>
        <div class="definition-card"><span class="definition-label">PRONUNCIATION EXAMPLE</span><h3>Membedakan bunyi huruf</h3><p>Huruf س، ص، dan ث memiliki pelafalan yang berbeda. Perbedaan tempat keluar dan sifat huruf perlu dilatih melalui pendengaran, pengamatan, dan koreksi guru.</p></div>
        <div class="knowledge-note"><i class="fa-solid fa-lightbulb"></i><div><strong>Practice Note</strong><p>Jangan hanya mengandalkan deskripsi tertulis. Dengarkan contoh bacaan yang benar dan setorkan bacaan kepada guru untuk diperiksa.</p></div></div>
      `,
      },
      {
        title: "Sifatul Huruf",
        subtitle: "Sifat-Sifat Huruf Hijaiyah",
        content: `
        <p>Sifatul huruf adalah karakter bunyi yang menyertai huruf ketika dilafalkan. Makharijul huruf menjelaskan tempat keluarnya huruf, sedangkan sifat huruf menjelaskan karakter bunyinya.</p>
        <div class="position-list">
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-volume-low"></i></span><div><h3>Hams dan Jahr</h3><p>Hams berkaitan dengan mengalirnya napas ketika melafalkan huruf tertentu. Huruf hams yang dikenal dalam rumusan pembelajaran adalah ف ح ث ه ش خ ص س ك ت.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-wave-square"></i></span><div><h3>Syiddah, Tawassuth, dan Rakhawah</h3><p>Kelompok sifat yang menjelaskan kuat atau mengalirnya suara. Huruf syiddah dirangkum dalam أ ج د ق ط ب ك ت.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-arrow-up"></i></span><div><h3>Isti'la dan Istifal</h3><p>Isti'la berkaitan dengan terangkatnya pangkal lidah; hurufnya خ ص ض غ ط ق ظ.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-arrows-left-right"></i></span><div><h3>Itbaq dan Infitah</h3><p>Itbaq memiliki huruf ص ض ط ظ, sedangkan infitah merupakan sifat kebalikannya.</p></div></div>
        </div>
        <div class="definition-card"><span class="definition-label">OTHER LETTER ATTRIBUTES</span><h3>Sifat lainnya</h3><p>Di antaranya qalqalah, shafir, ghunnah, takrir, dan lin. Masing-masing memiliki pembahasan dan cara pelafalan yang dipelajari secara bertahap.</p></div>
        <div class="knowledge-note"><i class="fa-solid fa-circle-info"></i><div><strong>Learning Note</strong><p>Daftar sifat di atas adalah pengantar, bukan pengganti pembelajaran rinci. Contoh pengucapan perlu didengar dan dikoreksi langsung.</p></div></div>
      `,
      },
      {
        title: "Basic Tajwid Rules",
        subtitle: "Hukum-Hukum Tajwid Dasar",
        content: `
        <p>Beberapa hukum tajwid dasar berkaitan dengan pertemuan huruf dan cara membaca rangkaian lafaz. Berikut ringkasan pengantar yang perlu dilatih bersama guru.</p>
        <div class="definition-card"><span class="definition-label">NUN SUKUN & TANWIN</span><h3>Izhar, Idgham, Iqlab, dan Ikhfa</h3><p><strong>Izhar:</strong> ء ه ع ح غ خ. <strong>Idgham dengan ghunnah:</strong> ي ن م و. <strong>Idgham tanpa ghunnah:</strong> ل ر. <strong>Iqlab:</strong> ب. <strong>Ikhfa:</strong> lima belas huruf lainnya.</p><p>Contoh: مِنْ هَادٍ (Izhar), مَنْ يَعْمَلْ (Idgham), مِنْ بَعْدِ (Iqlab), dan مِنْ قَبْلِ (Ikhfa).</p></div>
        <div class="definition-card"><span class="definition-label">MIM SUKUN</span><h3>Ikhfa Syafawi, Idgham Mimi, Izhar Syafawi</h3><p>Ikhfa Syafawi terjadi sebelum ب; Idgham Mimi ketika mim sukun bertemu م; Izhar Syafawi ketika bertemu huruf selain ب dan م. Contoh: تَرْمِيهِمْ بِحِجَارَةٍ، لَهُمْ مَا، أَنْعَمْتَ عَلَيْهِمْ.</p></div>
        <div class="function-grid">
          <div class="function-card"><i class="fa-solid fa-arrows-left-right"></i><h3>Mad</h3><p>Mad Thabi'i: 2 harakat. Mad Wajib Muttashil dan Jaiz Munfashil: umumnya 4–5 harakat. Mad 'Aridh Lissukun: 2, 4, atau 6 harakat sesuai riwayat dan metode talaqqi.</p></div>
          <div class="function-card"><i class="fa-solid fa-wave-square"></i><h3>Qalqalah</h3><p>Huruf ق ط ب ج د ketika sukun, dikenal melalui rumusan قُطْبُ جَدٍّ.</p></div>
          <div class="function-card"><i class="fa-solid fa-volume-high"></i><h3>Ghunnah</h3><p>Dengung pada نّ dan مّ yang dalam pengantar tajwid umumnya dipelajari dengan ukuran sekitar dua harakat.</p></div>
        </div>
        <div class="knowledge-note"><i class="fa-solid fa-circle-info"></i><div><strong>Important Note</strong><p>Ukuran panjang bacaan dapat berbeda menurut riwayat qira'ah dan metode pengajaran. Ikuti contoh bacaan guru yang menjadi rujukan talaqqi.</p></div></div>
      `,
      },
      {
        title: "Learning with a Qualified Teacher",
        subtitle: "Belajar melalui Talaqqi dan Musyafahah",
        content: `
        <p>Belajar membaca Al-Qur'an tidak cukup hanya dengan membaca uraian teori. Pelafalan huruf dan penerapan hukum tajwid perlu didengar serta diperiksa secara langsung.</p>
        <div class="position-list">
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-chalkboard-user"></i></span><div><h3>Talaqqi</h3><p>Menerima bacaan dari guru dan membacakan kembali di hadapan guru agar dapat diperiksa serta dikoreksi.</p></div></div>
          <div class="position-item"><span class="position-icon"><i class="fa-solid fa-ear-listen"></i></span><div><h3>Musyafahah</h3><p>Belajar dengan memperhatikan gerak dan cara guru melafalkan huruf, kemudian menirukan bacaan dengan bimbingan.</p></div></div>
        </div>
        <div class="function-grid">
          <div class="function-card"><i class="fa-solid fa-check-circle"></i><h3>Koreksi Makhraj</h3><p>Guru membantu memeriksa tempat keluarnya huruf.</p></div>
          <div class="function-card"><i class="fa-solid fa-book-open"></i><h3>Penerapan Tajwid</h3><p>Hukum bacaan dipraktikkan dalam ayat yang dibaca.</p></div>
          <div class="function-card"><i class="fa-solid fa-comments"></i><h3>Tanya Jawab</h3><p>Kesulitan bacaan dapat ditanyakan dan diperbaiki bertahap.</p></div>
        </div>
        <div class="knowledge-note"><i class="fa-solid fa-lightbulb"></i><div><strong>Suggested Learning Routine</strong><p>Dengarkan contoh, amati pelafalan guru, ulangi bacaan, terima koreksi, lalu berlatih secara rutin.</p></div></div>
      `,
      },
      {
        title: "Key Takeaways",
        subtitle: "Ringkasan Pembelajaran",
        content: `
        <p>Berikut inti pembelajaran mengenai tajwid dan bacaan Al-Qur'an.</p>
        <div class="takeaway-card">
          <div class="takeaway-item"><i class="fa-solid fa-check-circle"></i>Membaca Al-Qur'an dianjurkan dengan tartil sebagaimana QS. Al-Muzzammil: 4.</div>
          <div class="takeaway-item"><i class="fa-solid fa-check-circle"></i>Tajwid membantu menjaga ketepatan pelafalan dan hukum bacaan.</div>
          <div class="takeaway-item"><i class="fa-solid fa-check-circle"></i>Makharijul huruf membahas tempat keluarnya huruf.</div>
          <div class="takeaway-item"><i class="fa-solid fa-check-circle"></i>Sifatul huruf membahas karakter bunyi huruf.</div>
          <div class="takeaway-item"><i class="fa-solid fa-check-circle"></i>Hukum nun sukun, tanwin, mim sukun, mad, qalqalah, dan ghunnah dipelajari melalui contoh.</div>
          <div class="takeaway-item"><i class="fa-solid fa-check-circle"></i>Talaqqi dan musyafahah membantu murid menerima koreksi langsung dari guru.</div>
        </div>
        <div class="learning-quote"><span class="quote-mark">“</span><p>Listen. Learn. Recite. Improve.</p><span>A JOURNEY THROUGH QUR'ANIC RECITATION</span></div>
      `,
      },
      {
        title: "References",
        subtitle: "Referensi dan Bacaan Lanjutan",
        content: `
        <p>Referensi berikut menjadi pengantar untuk mempelajari tajwid lebih lanjut bersama guru.</p>
        <div class="reference-group"><h3><i class="fa-solid fa-book-quran"></i>Primary Source — Al-Qur'an</h3><ul><li>QS. Al-Muzzammil: 4.</li></ul></div>
        <div class="reference-group"><h3><i class="fa-solid fa-book"></i>Classical Tajwid Texts</h3><ul><li>Ibn al-Jazari, <em>Al-Muqaddimah Al-Jazariyyah</em>.</li><li>Sulaiman al-Jamzuri, <em>Tuhfatul Athfal</em>.</li><li>Ibn al-Jazari, <em>An-Nashr fi al-Qira'at al-'Ashr</em>.</li></ul></div>
        <div class="reference-group"><h3><i class="fa-solid fa-scroll"></i>Further Study</h3><ul><li>Manna' al-Qattan, <em>Mabahith fi 'Ulum al-Qur'an</em>.</li><li>Bimbingan guru Al-Qur'an yang kompeten melalui talaqqi dan musyafahah.</li></ul></div>
        <div class="reference-note"><i class="fa-solid fa-circle-info"></i><p>Materi ini adalah pengantar. Untuk ketepatan makhraj, sifat huruf, dan praktik hukum bacaan, belajar langsung kepada guru tetap menjadi bagian penting.</p></div>
      `,
      },
    ],
    quiz: [
      {
        question: "Apa makna tartil dalam membaca Al-Qur'an?",
        options: [
          "Membaca secepat mungkin",
          "Membaca dengan perlahan dan jelas sesuai kaidah",
          "Membaca tanpa memperhatikan huruf",
          "Membaca hanya dalam hati",
        ],
        answer: "b",
        explanation:
          "QS. Al-Muzzammil: 4 memerintahkan membaca Al-Qur'an dengan tartil, yaitu bacaan yang teratur dan jelas.",
      },
      {
        question: "Apa yang dibahas dalam makharijul huruf?",
        options: [
          "Tempat keluarnya huruf",
          "Jumlah ayat dalam surah",
          "Sejarah penulisan mushaf",
          "Terjemahan ayat",
        ],
        answer: "a",
        explanation:
          "Makharijul huruf membahas tempat keluarnya bunyi huruf ketika dilafalkan.",
      },
      {
        question: "Manakah yang termasuk lima tempat utama keluarnya huruf?",
        options: [
          "Madinah, Makkah, Thaif, Yaman, Syam",
          "Fathah, kasrah, dammah, sukun, tanwin",
          "Al-Jawf, Al-Halq, Al-Lisan, Asy-Syafatan, Al-Khaisyum",
          "Izhar, Idgham, Iqlab, Ikhfa, Qalqalah",
        ],
        answer: "c",
        explanation:
          "Lima tempat utama tersebut adalah rongga, tenggorokan, lidah, kedua bibir, dan rongga hidung.",
      },

      {
        question: "Apa perbedaan makharijul huruf dan sifatul huruf?",
        options: [
          "Keduanya sama persis",
          "Makharij membahas arti ayat, sifat membahas sejarah",
          "Makharij membahas panjang surah, sifat membahas jumlah ayat",
          "Makharij membahas tempat keluar huruf, sifat membahas karakter bunyinya",
        ],
        answer: "d",
        explanation:
          "Makharij menjelaskan tempat keluarnya huruf, sedangkan sifat menjelaskan karakter bunyi yang menyertainya.",
      },
      {
        question:
          "Mengapa belajar membaca Al-Qur'an melalui talaqqi dan musyafahah penting?",
        options: [
          "Agar tidak perlu berlatih",
          "Agar bacaan dapat didengar, diamati, dan dikoreksi guru",
          "Agar dapat melewati semua hukum tajwid",
          "Agar tidak perlu mempelajari makhraj",
        ],
        answer: "b",
        explanation:
          "Talaqqi dan musyafahah memungkinkan murid menerima contoh dan koreksi bacaan secara langsung dari guru.",
      },
    ],
    reflectionQuestions: [
      "Bagian mana dari dasar tajwid yang ingin kamu pelajari lebih dalam?",
      "Mengapa makharijul huruf dan sifat huruf perlu dipelajari bersama?",
      "Apa manfaat menerima koreksi bacaan secara langsung dari guru?",
      "Bagaimana kamu dapat membangun kebiasaan latihan membaca Al-Qur'an dengan tartil?",
    ],
  };

  /* =====================================================
   TOPIC DATA — CARD 04
   UNDERSTANDING: TAFSIR & MEANING
===================================================== */

  const understandingTopic = {
    id: "understanding-tafsir-and-meaning",

    title: "Tafsir & Meaning",

    heroTitle: "Understanding the",
    heroHighlight: "Qur'an",

    description:
      "Memahami makna ayat melalui tafsir yang bersumber dan memperhatikan konteks serta penjelasan ulama.",

    duration: "20–25 Minutes",
    level: "Beginner Level",

    overview:
      "Mempelajari pengertian tafsir, konteks ayat, sumber dan metode penafsiran, serta cara memahami pesan Al-Qur'an melalui penjelasan para ulama.",

    overviewHeading: "Explore the <span>Meaning.</span>",

    reflectionIntro:
      "Setelah mempelajari tafsir dan konteks ayat, renungkan bagaimana penjelasan para ulama membantumu memahami pesan Al-Qur'an.",

    learn: [
      "Pengertian tafsir dan perbedaannya dengan terjemah",
      "Pentingnya memahami konteks ayat",
      "Sumber-sumber penafsiran Al-Qur'an",
      "Metode tafsir bil Ma'tsur dan bil Ra'yi",
      "Mengenal kitab tafsir para ulama",
    ],

    objectives: [
      "Menjelaskan pengertian tafsir",
      "Membedakan tafsir dan terjemah",
      "Memahami pentingnya konteks ayat",
      "Mengenal sumber dan metode tafsir",
      "Memahami manfaat mempelajari kitab tafsir",
    ],

    sections: [
      {
        title: "What Is Tafsir?",
        subtitle: "Mengenal Pengertian Tafsir",

        content: `
        <p>
          Tafsir adalah ilmu yang membahas penjelasan makna
          ayat-ayat Al-Qur'an berdasarkan sumber dan kaidah
          keilmuan yang dapat dipertanggungjawabkan.
        </p>

        <div class="definition-card">
          <span class="definition-label">DEFINITION</span>
          <h3>Tafsir Al-Qur'an</h3>
          <p>
            Tafsir membantu memahami kandungan ayat,
            maksud pembahasan, serta petunjuk yang terdapat
            di dalam Al-Qur'an melalui penjelasan para ulama.
          </p>
        </div>

        <div class="position-list">
          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-language"></i>
            </span>
            <div>
              <h3>Terjemah</h3>
              <p>
                Mengalihkan makna ayat ke dalam bahasa lain
                agar dapat dipahami oleh pembaca.
              </p>
            </div>
          </div>

          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-book-open"></i>
            </span>
            <div>
              <h3>Tafsir</h3>
              <p>
                Memberikan penjelasan lebih luas mengenai
                makna dan kandungan ayat berdasarkan
                sumber serta kaidah keilmuan.
              </p>
            </div>
          </div>
        </div>

        <div class="knowledge-note">
          <i class="fa-solid fa-lightbulb"></i>
          <div>
            <strong>Knowledge Note</strong>
            <p>
              Terjemah membantu memahami arti secara umum,
              sedangkan tafsir memberikan penjelasan
              yang lebih mendalam.
            </p>
          </div>
        </div>
      `,
      },

      {
        title: "Why Understanding Context Matters",
        subtitle: "Pentingnya Memahami Konteks Ayat",

        content: `
        <p>
          Memahami ayat Al-Qur'an tidak cukup hanya dengan
          membaca terjemahannya. Konteks pembahasan dan
          penjelasan para ulama juga perlu diperhatikan.
        </p>

        <div class="function-grid">
          <div class="function-card">
            <i class="fa-solid fa-book"></i>
            <h3>Konteks Surah</h3>
            <p>
              Memperhatikan tema dan hubungan ayat
              dengan pembahasan dalam surah.
            </p>
          </div>

          <div class="function-card">
            <i class="fa-solid fa-clock"></i>
            <h3>Asbabun Nuzul</h3>
            <p>
              Mempelajari latar belakang turunnya ayat
              apabila terdapat riwayat yang dapat dipercaya.
            </p>
          </div>

          <div class="function-card">
            <i class="fa-solid fa-map"></i>
            <h3>Makki dan Madani</h3>
            <p>
              Mengenal klasifikasi ayat atau surah
              berdasarkan periode sebelum dan sesudah hijrah.
            </p>
          </div>
        </div>

        <div class="knowledge-note">
          <i class="fa-solid fa-circle-info"></i>
          <div>
            <strong>Important Note</strong>
            <p>
              Tidak semua ayat memiliki riwayat sebab turun
              yang khusus. Karena itu, asbabun nuzul
              harus dipelajari berdasarkan riwayat yang terpercaya.
            </p>
          </div>
        </div>
      `,
      },

      {
        title: "Sources of Tafsir",
        subtitle: "Sumber-Sumber Penafsiran",

        content: `
        <p>
          Penafsiran Al-Qur'an memiliki sumber-sumber
          yang menjadi landasan dalam menjelaskan
          makna ayat.
        </p>

        <div class="position-list">
          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-book-quran"></i>
            </span>
            <div>
              <h3>Al-Qur'an dengan Al-Qur'an</h3>
              <p>
                Penjelasan suatu ayat dapat ditemukan
                melalui ayat lain yang berkaitan.
              </p>
            </div>
          </div>

          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-scroll"></i>
            </span>
            <div>
              <h3>Sunnah Rasulullah ﷺ</h3>
              <p>
                Hadis Nabi ﷺ menjadi sumber penjelasan
                terhadap ayat-ayat Al-Qur'an.
              </p>
            </div>
          </div>

          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-users"></i>
            </span>
            <div>
              <h3>Penjelasan Para Sahabat</h3>
              <p>
                Keterangan para sahabat memiliki peran
                penting dalam memahami ayat.
              </p>
            </div>
          </div>

          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-language"></i>
            </span>
            <div>
              <h3>Bahasa Arab dan Penjelasan Ulama</h3>
              <p>
                Kaidah bahasa Arab dan karya para ulama
                membantu menjelaskan makna ayat.
              </p>
            </div>
          </div>
        </div>
      `,
      },

      {
        title: "Methods of Tafsir",
        subtitle: "Metode Penafsiran Al-Qur'an",

        content: `
        <p>
          Dalam kajian Ulumul Qur'an, terdapat pembahasan
          mengenai metode penafsiran yang dikenal,
          di antaranya tafsir bil Ma'tsur dan tafsir bil Ra'yi.
        </p>

        <div class="definition-card">
          <span class="definition-label">METHOD 01</span>
          <h3>Tafsir bil Ma'tsur</h3>
          <p>
            Penafsiran yang bertumpu pada riwayat,
            seperti penjelasan Al-Qur'an dengan Al-Qur'an,
            Sunnah, dan keterangan para sahabat.
          </p>
        </div>

        <div class="definition-card">
          <span class="definition-label">METHOD 02</span>
          <h3>Tafsir bil Ra'yi</h3>
          <p>
            Penafsiran melalui ijtihad keilmuan
            dengan memperhatikan kaidah dan persyaratan
            yang telah ditetapkan oleh para ulama.
          </p>
        </div>

        <div class="knowledge-note">
          <i class="fa-solid fa-circle-info"></i>
          <div>
            <strong>Important Note</strong>
            <p>
              Tafsir bil Ra'yi bukan penafsiran berdasarkan
              pendapat pribadi tanpa dasar. Penafsiran
              harus mengikuti prinsip dan kaidah keilmuan.
            </p>
          </div>
        </div>
      `,
      },

      {
        title: "Understanding the Meaning of Verses",
        subtitle: "Memahami Pesan dalam Ayat",

        content: `
        <p>
          Salah satu contoh pembelajaran tafsir adalah
          memahami pesan yang terkandung dalam
          Surah Al-Hujurat ayat 13.
        </p>

        <div class="evidence-card">
          <span class="evidence-label">QS. AL-HUJURAT: 13</span>

          <div class="arabic-verse">
            يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ
            وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا
            إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ
          </div>

          <p>
            "Wahai manusia! Sungguh, Kami telah menciptakan
            kamu dari seorang laki-laki dan seorang perempuan,
            kemudian Kami jadikan kamu berbangsa-bangsa
            dan bersuku-suku agar kamu saling mengenal.
            Sesungguhnya yang paling mulia di antara kamu
            di sisi Allah ialah orang yang paling bertakwa."
          </p>

          <span class="verse-lesson">
            Lesson: Kemuliaan di sisi Allah berkaitan
            dengan ketakwaan, bukan asal-usul atau kelompok.
          </span>
        </div>

        <div class="takeaway-card">
          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Manusia berasal dari asal penciptaan yang sama.
          </div>

          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Perbedaan bangsa dan suku menjadi sarana
            untuk saling mengenal.
          </div>

          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Ketakwaan menjadi ukuran kemuliaan di sisi Allah.
          </div>
        </div>
      `,
      },

      {
        title: "Learning from Tafsir Books",
        subtitle: "Mengenal Kitab Tafsir Para Ulama",

        content: `
        <p>
          Mempelajari kitab tafsir membantu kita memahami
          penjelasan ayat melalui ilmu, metode,
          dan pembahasan yang disusun oleh para ulama.
        </p>

        <div class="position-list">
          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-book"></i>
            </span>
            <div>
              <h3>Tafsir Ibn Kathir</h3>
              <p>
                Karya Isma'il ibn Kathir yang dikenal
                dengan judul
                <em>Tafsir al-Qur'an al-'Azim</em>.
              </p>
            </div>
          </div>

          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-book-open"></i>
            </span>
            <div>
              <h3>Tafsir ath-Tabari</h3>
              <p>
                Karya Muhammad ibn Jarir ath-Tabari
                yang berjudul
                <em>Jami' al-Bayan 'an Ta'wil Ay al-Qur'an</em>.
              </p>
            </div>
          </div>

          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-book"></i>
            </span>
            <div>
              <h3>Tafsir as-Sa'di</h3>
              <p>
                Karya Abdurrahman as-Sa'di yang berjudul
                <em>Taysir al-Karim ar-Rahman</em>.
              </p>
            </div>
          </div>

          <div class="position-item">
            <span class="position-icon">
              <i class="fa-solid fa-book-reader"></i>
            </span>
            <div>
              <h3>Tafsir Kemenag RI</h3>
              <p>
                <em>Al-Qur'an dan Tafsirnya</em>
                yang diterbitkan oleh Kementerian Agama
                Republik Indonesia.
              </p>
            </div>
          </div>
        </div>

        <div class="knowledge-note">
          <i class="fa-solid fa-lightbulb"></i>
          <div>
            <strong>Learning Note</strong>
            <p>
              Pelajari kitab tafsir dengan bimbingan guru
              agar penjelasan dan konteks ayat dapat
              dipahami secara tepat.
            </p>
          </div>
        </div>
      `,
      },

      {
        title: "Key Takeaways",
        subtitle: "Ringkasan Pembelajaran",

        content: `
        <p>
          Berikut beberapa poin penting dari pembelajaran
          mengenai tafsir dan pemahaman makna Al-Qur'an.
        </p>

        <div class="takeaway-card">
          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Tafsir menjelaskan makna dan kandungan ayat
            berdasarkan sumber dan kaidah keilmuan.
          </div>

          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Terjemah dan tafsir memiliki fungsi
            yang berbeda.
          </div>

          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Konteks ayat membantu memahami pembahasannya.
          </div>

          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Al-Qur'an, Sunnah, dan penjelasan sahabat
            termasuk sumber penting tafsir.
          </div>

          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Tafsir bil Ma'tsur dan bil Ra'yi
            memiliki pembahasan metode yang berbeda.
          </div>

          <div class="takeaway-item">
            <i class="fa-solid fa-check-circle"></i>
            Kitab tafsir ulama menjadi sarana
            mempelajari makna Al-Qur'an.
          </div>
        </div>

        <div class="learning-quote">
          <span class="quote-mark">“</span>
          <p>Read. Understand. Reflect. Learn.</p>
          <span>A JOURNEY THROUGH QUR'ANIC MEANING</span>
        </div>
      `,
      },

      {
        title: "References",
        subtitle: "Referensi dan Bacaan Lanjutan",

        content: `
        <p>
          Referensi berikut dapat digunakan untuk
          memperdalam pembelajaran tafsir dan Ulumul Qur'an.
        </p>

        <div class="reference-group">
          <h3>
            <i class="fa-solid fa-book-quran"></i>
            Primary Source — Al-Qur'an
          </h3>
          <ul>
            <li>QS. Al-Hujurat: 13</li>
            <li>Ayat-ayat Al-Qur'an terkait pembahasan tafsir.</li>
          </ul>
        </div>

        <div class="reference-group">
          <h3>
            <i class="fa-solid fa-book"></i>
            Classical Tafsir Books
          </h3>
          <ul>
            <li>Ibn Kathir, <em>Tafsir al-Qur'an al-'Azim</em>.</li>
            <li>
              Ath-Tabari,
              <em>Jami' al-Bayan 'an Ta'wil Ay al-Qur'an</em>.
            </li>
            <li>
              As-Sa'di,
              <em>Taysir al-Karim ar-Rahman</em>.
            </li>
          </ul>
        </div>

        <div class="reference-group">
          <h3>
            <i class="fa-solid fa-scroll"></i>
            Ulumul Qur'an
          </h3>
          <ul>
            <li>
              Manna' al-Qaththan,
              <em>Mabahith fi 'Ulum al-Qur'an</em>.
            </li>
            <li>
              Kementerian Agama RI,
              <em>Al-Qur'an dan Tafsirnya</em>.
            </li>
          </ul>
        </div>

        <div class="reference-note">
          <i class="fa-solid fa-circle-info"></i>
          <p>
            Materi ini merupakan pengantar pembelajaran
            tafsir. Untuk pembahasan lebih mendalam,
            pelajari kitab-kitab tafsir dengan bimbingan
            guru yang memiliki kompetensi di bidangnya.
          </p>
        </div>
      `,
      },
    ],

    quiz: [
      {
        question: "Apa yang dimaksud dengan tafsir Al-Qur'an?",
        options: [
          "Membaca Al-Qur'an dengan suara keras",
          "Menjelaskan makna dan kandungan ayat berdasarkan sumber serta kaidah keilmuan",
          "Menghafalkan seluruh ayat Al-Qur'an",
          "Mengubah susunan ayat Al-Qur'an",
        ],
        answer: "b",
        explanation:
          "Tafsir merupakan penjelasan makna dan kandungan ayat berdasarkan sumber serta kaidah keilmuan.",
      },

      {
        question: "Apa perbedaan utama antara terjemah dan tafsir?",
        options: [
          "Keduanya tidak memiliki perbedaan",
          "Terjemah hanya digunakan oleh ulama",
          "Terjemah mengalihkan makna ke bahasa lain, sedangkan tafsir memberikan penjelasan lebih luas",
          "Tafsir hanya membahas cara membaca",
        ],
        answer: "c",
        explanation:
          "Terjemah mengalihkan makna ke bahasa lain, sedangkan tafsir menjelaskan makna dan kandungan ayat secara lebih luas.",
      },

      {
        question: "Apa yang dimaksud dengan Asbabun Nuzul?",
        options: [
          "Latar belakang turunnya ayat berdasarkan riwayat yang dapat dipercaya",
          "Cara menghafalkan Al-Qur'an",
          "Urutan surah dalam mushaf",
          "Ilmu mengenai panjang pendek bacaan",
        ],
        answer: "a",
        explanation:
          "Asbabun Nuzul membahas latar belakang atau sebab turunnya ayat berdasarkan riwayat yang dapat dipercaya.",
      },

      {
        question: "Manakah yang termasuk sumber penting dalam tafsir?",
        options: [
          "Pendapat pribadi tanpa dasar",
          "Cerita yang tidak memiliki sumber",
          "Perkiraan tanpa kaidah keilmuan",
          "Al-Qur'an, Sunnah, penjelasan sahabat, bahasa Arab, dan penjelasan ulama",
        ],
        answer: "d",
        explanation:
          "Penafsiran Al-Qur'an memiliki landasan sumber, termasuk Al-Qur'an, Sunnah, keterangan sahabat, bahasa Arab, dan penjelasan ulama.",
      },

      {
        question: "Mengapa kita perlu mempelajari kitab-kitab tafsir?",
        options: [
          "Agar dapat menafsirkan ayat sesuka hati",
          "Agar memahami penjelasan ayat melalui ilmu dan metode para ulama",
          "Agar tidak perlu mempelajari bahasa Arab",
          "Agar dapat mengubah makna ayat",
        ],
        answer: "b",
        explanation:
          "Kitab tafsir membantu memahami penjelasan ayat melalui ilmu, sumber, dan metode yang disusun oleh para ulama.",
      },
    ],

    reflectionQuestions: [
      "Apa perbedaan antara terjemah dan tafsir yang kamu pahami?",
      "Mengapa konteks ayat penting dalam mempelajari Al-Qur'an?",
      "Apa manfaat mempelajari tafsir melalui penjelasan para ulama?",
      "Bagaimana kamu dapat menerapkan pelajaran dari ayat yang telah dipelajari?",
    ],
  };

  /* =========================================================
     TOPIC DATA — CARD 05
     REFLECTION & TADABBUR
  ========================================================= */

  const reflectionTopic = {
    id: "reflection-and-tadabbur",

    title: "Reflection & Tadabbur",

    heroTitle: "Reflecting on the",
    heroHighlight: "Qur'an",

    description:
      "Merenungkan pesan ayat, mengambil pelajaran, dan menghubungkan nilai Al-Qur'an dengan kehidupan.",

    duration: "20–25 Minutes",
    level: "Beginner Level",

    overview:
      "Mempelajari pengertian tadabbur, merenungkan pesan ayat, mengambil hikmah, serta membiasakan diri mengamalkan petunjuk Al-Qur'an dalam kehidupan sehari-hari.",

    overviewHeading: "Reflect. Understand. <span>Apply.</span>",

    reflectionIntro:
      "Setelah mempelajari tadabbur, renungkan bagaimana pesan Al-Qur'an dapat membimbing sikap, pilihan, dan kebiasaan dalam kehidupan sehari-hari.",

    learn: [
      "Pengertian dan tujuan tadabbur Al-Qur'an",
      "Perbedaan tadabbur dan tafsir",
      "Merenungkan pesan dan kandungan ayat",
      "Mengambil pelajaran serta hikmah dari ayat",
      "Menghubungkan nilai Al-Qur'an dengan kehidupan",
      "Membiasakan tadabbur dengan bimbingan ilmu",
    ],

    objectives: [
      "Menjelaskan pengertian tadabbur",
      "Memahami perbedaan tadabbur dan tafsir",
      "Mengenali pesan dan pelajaran dari ayat",
      "Menghubungkan nilai Al-Qur'an dengan kehidupan",
      "Membangun kebiasaan membaca dan merenungkan Al-Qur'an",
    ],

    sections: [
      {
        title: "Introduction to Tadabbur",
        subtitle: "Mengenal Tadabbur",

        content: `
          <p>
            Al-Qur'an bukan hanya untuk dibaca dan dihafalkan,
            tetapi juga untuk dipahami, direnungkan, dan dijadikan
            petunjuk dalam menjalani kehidupan.
          </p>

          <div class="definition-card">
            <span class="definition-label">INTRODUCTION</span>
            <h3>Apa Itu Tadabbur?</h3>
            <p>
              Tadabbur adalah kegiatan merenungkan ayat-ayat
              Al-Qur'an untuk memahami pesan, pelajaran,
              dan petunjuk yang terkandung di dalamnya
              berdasarkan pemahaman yang benar.
            </p>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Knowledge Note</strong>
              <p>
                Membaca Al-Qur'an merupakan awal yang baik.
                Tadabbur membantu kita memperhatikan pesan
                ayat dan berusaha menjadikan petunjuknya
                sebagai bagian dari kehidupan.
              </p>
            </div>
          </div>

          <p>
            Allah mengajak manusia untuk memperhatikan dan
            merenungkan Al-Qur'an. Hal ini menunjukkan bahwa
            memahami petunjuk-Nya merupakan bagian penting
            dalam berinteraksi dengan kitab suci.
          </p>
        `,
      },

      {
        title: "The Meaning of Tadabbur",
        subtitle: "Pengertian dan Hakikat Tadabbur",

        content: `
          <p>
            Tadabbur berkaitan dengan usaha memperhatikan
            kandungan ayat, memahami pesan yang dijelaskan
            dalam tafsir, serta mengambil pelajaran darinya.
          </p>

          <div class="definition-card">
            <span class="definition-label">QUR'ANIC FOUNDATION</span>
            <h3>QS. Sad: 29</h3>
            <p>
              Allah menjelaskan bahwa Al-Qur'an merupakan
              kitab yang diberkahi agar manusia memperhatikan
              ayat-ayatnya dan orang-orang yang berakal
              dapat mengambil pelajaran.
            </p>
          </div>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3>Tadabbur</h3>
                <p>
                  Merenungkan pesan dan pelajaran ayat
                  untuk memperkuat pemahaman serta
                  memperbaiki kehidupan.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </span>
              <div>
                <h3>Tafsir</h3>
                <p>
                  Ilmu yang menjelaskan makna dan kandungan
                  ayat berdasarkan sumber serta kaidah
                  keilmuan yang dapat dipertanggungjawabkan.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Important Note</strong>
              <p>
                Tadabbur bukan berarti menafsirkan ayat
                berdasarkan pendapat pribadi tanpa ilmu.
                Untuk memahami makna ayat, rujuklah tafsir
                yang terpercaya dan bimbingan guru yang
                memiliki kompetensi.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "Reflecting on Qur'anic Verses",
        subtitle: "Merenungkan Pesan Ayat",

        content: `
          <p>
            Merenungkan ayat Al-Qur'an dapat dimulai dengan
            membaca ayat secara perlahan, memahami terjemah,
            mempelajari penjelasan tafsir, kemudian
            memperhatikan pesan yang dapat diambil.
          </p>

          <div class="definition-card">
            <span class="definition-label">QUR'ANIC FOUNDATION</span>
            <h3>QS. Muhammad: 24</h3>
            <p>
              Ayat ini mengajak manusia untuk memperhatikan
              Al-Qur'an dengan sungguh-sungguh dan tidak
              berpaling dari petunjuknya.
            </p>
          </div>

          <h3>Hal yang Dapat Direnungkan</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-message"></i>
              </span>
              <div>
                <h3>Pesan Ayat</h3>
                <p>
                  Apa pesan utama yang dijelaskan dalam
                  ayat berdasarkan tafsir yang dipelajari?
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-brain"></i>
              </span>
              <div>
                <h3>Pelajaran</h3>
                <p>
                  Nilai atau pelajaran apa yang dapat
                  dipahami dari penjelasan ayat tersebut?
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-compass"></i>
              </span>
              <div>
                <h3>Petunjuk</h3>
                <p>
                  Bagaimana petunjuk ayat dapat membimbing
                  sikap dan perilaku seorang muslim?
                </p>
              </div>
            </div>
          </div>
        `,
      },

      {
        title: "Lessons and Wisdom",
        subtitle: "Mengambil Pelajaran dan Hikmah",

        content: `
          <p>
            Salah satu tujuan mempelajari Al-Qur'an adalah
            mengambil pelajaran dari petunjuk Allah.
            Pelajaran tersebut membantu seorang muslim
            memperbaiki pemahaman, sikap, dan amalnya.
          </p>

          <div class="definition-card">
            <span class="definition-label">QUR'ANIC FOUNDATION</span>
            <h3>QS. Al-Hashr: 18</h3>
            <p>
              Ayat ini mengingatkan orang-orang beriman
              agar bertakwa kepada Allah dan memperhatikan
              apa yang telah dipersiapkan untuk hari esok.
            </p>
          </div>

          <h3>Bentuk Pelajaran dari Al-Qur'an</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
              <div>
                <h3>Memperbaiki Hati</h3>
                <p>
                  Menguatkan keimanan, rasa syukur,
                  kesabaran, dan ketakwaan kepada Allah.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-scale-balanced"></i>
              </span>
              <div>
                <h3>Memperbaiki Sikap</h3>
                <p>
                  Belajar bersikap jujur, adil, amanah,
                  dan menjaga hubungan dengan sesama.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-hand-holding-heart"></i>
              </span>
              <div>
                <h3>Memperbaiki Amal</h3>
                <p>
                  Berusaha menjalankan kebaikan dan
                  menjauhi larangan Allah sesuai
                  petunjuk syariat.
                </p>
              </div>
            </div>
          </div>
        `,
      },

      {
        title: "Connecting the Qur'an to Life",
        subtitle: "Menghubungkan Al-Qur'an dengan Kehidupan",

        content: `
          <p>
            Petunjuk Al-Qur'an memiliki hubungan erat
            dengan kehidupan seorang muslim. Nilai-nilai
            yang dipelajari hendaknya mendorong kita
            untuk memperbaiki perilaku sehari-hari.
          </p>

          <div class="definition-card">
            <span class="definition-label">QUR'ANIC FOUNDATION</span>
            <h3>QS. Al-Isra': 9</h3>
            <p>
              Allah menjelaskan bahwa Al-Qur'an memberikan
              petunjuk kepada jalan yang paling lurus
              dan memberikan kabar gembira kepada orang
              beriman yang mengerjakan amal saleh.
            </p>
          </div>

          <h3>Contoh Penerapan dalam Kehidupan</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-users"></i>
              </span>
              <div>
                <h3>Hubungan dengan Sesama</h3>
                <p>
                  Menjaga adab, menghormati orang lain,
                  berkata baik, dan tidak menyakiti sesama.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-clock"></i>
              </span>
              <div>
                <h3>Mengatur Waktu</h3>
                <p>
                  Menggunakan waktu dengan baik,
                  menjaga ibadah, dan menghindari
                  kegiatan yang tidak bermanfaat.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-shield-heart"></i>
              </span>
              <div>
                <h3>Menjaga Diri</h3>
                <p>
                  Berusaha menjaga ucapan, perilaku,
                  dan pilihan agar sesuai dengan
                  tuntunan agama.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Knowledge Note</strong>
              <p>
                Tadabbur tidak berhenti pada pemikiran.
                Pelajaran yang benar hendaknya mendorong
                seseorang untuk memperbaiki amalnya.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "Practicing Tadabbur",
        subtitle: "Membiasakan Tadabbur",

        content: `
          <p>
            Tadabbur dapat dibiasakan melalui proses
            belajar yang teratur. Tidak harus dimulai
            dengan banyak ayat, tetapi dapat dilakukan
            sedikit demi sedikit dengan pemahaman
            yang benar.
          </p>

          <h3>Langkah Membiasakan Tadabbur</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-quran"></i>
              </span>
              <div>
                <h3>1. Membaca Ayat</h3>
                <p>
                  Membaca Al-Qur'an dengan memperhatikan
                  adab dan kaidah bacaan yang benar.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-language"></i>
              </span>
              <div>
                <h3>2. Memahami Terjemah</h3>
                <p>
                  Membaca terjemah untuk memperoleh
                  gambaran umum tentang kandungan ayat.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open-reader"></i>
              </span>
              <div>
                <h3>3. Mempelajari Tafsir</h3>
                <p>
                  Merujuk kitab atau sumber tafsir
                  terpercaya dan bertanya kepada guru
                  ketika menemukan hal yang belum dipahami.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-pen"></i>
              </span>
              <div>
                <h3>4. Mencatat Pelajaran</h3>
                <p>
                  Menuliskan pesan dan pelajaran yang
                  dipahami berdasarkan penjelasan
                  yang telah dipelajari.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-person-walking"></i>
              </span>
              <div>
                <h3>5. Mengamalkan</h3>
                <p>
                  Berusaha menerapkan petunjuk ayat
                  dalam kehidupan sesuai kemampuan
                  dan tuntunan syariat.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Learning Reminder</strong>
              <p>
                Jika menemukan ayat yang berkaitan
                dengan hukum atau perkara agama yang
                belum dipahami, jangan menetapkan
                kesimpulan sendiri. Pelajarilah melalui
                tafsir dan tanyakan kepada guru
                yang berkompeten.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "Key Takeaways",
        subtitle: "Ringkasan Pembelajaran",

        content: `
          <p>
            Setelah mempelajari Reflection & Tadabbur,
            kita dapat memahami bahwa berinteraksi
            dengan Al-Qur'an tidak hanya dilakukan
            melalui bacaan, tetapi juga dengan
            mempelajari makna dan mengambil pelajaran.
          </p>

          <div class="definition-card">
            <span class="definition-label">KEY TAKEAWAYS</span>
            <h3>Pelajaran Utama</h3>
            <p>
              Tadabbur membantu seorang muslim
              memperhatikan pesan Al-Qur'an,
              mengambil hikmah, dan berusaha
              mengamalkan petunjuknya.
            </p>
          </div>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3>Memahami</h3>
                <p>
                  Mempelajari makna ayat melalui
                  terjemah dan penjelasan tafsir
                  yang dapat dipercaya.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-lightbulb"></i>
              </span>
              <div>
                <h3>Merenungkan</h3>
                <p>
                  Memperhatikan pesan dan pelajaran
                  yang terkandung dalam ayat.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
              <div>
                <h3>Mengamalkan</h3>
                <p>
                  Berusaha menjadikan petunjuk
                  Al-Qur'an sebagai pedoman
                  dalam kehidupan.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-star"></i>
            <div>
              <strong>Final Reminder</strong>
              <p>
                Sebaik-baik proses belajar adalah
                ilmu yang mendorong keimanan,
                memperbaiki akhlak, dan membuahkan
                amal saleh.
              </p>
            </div>
          </div>
        `,
      },

      {
        title: "References",
        subtitle: "Referensi dan Bacaan Lanjutan",

        content: `
          <p>
            Untuk memperdalam pembelajaran tadabbur,
            gunakan sumber Al-Qur'an, terjemah,
            kitab tafsir yang terpercaya, dan
            bimbingan para guru.
          </p>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-quran"></i>
              </span>
              <div>
                <h3>Al-Qur'an</h3>
                <p>
                  QS. Sad: 29 — Ajakan memperhatikan
                  ayat-ayat Al-Qur'an dan mengambil pelajaran.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3>Al-Qur'an</h3>
                <p>
                  QS. Muhammad: 24 — Ajakan untuk
                  merenungkan Al-Qur'an.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book"></i>
              </span>
              <div>
                <h3>Kitab Tafsir</h3>
                <p>
                  Pelajari penjelasan ayat melalui
                  kitab tafsir yang diakui dan
                  direkomendasikan oleh guru.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-chalkboard-user"></i>
              </span>
              <div>
                <h3>Bimbingan Guru</h3>
                <p>
                  Diskusikan ayat dan pelajaran
                  yang belum dipahami bersama
                  guru atau ustadz yang berkompeten.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-bookmark"></i>
            <div>
              <strong>Learning Advice</strong>
              <p>
                Jadikan referensi sebagai pendamping
                dalam belajar. Periksa sumber dan
                jangan mengambil kesimpulan agama
                hanya dari potongan informasi.
              </p>
            </div>
          </div>
        `,
      },
    ],

    quiz: [
      {
        question: "Apa yang dimaksud dengan tadabbur Al-Qur'an?",
        options: [
          "Membaca Al-Qur'an tanpa memperhatikan maknanya",
          "Merenungkan pesan dan pelajaran ayat berdasarkan pemahaman yang benar",
          "Menafsirkan ayat berdasarkan pendapat pribadi",
          "Menghafalkan seluruh ayat tanpa mempelajari kandungannya",
        ],
        answer: "b",
        explanation:
          "Tadabbur adalah merenungkan pesan dan pelajaran ayat dengan memperhatikan pemahaman yang benar.",
      },

      {
        question: "Apa perbedaan utama antara tadabbur dan tafsir?",
        options: [
          "Tadabbur dan tafsir memiliki arti yang sepenuhnya sama",
          "Tafsir hanya membahas cara membaca Al-Qur'an",
          "Tadabbur merenungkan pesan ayat, sedangkan tafsir menjelaskan makna ayat berdasarkan kaidah keilmuan",
          "Tadabbur berarti mengubah makna ayat",
        ],
        answer: "c",
        explanation:
          "Tadabbur berfokus pada perenungan pesan dan pelajaran, sedangkan tafsir merupakan ilmu untuk menjelaskan makna ayat berdasarkan sumber dan kaidah keilmuan.",
      },

      {
        question:
          "Surah dan ayat manakah yang mengajak manusia memperhatikan ayat-ayat Al-Qur'an?",
        options: [
          "QS. Sad: 29",
          "QS. Al-Fil: 1",
          "QS. Al-Lahab: 1",
          "QS. Al-Kautsar: 1",
        ],
        answer: "a",
        explanation:
          "QS. Sad: 29 menjelaskan bahwa Al-Qur'an diturunkan sebagai kitab yang diberkahi agar manusia memperhatikan ayat-ayatnya dan mengambil pelajaran.",
      },

      {
        question:
          "Apa langkah yang tepat ketika menemukan ayat yang belum dipahami?",
        options: [
          "Menetapkan makna berdasarkan dugaan sendiri",
          "Mengabaikan ayat tersebut",
          "Mengikuti pendapat yang tidak diketahui sumbernya",
          "Merujuk tafsir terpercaya dan bertanya kepada guru yang berkompeten",
        ],
        answer: "d",
        explanation:
          "Memahami ayat perlu merujuk sumber dan penjelasan yang dapat dipercaya serta bimbingan orang yang memiliki kompetensi.",
      },

      {
        question:
          "Apa tujuan menghubungkan tadabbur dengan kehidupan sehari-hari?",
        options: [
          "Agar hanya memahami teori tanpa perubahan",
          "Agar pelajaran Al-Qur'an mendorong perbaikan sikap dan amal",
          "Agar tidak perlu mempelajari tafsir",
          "Agar dapat menafsirkan semua ayat sendiri",
        ],
        answer: "b",
        explanation:
          "Tadabbur diharapkan mendorong seseorang mengambil pelajaran dan berusaha mengamalkan petunjuk Al-Qur'an.",
      },
    ],

    reflectionQuestions: [
      "Apa pemahaman baru yang kamu dapatkan tentang tadabbur Al-Qur'an?",
      "Mengapa tadabbur perlu disertai pemahaman tafsir yang benar?",
      "Pelajaran apa yang ingin kamu terapkan dari ayat yang telah dipelajari?",
      "Bagaimana kamu dapat membiasakan membaca, memahami, dan merenungkan Al-Qur'an?",
    ],
  };

  /* =========================================================
     TOPIC DATA — CARD 06
     MEMORISATION & APPLICATION
  ========================================================= */

  const memorisationTopic = {
    id: "memorisation-and-application",

    title: "Memorisation & Application",

    heroTitle: "Memorising and Applying the",
    heroHighlight: "Qur'an",

    description:
      "Membangun kebiasaan menghafal, murajaah, menjaga hafalan, dan mengamalkan tuntunan Al-Qur'an.",

    duration: "25–30 Minutes",
    level: "Beginner Level",

    overview:
      "Mempelajari dasar-dasar menghafal Al-Qur'an, keutamaannya, metode menghafal yang tepat, pentingnya murajaah, cara menjaga hafalan, serta membiasakan diri mengamalkan petunjuk Al-Qur'an.",

    overviewHeading: "Memorise. Review. <span>Apply.</span>",

    reflectionIntro:
      "Setelah mempelajari materi ini, renungkan bagaimana kamu dapat membangun kebiasaan menghafal, menjaga hafalan, dan mengamalkan petunjuk Al-Qur'an secara bertahap.",

    learn: [
      "Pengenalan dan tujuan menghafal Al-Qur'an",
      "Keutamaan mempelajari dan menghafal Al-Qur'an",
      "Metode menghafal yang teratur dan efektif",
      "Pentingnya murajaah dan mengulang hafalan",
      "Cara menjaga hafalan agar tetap terpelihara",
      "Mengamalkan tuntunan Al-Qur'an dalam kehidupan",
    ],

    objectives: [
      "Menjelaskan pengertian dan tujuan menghafal Al-Qur'an",
      "Memahami keutamaan belajar dan menghafal Al-Qur'an",
      "Mengenali metode menghafal yang sesuai",
      "Memahami pentingnya murajaah secara konsisten",
      "Mengetahui cara menjaga hafalan dengan bimbingan guru",
      "Menghubungkan hafalan Al-Qur'an dengan pengamalan dalam kehidupan",
    ],

    sections: [
      /* SECTION 01 */
      {
        title: "Introduction to Qur'an Memorisation",
        subtitle: "Pengenalan Menghafal Al-Qur'an",

        content: `
          <p>
            Menghafal Al-Qur'an merupakan salah satu bentuk
            kesungguhan seorang muslim dalam berinteraksi
            dengan kitabullah. Melalui hafalan, ayat-ayat
            Al-Qur'an dapat lebih dekat dengan kehidupan
            dan menjadi bagian dari proses belajar.
          </p>

          <div class="definition-card">
            <span class="definition-label">INTRODUCTION</span>
            <h3>Apa Itu Menghafal Al-Qur'an?</h3>
            <p>
              Menghafal Al-Qur'an adalah usaha mengingat
              dan menjaga ayat-ayat Al-Qur'an di dalam
              ingatan dengan memperhatikan ketepatan
              bacaan, makhraj, dan kaidah tajwid.
            </p>
          </div>

          <p>
            Menghafal bukan sekadar mengingat susunan
            ayat. Proses ini juga perlu disertai dengan
            membaca secara benar, memahami kandungan
            melalui sumber yang terpercaya, serta
            berusaha mengamalkan petunjuknya.
          </p>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Knowledge Note</strong>
              <p>
                Setiap orang dapat memiliki kemampuan
                dan kecepatan menghafal yang berbeda.
                Bangun kebiasaan belajar secara bertahap
                dan mintalah bimbingan guru agar hafalan
                tetap benar.
              </p>
            </div>
          </div>

          <h3>Hal Penting dalam Menghafal</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-quran"></i>
              </span>
              <div>
                <h3>Ketepatan Bacaan</h3>
                <p>
                  Memperhatikan makhraj huruf dan
                  hukum tajwid dengan bimbingan guru.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-repeat"></i>
              </span>
              <div>
                <h3>Pengulangan</h3>
                <p>
                  Mengulang bacaan dan hafalan agar
                  semakin terbiasa mengingat ayat.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
              <div>
                <h3>Kesungguhan</h3>
                <p>
                  Menjaga niat, kesabaran, dan
                  konsistensi dalam proses belajar.
                </p>
              </div>
            </div>
          </div>
        `,
      },

      /* SECTION 02 */
      {
        title: "The Virtues of Memorising the Qur'an",
        subtitle: "Keutamaan Menghafal Al-Qur'an",

        content: `
          <p>
            Al-Qur'an memiliki kedudukan yang agung
            dalam kehidupan seorang muslim. Mempelajari,
            membaca, menghafal, dan mengajarkannya
            merupakan bagian dari usaha mendekatkan
            diri kepada Allah.
          </p>

          <div class="definition-card">
            <span class="definition-label">HADITH FOUNDATION</span>
            <h3>Belajar dan Mengajarkan Al-Qur'an</h3>
            <p>
              Rasulullah ﷺ bersabda bahwa sebaik-baik
              manusia adalah orang yang mempelajari
              Al-Qur'an dan mengajarkannya.
            </p>
            <p>
              <strong>Referensi:</strong>
              Sahih al-Bukhari, hadis nomor 5027.
            </p>
          </div>

          <h3>Nilai yang Dapat Dibangun</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3>Cinta kepada Al-Qur'an</h3>
                <p>
                  Membiasakan diri membaca dan
                  mempelajari kalam Allah.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-brain"></i>
              </span>
              <div>
                <h3>Kesungguhan dalam Belajar</h3>
                <p>
                  Melatih kesabaran, ketekunan,
                  dan kedisiplinan melalui proses
                  menghafal serta mengulang bacaan.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </span>
              <div>
                <h3>Meneruskan Ilmu</h3>
                <p>
                  Memiliki semangat untuk terus
                  belajar dan menyampaikan ilmu
                  Al-Qur'an dengan benar.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Important Note</strong>
              <p>
                Keutamaan belajar Al-Qur'an tidak
                seharusnya menjadi alasan untuk
                membandingkan kemampuan hafalan.
                Setiap proses belajar perlu dijalani
                dengan ikhlas dan kesungguhan.
              </p>
            </div>
          </div>
        `,
      },

      /* SECTION 03 */
      {
        title: "Effective Memorisation Methods",
        subtitle: "Metode Menghafal yang Efektif",

        content: `
          <p>
            Metode menghafal dapat disesuaikan dengan
            kemampuan, kebiasaan, dan arahan guru.
            Hal terpenting adalah menjaga ketepatan
            bacaan serta membangun proses belajar
            yang teratur.
          </p>

          <h3>Langkah-Langkah Menghafal</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3>1. Membaca dengan Benar</h3>
                <p>
                  Mulailah dengan membaca ayat secara
                  perlahan dan memperhatikan tajwid.
                  Mintalah guru memeriksa bacaan
                  sebelum menghafalnya.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-headphones"></i>
              </span>
              <div>
                <h3>2. Mendengarkan Bacaan</h3>
                <p>
                  Dengarkan bacaan qari yang terpercaya
                  untuk membantu mengenali pelafalan,
                  panjang pendek, dan kelancaran ayat.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-repeat"></i>
              </span>
              <div>
                <h3>3. Mengulang Ayat</h3>
                <p>
                  Ulangi ayat secara bertahap sampai
                  semakin lancar, kemudian coba
                  mengingatnya tanpa melihat mushaf.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-link"></i>
              </span>
              <div>
                <h3>4. Menghubungkan Ayat</h3>
                <p>
                  Setelah menguasai bagian yang dipelajari,
                  latih hubungan antara akhir ayat
                  dengan ayat berikutnya.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-user-check"></i>
              </span>
              <div>
                <h3>5. Menyetorkan Hafalan</h3>
                <p>
                  Bacakan hafalan kepada guru atau
                  pembimbing untuk memeriksa ketepatan
                  bacaan dan memperbaiki kesalahan.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Learning Reminder</strong>
              <p>
                Gunakan target hafalan yang realistis.
                Belajar secara teratur dengan waktu
                yang cukup lebih baik daripada
                memaksakan diri hingga mengganggu
                istirahat dan kegiatan penting lainnya.
              </p>
            </div>
          </div>
        `,
      },

      /* SECTION 04 */
      {
        title: "Murajaah & Revision",
        subtitle: "Murajaah dan Mengulang Hafalan",

        content: `
          <p>
            Murajaah adalah kegiatan mengulang kembali
            hafalan Al-Qur'an yang telah dipelajari.
            Murajaah memiliki peran penting agar
            seseorang terus mengingat dan memperbaiki
            hafalannya.
          </p>

          <div class="definition-card">
            <span class="definition-label">KEY DEFINITION</span>
            <h3>Apa Itu Murajaah?</h3>
            <p>
              Murajaah adalah mengulang hafalan yang
              telah dipelajari untuk menjaga kelancaran,
              ketepatan, dan ingatan terhadap ayat
              Al-Qur'an.
            </p>
          </div>

          <h3>Bentuk Murajaah</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-clock-rotate-left"></i>
              </span>
              <div>
                <h3>Hafalan Terbaru</h3>
                <p>
                  Mengulang bagian yang baru dipelajari
                  agar semakin kuat dalam ingatan.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book"></i>
              </span>
              <div>
                <h3>Hafalan Sebelumnya</h3>
                <p>
                  Mengulang bagian yang telah dipelajari
                  pada hari atau waktu sebelumnya.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-layer-group"></i>
              </span>
              <div>
                <h3>Hafalan yang Lebih Lama</h3>
                <p>
                  Meninjau kembali hafalan terdahulu
                  agar tetap terjaga dan tidak terabaikan.
                </p>
              </div>
            </div>
          </div>

          <h3>Membangun Kebiasaan Murajaah</h3>

          <p>
            Murajaah dapat dilakukan dengan jadwal
            yang sesuai kemampuan. Bagilah waktu
            belajar secara wajar, gunakan mushaf
            yang biasa dipakai, dan mintalah guru
            membantu menentukan bagian yang perlu
            diulang lebih sering.
          </p>

          <div class="knowledge-note">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Important Note</strong>
              <p>
                Jika terdapat ayat yang terlupa atau
                keliru, jangan berkecil hati. Periksa
                kembali mushaf, perbaiki bacaan, dan
                lanjutkan murajaah dengan bimbingan.
              </p>
            </div>
          </div>
        `,
      },

      /* SECTION 05 */
      {
        title: "Maintaining Memorisation",
        subtitle: "Menjaga Hafalan Al-Qur'an",

        content: `
          <p>
            Menjaga hafalan membutuhkan perhatian
            dan kebiasaan mengulang secara konsisten.
            Hafalan yang pernah dipelajari tetap
            perlu ditinjau kembali agar kesalahan
            dapat diketahui dan diperbaiki.
          </p>

          <h3>Hal yang Membantu Menjaga Hafalan</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-calendar-check"></i>
              </span>
              <div>
                <h3>Konsistensi</h3>
                <p>
                  Menyediakan waktu untuk mengulang
                  hafalan sesuai jadwal yang realistis
                  dan dapat dijalankan.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-chalkboard-user"></i>
              </span>
              <div>
                <h3>Bimbingan Guru</h3>
                <p>
                  Meminta guru memeriksa hafalan,
                  memperbaiki kesalahan, dan
                  memberikan arahan belajar.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-quran"></i>
              </span>
              <div>
                <h3>Memperhatikan Mushaf</h3>
                <p>
                  Memeriksa kembali ayat melalui
                  mushaf yang terpercaya ketika
                  menemukan keraguan dalam hafalan.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
              <div>
                <h3>Menjaga Niat dan Adab</h3>
                <p>
                  Berusaha menjaga keikhlasan,
                  menghormati Al-Qur'an, dan
                  menjadikan hafalan sebagai
                  bagian dari proses mendekatkan
                  diri kepada Allah.
                </p>
              </div>
            </div>
          </div>

          <div class="definition-card">
            <span class="definition-label">QUR'ANIC FOUNDATION</span>
            <h3>QS. Al-Muzzammil: 4</h3>
            <p>
              Allah memerintahkan agar Al-Qur'an
              dibaca dengan tartil, yaitu bacaan
              yang perlahan dan teratur.
            </p>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-lightbulb"></i>
            <div>
              <strong>Learning Reminder</strong>
              <p>
                Menjaga hafalan bukan berarti harus
                selalu sempurna tanpa kesalahan.
                Ketika menemukan kekeliruan, perbaiki
                dengan sabar dan terus belajar.
              </p>
            </div>
          </div>
        `,
      },

      /* SECTION 06 */
      {
        title: "Applying Qur'anic Guidance",
        subtitle: "Mengamalkan Tuntunan Al-Qur'an",

        content: `
          <p>
            Al-Qur'an diturunkan sebagai petunjuk
            bagi kehidupan manusia. Karena itu,
            mempelajari dan menghafal Al-Qur'an
            hendaknya mendorong seorang muslim
            untuk memperbaiki iman, akhlak,
            dan amalnya.
          </p>

          <div class="definition-card">
            <span class="definition-label">QUR'ANIC FOUNDATION</span>
            <h3>QS. Al-Isra': 9</h3>
            <p>
              Allah menjelaskan bahwa Al-Qur'an
              memberikan petunjuk kepada jalan
              yang paling lurus dan memberikan
              kabar gembira kepada orang-orang
              beriman yang mengerjakan amal saleh.
            </p>
          </div>

          <h3>Contoh Pengamalan Nilai Al-Qur'an</h3>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-handshake"></i>
              </span>
              <div>
                <h3>Kejujuran dan Amanah</h3>
                <p>
                  Membiasakan diri berkata jujur,
                  menepati janji, dan menjaga
                  kepercayaan orang lain.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
              <div>
                <h3>Kesabaran dan Kasih Sayang</h3>
                <p>
                  Belajar bersabar, menghormati
                  sesama, dan memperlakukan orang
                  lain dengan baik.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-person-praying"></i>
              </span>
              <div>
                <h3>Menjaga Ibadah</h3>
                <p>
                  Berusaha memperbaiki kualitas
                  ibadah dan menjalankan kewajiban
                  sesuai tuntunan agama.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-users"></i>
              </span>
              <div>
                <h3>Adab kepada Sesama</h3>
                <p>
                  Menjaga ucapan, menghormati
                  orang tua dan guru, serta
                  berbuat baik kepada sesama.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-circle-info"></i>
            <div>
              <strong>Important Note</strong>
              <p>
                Mengamalkan Al-Qur'an perlu
                didasarkan pada pemahaman yang
                benar. Untuk memahami hukum dan
                tuntunan agama, rujuk penjelasan
                ulama serta bimbingan guru yang
                berkompeten.
              </p>
            </div>
          </div>
        `,
      },

      /* SECTION 07 */
      {
        title: "Key Takeaways",
        subtitle: "Ringkasan Pembelajaran",

        content: `
          <p>
            Menghafal Al-Qur'an merupakan proses
            belajar yang membutuhkan kesungguhan,
            pengulangan, dan bimbingan. Hafalan
            juga perlu dihubungkan dengan usaha
            memahami serta mengamalkan petunjuknya.
          </p>

          <div class="definition-card">
            <span class="definition-label">KEY TAKEAWAYS</span>
            <h3>Pelajaran Utama</h3>
            <p>
              Menghafal, murajaah, menjaga hafalan,
              dan mengamalkan Al-Qur'an merupakan
              bagian dari usaha membangun hubungan
              yang baik dengan kitabullah.
            </p>
          </div>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-quran"></i>
              </span>
              <div>
                <h3>Menghafal</h3>
                <p>
                  Mempelajari ayat dengan bacaan
                  yang benar dan metode yang sesuai
                  kemampuan.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-repeat"></i>
              </span>
              <div>
                <h3>Murajaah</h3>
                <p>
                  Mengulang hafalan secara teratur
                  agar tetap terpelihara.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-shield-heart"></i>
              </span>
              <div>
                <h3>Menjaga Hafalan</h3>
                <p>
                  Memeriksa bacaan, memperbaiki
                  kesalahan, dan terus belajar
                  bersama guru.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-hand-holding-heart"></i>
              </span>
              <div>
                <h3>Mengamalkan</h3>
                <p>
                  Berusaha menjadikan petunjuk
                  Al-Qur'an sebagai pedoman
                  dalam kehidupan sehari-hari.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-star"></i>
            <div>
              <strong>Final Reminder</strong>
              <p>
                Jangan hanya berusaha mengingat
                ayat-ayat Al-Qur'an, tetapi
                berusahalah pula memahami
                petunjuknya dan memperbaiki
                amal berdasarkan ilmu.
              </p>
            </div>
          </div>
        `,
      },

      /* SECTION 08 */
      {
        title: "References",
        subtitle: "Referensi dan Bacaan Lanjutan",

        content: `
          <p>
            Materi ini dapat diperdalam melalui
            Al-Qur'an, hadis yang sahih, kitab
            penjelasan ulama, serta bimbingan
            guru Al-Qur'an.
          </p>

          <div class="position-list">
            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-quran"></i>
              </span>
              <div>
                <h3>Al-Qur'an — QS. Al-Qamar: 17</h3>
                <p>
                  Ayat tentang Allah yang
                  memudahkan Al-Qur'an untuk
                  diambil pelajaran.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book-open"></i>
              </span>
              <div>
                <h3>Al-Qur'an — QS. Al-Muzzammil: 4</h3>
                <p>
                  Perintah membaca Al-Qur'an
                  dengan tartil.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-book"></i>
              </span>
              <div>
                <h3>Al-Qur'an — QS. Al-Isra': 9</h3>
                <p>
                  Penjelasan tentang Al-Qur'an
                  sebagai petunjuk menuju jalan
                  yang paling lurus.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-scroll"></i>
              </span>
              <div>
                <h3>Sahih al-Bukhari — Hadis 5027</h3>
                <p>
                  Keutamaan mempelajari dan
                  mengajarkan Al-Qur'an.
                </p>
              </div>
            </div>

            <div class="position-item">
              <span class="position-icon">
                <i class="fa-solid fa-chalkboard-user"></i>
              </span>
              <div>
                <h3>Bimbingan Guru Al-Qur'an</h3>
                <p>
                  Belajar tahsin, tahfizh,
                  setoran hafalan, dan murajaah
                  bersama guru yang berkompeten.
                </p>
              </div>
            </div>
          </div>

          <div class="knowledge-note">
            <i class="fa-solid fa-bookmark"></i>
            <div>
              <strong>Learning Advice</strong>
              <p>
                Gunakan mushaf dan referensi
                terpercaya. Untuk memperbaiki
                bacaan dan hafalan, utamakan
                pembelajaran langsung bersama
                guru yang dapat membimbing.
              </p>
            </div>
          </div>
        `,
      },
    ],

    quiz: [
      {
        question: "Apa yang dimaksud dengan menghafal Al-Qur'an?",
        options: [
          "Mengingat ayat tanpa memperhatikan ketepatan bacaan",
          "Mengingat dan menjaga ayat Al-Qur'an dengan memperhatikan ketepatan bacaan",
          "Membaca terjemah tanpa membaca ayat",
          "Menghafalkan pendapat orang lain",
        ],
        answer: "b",
        explanation:
          "Menghafal Al-Qur'an adalah usaha mengingat dan menjaga ayat dengan tetap memperhatikan ketepatan bacaan dan bimbingan guru.",
      },

      {
        question: "Apa yang dimaksud dengan murajaah?",
        options: [
          "Mengganti susunan ayat",
          "Membaca hanya ayat yang baru dipelajari",
          "Mengulang kembali hafalan yang telah dipelajari",
          "Menghafal tanpa pernah mengulang",
        ],
        answer: "c",
        explanation:
          "Murajaah adalah mengulang hafalan untuk menjaga kelancaran, ketepatan, dan ingatan terhadap ayat Al-Qur'an.",
      },

      {
        question: "Apa langkah yang tepat sebelum mulai menghafal ayat?",
        options: [
          "Memastikan bacaan benar dengan memperhatikan tajwid dan bimbingan guru",
          "Menghafal secepat mungkin tanpa memeriksa bacaan",
          "Mengabaikan makhraj huruf",
          "Menghafal hanya berdasarkan perkiraan",
        ],
        answer: "a",
        explanation:
          "Ketepatan bacaan perlu diperhatikan sejak awal. Guru dapat membantu memeriksa makhraj dan kaidah tajwid sebelum hafalan dilanjutkan.",
      },

      {
        question: "Apa salah satu cara menjaga hafalan Al-Qur'an?",
        options: [
          "Tidak perlu membuka mushaf lagi",
          "Menghindari setoran hafalan",
          "Menghafal sebanyak mungkin tanpa istirahat",
          "Melakukan murajaah secara teratur dan memperbaiki kesalahan bersama guru",
        ],
        answer: "d",
        explanation:
          "Murajaah yang teratur dan pemeriksaan bersama guru membantu menjaga serta memperbaiki hafalan.",
      },

      {
        question:
          "Apa tujuan menghubungkan hafalan dengan pengamalan Al-Qur'an?",
        options: [
          "Agar hafalan hanya menjadi pengetahuan",
          "Agar petunjuk Al-Qur'an mendorong perbaikan iman, akhlak, dan amal",
          "Agar tidak perlu mempelajari makna ayat",
          "Agar seseorang dapat menetapkan hukum sendiri",
        ],
        answer: "b",
        explanation:
          "Al-Qur'an merupakan petunjuk kehidupan. Mempelajarinya hendaknya mendorong seseorang memperbaiki sikap dan amal berdasarkan pemahaman yang benar.",
      },
    ],

    reflectionQuestions: [
      "Apa pemahaman baru yang kamu dapatkan tentang menghafal Al-Qur'an?",
      "Mengapa murajaah penting dalam menjaga hafalan?",
      "Metode apa yang dapat kamu lakukan agar proses menghafal lebih teratur?",
      "Bagaimana kamu dapat menghubungkan hafalan Al-Qur'an dengan akhlak dan kehidupan sehari-hari?",
    ],
  };

  /* =====================================================
     06. TOPIC 02 RENDERER
  ===================================================== */

  const renderTopic = (topic) => {
    document.title = `${topic.title} | Azka Farid Islamic`;

    const descriptionMeta = select('meta[name="description"]');

    if (descriptionMeta) {
      descriptionMeta.content = topic.description;
    }

    const breadcrumb = select(".breadcrumb-container span");

    if (breadcrumb) {
      breadcrumb.textContent = topic.title;
    }

    const heroTitle = select(".topic-hero-content h1");

    if (heroTitle) {
      heroTitle.innerHTML = `${topic.heroTitle}<span>${topic.heroHighlight}</span>`;
    }

    const heroDescription = select(".topic-hero-description");

    if (heroDescription) {
      heroDescription.textContent = topic.description;
    }

    const metaItems = selectAll(".topic-meta span");

    if (metaItems[0]) {
      metaItems[0].innerHTML = `<i class="fa-regular fa-clock"></i> ${topic.duration}`;
    }

    if (metaItems[1]) {
      metaItems[1].innerHTML = `<i class="fa-solid fa-layer-group"></i> ${topic.level}`;
    }

    if (metaItems[2]) {
      metaItems[2].innerHTML = `<i class="fa-solid fa-list-check"></i> ${topic.quiz.length} Quiz Questions`;
    }

    const overviewTitle = select(".overview-heading h2");

    if (overviewTitle) {
      overviewTitle.innerHTML =
        topic.overviewHeading || `Explore the <span>Learning.</span>`;
    }

    const overviewDescription = select(".overview-heading p");

    if (overviewDescription) {
      overviewDescription.textContent = topic.overview;
    }

    const overviewLists = selectAll(".overview-card ul");

    if (overviewLists[0]) {
      overviewLists[0].innerHTML = topic.learn
        .map((item) => `<li>${item}</li>`)
        .join("");
    }

    if (overviewLists[1]) {
      overviewLists[1].innerHTML = topic.objectives
        .map((item) => `<li>${item}</li>`)
        .join("");
    }

    /* TABLE OF CONTENTS */

    const toc = select(".table-of-contents");

    if (toc) {
      toc.innerHTML = topic.sections
        .map(
          (section, index) => `
          <a href="#section-${index + 1}"
             class="toc-link ${index === 0 ? "active" : ""}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            ${section.title}
          </a>
        `,
        )
        .join("");
    }

    /* ARTICLE SECTIONS */

    const article = select(".learning-article");

    if (article) {
      const existingSections = [
        ...article.querySelectorAll(".article-section"),
      ];

      topic.sections.forEach((section, index) => {
        const target = existingSections[index];

        if (!target) return;

        target.id = `section-${index + 1}`;
        target.innerHTML = `
          <span class="article-number">
            SECTION ${String(index + 1).padStart(2, "0")}
          </span>

          <h2>
            ${section.title}
            <span>${section.subtitle}</span>
          </h2>

          ${section.content}
        `;
      });
    }

    /* QUIZ */

    renderQuiz(topic.quiz, topic.id);

    /* REFLECTION */

    const reflectionHeading = select("#personal-reflection h2");

    if (reflectionHeading) {
      reflectionHeading.innerHTML = `Reflect on Your <span>Learning Journey.</span>`;
    }

    const reflectionIntro = select("#personal-reflection > p");

    if (reflectionIntro) {
      reflectionIntro.textContent =
        topic.reflectionIntro ||
        "Setelah mempelajari materi ini, luangkan waktu untuk merenungkan pelajaran yang kamu dapatkan.";
    }

    const reflectionList = select("#personal-reflection .reflection-card ul");

    if (reflectionList) {
      reflectionList.innerHTML = topic.reflectionQuestions
        .map((question) => `<li>${question}</li>`)
        .join("");
    }

    /* TOPIC NAVIGATION */

    const nextTopic = select(".next-topic strong");

    if (nextTopic) {
      nextTopic.textContent = "Explore More Topics";
    }

    const previousTopic = select(".previous-topic strong");

    if (previousTopic) {
      previousTopic.textContent = "Qur'an Studies";
    }
  };

  /* =====================================================
     07. QUIZ SYSTEM
  ===================================================== */

  const renderQuiz = (questions, topicId) => {
    const form = select("#knowledgeQuizForm");

    if (!form) return;

    const quizHeading = select(".quiz-heading h2");
    const quizDescription = select(".quiz-heading p");

    if (quizHeading) {
      quizHeading.innerHTML = `Interactive Knowledge <span>Quiz</span>`;
    }

    if (quizDescription) {
      quizDescription.textContent =
        "Uji pemahamanmu melalui lima pertanyaan berdasarkan materi yang telah dipelajari.";
    }

    const questionLabels = questions
      .map(
        (question, index) => `
        <div class="quiz-question" data-question="${index + 1}">
          <span class="question-number">
            QUESTION ${String(index + 1).padStart(2, "0")} / ${questions.length}
          </span>

          <h3>${question.question}</h3>

          <div class="quiz-options">
            ${question.options
              .map((option, optionIndex) => {
                const value = String.fromCharCode(97 + optionIndex);

                return `
                <label class="quiz-option">
                  <input
                    type="radio"
                    name="question${index + 1}"
                    value="${value}"
                  />
                  <span>${option}</span>
                </label>
              `;
              })
              .join("")}
          </div>
        </div>
      `,
      )
      .join("");

    form.innerHTML = `
      ${questionLabels}

      <div class="quiz-submit-area">
        <p id="quizMessage" aria-live="polite">
          Pastikan semua pertanyaan sudah dijawab sebelum mengirim hasil.
        </p>

        <button type="submit" class="primary-button" id="submitQuiz">
          Submit My Answers
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    const information = select(".quiz-information");

    if (information) {
      information.innerHTML = `
        <div>
          <i class="fa-solid fa-circle-question"></i>
          <span>${questions.length} Questions</span>
        </div>

        <div>
          <i class="fa-solid fa-star"></i>
          <span>100 Maximum Points</span>
        </div>

        <div>
          <i class="fa-regular fa-clock"></i>
          <span>No Time Limit</span>
        </div>
      `;
    }

    const result = select("#quizResult");

    if (result) result.hidden = true;

    const message = select("#quizMessage");

    if (message) message.textContent = "";

    const explanationContainer = select("#quizExplanations");

    if (explanationContainer) {
      explanationContainer.replaceChildren();
    }

    const retryButton = select("#retryQuiz");

    const newForm = form.cloneNode(true);

    form.replaceWith(newForm);

    const activeForm = select("#knowledgeQuizForm");

    const storageKey = `azkaFarid_quiz_${topicId}`;

    const gradeForScore = (score) => {
      if (score >= 90) {
        return {
          title: "Excellent!",
          feedback:
            "Luar biasa! Kamu menunjukkan pemahaman yang sangat baik terhadap materi ini.",
        };
      }

      if (score >= 75) {
        return {
          title: "Great Job!",
          feedback:
            "Bagus! Kamu sudah memahami sebagian besar materi. Terus tingkatkan pengetahuanmu.",
        };
      }

      if (score >= 60) {
        return {
          title: "Good Effort!",
          feedback:
            "Usahamu patut diapresiasi. Pelajari kembali beberapa bagian yang masih perlu diperkuat.",
        };
      }

      return {
        title: "Keep Learning!",
        feedback:
          "Terus belajar dan jangan ragu mengulang materi. Setiap proses belajar membutuhkan waktu.",
      };
    };

    const showExplanations = (answers) => {
      const container = select("#quizExplanations");

      if (!container) return;

      container.replaceChildren();

      const heading = document.createElement("h4");
      heading.textContent = "Review Your Answers";

      container.appendChild(heading);

      questions.forEach((question, index) => {
        const userAnswer = answers[`question${index + 1}`];

        const isCorrect = userAnswer === question.answer;

        const item = document.createElement("div");
        item.className = "explanation-item";

        const title = document.createElement("strong");
        title.textContent = `Question ${index + 1} — ${isCorrect ? "Correct" : "Incorrect"}`;

        const answer = document.createElement("p");

        const correctOptionIndex = question.answer.charCodeAt(0) - 97;

        answer.textContent = `Correct answer: ${question.options[correctOptionIndex]}`;

        const explanation = document.createElement("p");
        explanation.textContent = question.explanation;

        item.append(title, answer, explanation);
        container.appendChild(item);
      });
    };

    activeForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const answers = {};
      const unanswered = [];

      questions.forEach((question, index) => {
        const name = `question${index + 1}`;

        const selectedAnswer = activeForm.querySelector(
          `input[name="${name}"]:checked`,
        );

        if (!selectedAnswer) {
          unanswered.push(index + 1);
        } else {
          answers[name] = selectedAnswer.value;
        }
      });

      const quizMessage = select("#quizMessage");

      if (unanswered.length > 0) {
        if (quizMessage) {
          quizMessage.textContent = `Masih ada ${unanswered.length} pertanyaan yang belum dijawab. Silakan lengkapi terlebih dahulu.`;

          quizMessage.style.color = "#dc5151";
        }

        const firstQuestion = activeForm.querySelector(
          `[data-question="${unanswered[0]}"]`,
        );

        if (firstQuestion) {
          firstQuestion.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }

        return;
      }

      let correctCount = 0;

      questions.forEach((question, index) => {
        if (answers[`question${index + 1}`] === question.answer) {
          correctCount++;
        }
      });

      const wrongCount = questions.length - correctCount;

      const score = Math.round((correctCount / questions.length) * 100);

      const grade = gradeForScore(score);

      const scoreElement = select("#quizScore");
      const gradeElement = select("#quizGrade");
      const feedbackElement = select("#quizFeedback");
      const correctElement = select("#correctAnswers");
      const wrongElement = select("#wrongAnswers");

      if (scoreElement) scoreElement.textContent = score;
      if (gradeElement) gradeElement.textContent = grade.title;

      if (feedbackElement) {
        feedbackElement.textContent = `${grade.feedback} Nilai ini hanya menunjukkan pemahaman terhadap materi, bukan ukuran iman atau nilai dirimu.`;
      }

      if (correctElement) {
        correctElement.textContent = correctCount;
      }

      if (wrongElement) {
        wrongElement.textContent = wrongCount;
      }

      showExplanations(answers);

      if (quizMessage) {
        quizMessage.textContent =
          "Quiz selesai! Hasil dan pembahasan jawabanmu tersedia di bawah.";

        quizMessage.style.color = "#15976c";
      }

      const quizResult = select("#quizResult");

      if (quizResult) {
        quizResult.hidden = false;

        quizResult.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({
            score,
            correctCount,
            wrongCount,
            completedAt: new Date().toISOString(),
          }),
        );
      } catch (error) {
        console.warn("Quiz result could not be saved:", error);
      }
    });

    const activeRetryButton = select("#retryQuiz");

    if (activeRetryButton) {
      activeRetryButton.onclick = () => {
        activeForm.reset();

        const quizResult = select("#quizResult");
        const quizMessage = select("#quizMessage");
        const explanations = select("#quizExplanations");

        if (quizResult) quizResult.hidden = true;

        if (quizMessage) {
          quizMessage.textContent =
            "Quiz telah direset. Silakan jawab kembali.";

          quizMessage.style.color = "";
        }

        if (explanations) {
          explanations.replaceChildren();
        }

        try {
          localStorage.removeItem(storageKey);
        } catch (error) {
          console.warn("Quiz result could not be cleared:", error);
        }

        const quizSection = select("#knowledge-quiz");

        if (quizSection) {
          quizSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    }
  };

  /* =====================================================
     08. TOPIC SELECTION
  ===================================================== */

  const introductionQuiz = [
    {
      question: "Apa pengertian Al-Qur'an secara istilah?",
      options: [
        "Kumpulan perkataan para sahabat.",
        "Kalam Allah yang diturunkan kepada Nabi Muhammad ﷺ.",
        "Buku sejarah bangsa Arab.",
        "Kumpulan syair Arab.",
      ],
      answer: "b",
      explanation:
        "Al-Qur'an adalah kalam Allah yang diturunkan kepada Nabi Muhammad ﷺ sebagai wahyu dan petunjuk bagi manusia.",
    },
    {
      question: "Apa makna Al-Furqan?",
      options: [
        "Rahmat.",
        "Peringatan.",
        "Pembeda antara kebenaran dan kebatilan.",
        "Cahaya.",
      ],
      answer: "c",
      explanation: "Al-Furqan bermakna pembeda antara kebenaran dan kebatilan.",
    },
    {
      question:
        "Menurut QS. Al-Baqarah: 2, Al-Qur'an merupakan petunjuk bagi siapa?",
      options: [
        "Orang-orang yang bertakwa.",
        "Orang-orang kaya saja.",
        "Para pedagang saja.",
        "Satu kelompok tertentu saja.",
      ],
      answer: "a",
      explanation:
        "QS. Al-Baqarah: 2 menyebut Al-Qur'an sebagai petunjuk bagi orang-orang yang bertakwa.",
    },
    {
      question:
        "Apa salah satu fungsi Al-Qur'an yang disebutkan dalam QS. Yunus: 57?",
      options: [
        "Hiburan semata.",
        "Alat perdagangan.",
        "Penyembuh bagi penyakit dalam hati.",
        "Buku sejarah saja.",
      ],
      answer: "c",
      explanation:
        "QS. Yunus: 57 menyebut Al-Qur'an sebagai nasihat, penyembuh bagi penyakit dalam dada, petunjuk, dan rahmat.",
    },
    {
      question: "Apa yang dimaksud membaca Al-Qur'an dengan tartil?",
      options: [
        "Membaca secepat mungkin.",
        "Membaca dengan perlahan dan teratur.",
        "Membaca tanpa memperhatikan kaidah bacaan.",
        "Membaca hanya dalam hati.",
      ],
      answer: "b",
      explanation:
        "Tartil adalah membaca dengan perlahan, jelas, dan teratur sesuai kaidah bacaan.",
    },
  ];

  const topicMap = {
    "revelation-and-compilation": historyTopic,
    "tajwid-and-recitation": recitationTopic,
    "understanding-tafsir-and-meaning": understandingTopic,
    "reflection-and-tadabbur": reflectionTopic,
    "memorisation-and-application": memorisationTopic,
  };
  const selectedTopicId = topicMap[topicParam]
    ? topicParam
    : "introduction-to-quran";
  const selectedTopic = topicMap[selectedTopicId] || null;

  if (selectedTopic) {
    renderTopic(selectedTopic);
  } else {
    renderQuiz(introductionQuiz, "introduction-to-quran");
  }

  /* =====================================================
     09. READING PROGRESS
  ===================================================== */

  const readingProgress = select("#readingProgress");
  const readingPercentage = select("#readingPercentage");
  const learningArticle = select(".learning-article");

  const updateReadingProgress = () => {
    if (!readingProgress || !learningArticle) return;

    const articleTop =
      learningArticle.getBoundingClientRect().top + window.scrollY;

    const articleHeight = learningArticle.offsetHeight;
    const viewportHeight = window.innerHeight;

    const totalScrollable = articleHeight - viewportHeight;

    let percentage = 0;

    if (totalScrollable > 0) {
      percentage = ((window.scrollY - articleTop) / totalScrollable) * 100;
    }

    percentage = Math.max(0, Math.min(100, percentage));

    const rounded = Math.round(percentage);

    readingProgress.style.width = `${rounded}%`;

    if (readingPercentage) {
      readingPercentage.textContent = `${rounded}%`;
    }
  };

  window.addEventListener("scroll", updateReadingProgress, {
    passive: true,
  });

  window.addEventListener("resize", updateReadingProgress);

  updateReadingProgress();

  /* =====================================================
     10. TABLE OF CONTENTS
  ===================================================== */

  const setupTableOfContents = () => {
    const tocLinks = selectAll(".toc-link");

    const articleSections = [...selectAll(".article-section[id]")];

    const setActiveToc = (sectionId) => {
      tocLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${sectionId}`;

        link.classList.toggle("active", active);

        if (active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    tocLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = select(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            setActiveToc(visible[0].target.id);
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -60% 0px",
          threshold: [0, 0.2, 0.4, 0.6],
        },
      );

      articleSections.forEach((section) => {
        observer.observe(section);
      });
    }
  };

  setupTableOfContents();

  /* =====================================================
     11. PERSONAL REFLECTION
  ===================================================== */

  const reflectionInput = select("#reflectionInput");
  const saveReflection = select("#saveReflection");
  const reflectionMessage = select("#reflectionMessage");

  const reflectionKeyMap = {
    "introduction-to-quran": "introductionToQuran",
    "revelation-and-compilation": "revelationAndCompilation",
    "tajwid-and-recitation": "tajwidAndRecitation",
    "understanding-tafsir-and-meaning": "understandingTafsirAndMeaning",
    "reflection-and-tadabbur": "reflectionAndTadabbur",
    "memorisation-and-application": "memorisationAndApplication",
  };

  const reflectionTopicId =
    reflectionKeyMap[selectedTopicId] || "introductionToQuran";

  const reflectionStorageKey = `azkaFarid_reflection_${reflectionTopicId}`;

  if (reflectionInput) {
    try {
      const saved = localStorage.getItem(reflectionStorageKey);

      if (saved !== null) {
        reflectionInput.value = saved;

        if (reflectionMessage) {
          reflectionMessage.textContent =
            "Refleksi tersimpan sebelumnya berhasil dimuat dari browser ini.";
        }
      }
    } catch (error) {
      console.warn("Reflection could not be loaded:", error);
    }
  }

  if (saveReflection && reflectionInput) {
    saveReflection.addEventListener("click", () => {
      const value = reflectionInput.value.trim();

      if (!value) {
        if (reflectionMessage) {
          reflectionMessage.textContent =
            "Tuliskan refleksimu terlebih dahulu sebelum menyimpan.";

          reflectionMessage.style.color = "#dc5151";
        }

        reflectionInput.focus();
        return;
      }

      try {
        localStorage.setItem(reflectionStorageKey, value);

        if (reflectionMessage) {
          reflectionMessage.textContent =
            "Refleksimu berhasil disimpan di browser perangkat ini.";

          reflectionMessage.style.color = "#15976c";
        }
      } catch (error) {
        if (reflectionMessage) {
          reflectionMessage.textContent =
            "Browser tidak dapat menyimpan refleksi. Periksa pengaturan penyimpanan browser.";

          reflectionMessage.style.color = "#dc5151";
        }

        console.warn("Reflection could not be saved:", error);
      }
    });
  }

  /* =====================================================
     12. INITIAL PAGE STATE
  ===================================================== */

  const initialQuizResult = select("#quizResult");

  if (initialQuizResult) {
    initialQuizResult.hidden = true;
  }

  updateReadingProgress();

  console.log(
    `Azka Farid Topic Detail initialized: ${
      selectedTopic ? selectedTopic.title : "Introduction to the Qur'an"
    }`,
  );
});

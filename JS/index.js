const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".proj-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".proj-next",
    prevEl: ".proj-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});
const swiper_proj = new Swiper(".mySwiper_proj", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination-2", // ✅ هذا هو الموجود في HTML
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});

// JavaScript
const swiper_home = new Swiper(".mySwiper_home", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  speed: 3000, // حركة ناعمة وبطيئة
  autoplay: {
    delay: 0, // بدون توقف بين السلايدات
    disableOnInteraction: false,
  },

  allowTouchMove: false, // إلغاء التفاعل اليدوي
  freeMode: true,
  freeModeMomentum: false,

  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 6 },
  },
});

const counters = document.querySelectorAll(".counter");

const options = {
  threshold: 0.5,
};

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = target / 200; // تعديل السرعة حسب الحاجة

  const updateCount = () => {
    count += speed;
    if (count < target) {
      counter.textContent = Math.ceil(count).toLocaleString();
      requestAnimationFrame(updateCount);
    } else {
      counter.textContent = target.toLocaleString();
    }
  };

  updateCount();
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      obs.unobserve(entry.target); // يشغل العداد مرة واحدة فقط
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});

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
const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    langButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

 $(document).ready(function() {
      $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Clear previous error messages
        $('.error-message').text('');
        let isValid = true;

        // Get form values
        const name = $('#name').val().trim();
        const phone = $('#phone').val().trim();
        const message = $('#message').val().trim();

        // Validation
        if (!name) {
          $('#nameError').text('الرجاء إدخال الاسم بالكامل');
          isValid = false;
        }

        // Saudi phone number validation (starts with +9665 or 05 followed by 8 digits)
        const phoneRegex = /^(?:\+9665|05)\d{8}$/;
        if (!phone) {
          $('#phoneError').text('الرجاء إدخال رقم الهاتف');
          isValid = false;
        } else if (!phoneRegex.test(phone)) {
          $('#phoneError').text('الرجاء إدخال رقم هاتف سعودي صحيح (مثال: +966512345678 أو 0551234567)');
          isValid = false;
        }

        if (!message) {
          $('#messageError').text('الرجاء إدخال رسالتك');
          isValid = false;
        }

        if (isValid) {
          // Ajax submission
          $.ajax({
            url: '/submit-form', // Replace with your actual endpoint
            type: 'POST',
            data: {
              name: name,
              phone: phone,
              message: message
            },
            success: function(response) {
              alert('تم إرسال النموذج بنجاح!');
              $('#contactForm')[0].reset(); // Reset form
            },
            error: function(xhr, status, error) {
              alert('حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى لاحقاً.');
            }
          });
        }
      });
    });
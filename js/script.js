// Tarjima ma'lumotlari
const translations = {
    uz: {
      welcome: "Xush kelibsiz!",
      description: "Bu saytda tilni almashtirish funksiyasi qo‘llangan."
    },
    ru: {
      welcome: "Добро пожаловать!",
      description: "На этом сайте реализована функция смены языка."
    },
    en: {
      welcome: "Welcome!",
      description: "This site has a language switching feature."
    }
  };
  
  // Hozirgi tilni saqlash
  let currentLanguage = 'uz';
  
  // Tilni almashtirish funksiyasi
  function changeLanguage(lang) {
    currentLanguage = lang;
  
    // HTML elementlarini yangilash
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const translationKey = el.getAttribute("data-i18n");
      el.textContent = translations[lang][translationKey];
    });
  }
  
  // Sahifa yuklanganda tilni sozlash
  document.addEventListener("DOMContentLoaded", () => {
    changeLanguage(currentLanguage);
  });
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let index = 0;
  
  // Keyingi slaydga o'tish
  function nextSlide() {
      index = (index + 1) % images.length;
      updateCarousel();
  }
  
  // Oldingi slaydga qaytish
  function prevSlide() {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
  }
  
  // Karuselni yangilash
  function updateCarousel() {
      const width = images[0].clientWidth;
      slides.style.transform = `translateX(-${index * width}px)`;
  }
  
  // Tugmalar uchun eventlarni qo'shish
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  
  // Avtomatik slayd almashtirish
  setInterval(nextSlide, 3000); // Har 3 soniyada o'zgaradi
// Function to open the modal and display product details
function openModal(card) {
    // Get the image, title, and price of the clicked product
    const productImage = card.querySelector('img').src;
    const productTitle = card.querySelector('h3').innerText;
    const productPrice = card.querySelector('.pq').innerText.split('\n')[0].trim();

    // Set the modal content with the product details
    document.getElementById('modalProductImage').innerHTML = `<img src="${productImage}" style="width: 100%; max-width: 300px;" alt="${productTitle}">`;
    document.getElementById('modalProductTitle').innerText = productTitle;
    document.getElementById('modalProductPrice').innerText = productPrice;

    // Show the modal
    document.getElementById('productModal').style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('productModal').style.display = "none";
}

// Preloaderni yo'q qilish
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const siteContent = document.querySelector('.site-content');

  // Preloaderni yashirish
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 1s ease'; // Animatsiya davomiyligi

  setTimeout(() => {
      preloader.style.display = 'none'; // Preloaderni yashirish
      siteContent.style.display = 'block'; // Saytni ko'rsatish
      document.body.style.overflow = 'auto'; // Scrollni yoqish
  }, 1500); // 1 soniya (1000 millisekund) kutish
});

    
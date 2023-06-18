import { Nav } from "./template/parts/nav/nav.js";
import { Footer } from "./template/parts/footer/footer.js";

export var ABS_PATH = window.location.origin;
ABS_PATH !== "http://127.0.0.1:5500"
  ? (ABS_PATH = ABS_PATH + "/educajogos")
  : false;

Nav();
Footer();

// MEDIA QUERIES
let screenWidth = window.screen.width;

screenWidth >= 900
  ? $("head").prepend(
      `<link rel="stylesheet" href="${ABS_PATH}/public/css/media-queries/large.css">`
    )
  : false;
screenWidth > 450 && screenWidth < 900
  ? $("head").prepend(
      '<link rel="stylesheet" href="./public/css/media-queries/medium.css">'
    )
  : false;
screenWidth < 450
  ? $("head").prepend(
      '<link rel="stylesheet" href="./public/css/media-queries/small.css">'
    )
  : false;

$(".cacapalavras").click(() => {
  window.location.href = "./jogos/caca-palavras";
});

$(".mestrematico").click(() => {
  window.location.href = "./jogos/mestrematico";
});

// MAIN SLIDER
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const bulletsContainer = document.querySelector(".slider-bullets");
const bullets = [];

let currentSlide = 0;
let slideInterval;
let touchStartX = 0;
let touchEndX = 0;

function createBullets() {
  for (let i = 0; i < slides.length; i++) {
    const bullet = document.createElement("button");
    bullet.addEventListener("click", () => {
      goToSlide(i);
    });
    bulletsContainer.appendChild(bullet);
    bullets.push(bullet);
  }
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  currentSlide = index;
  updateSlidePosition();
  updateActiveBullet();
}

function updateSlidePosition() {
  const slideWidth = slides[0].offsetWidth;
  const newPosition = -slideWidth * currentSlide;
  slider.style.transform = `translateX(${newPosition}px)`;
}

function updateActiveBullet() {
  bullets.forEach((bullet, index) => {
    bullet.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlidePosition();
  updateActiveBullet();
}

function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 7000);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

try {
  slider.addEventListener("mousedown", () => {
    stopSlideInterval();
  });

  slider.addEventListener("mouseup", () => {
    startSlideInterval();
  });

  slider.addEventListener("touchstart", (event) => {
    stopSlideInterval();
    touchStartX = event.touches[0].clientX;
  });

  slider.addEventListener("touchmove", (event) => {
    touchEndX = event.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      updateSlidePosition();
      updateActiveBullet();
    }
    startSlideInterval();
  });

  $(".slide .caca-palavras-button").click(() => {
    window.location.href =
      `${ABS_PATH}/jogos/caca-palavras`;
  });

  $(".slide .contact-button").click(() => {
    window.location.href = `${ABS_PATH}/sobre`;
  });

  createBullets();
  goToSlide(0);
  startSlideInterval();
} catch (error) {
  console.log(error);
}

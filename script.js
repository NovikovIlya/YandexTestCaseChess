import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const next = document.querySelector('.carousel-button');
next.addEventListener('click', () => {
  console.log('вперед');
  swiper.slideNext();
});

const prev = document.querySelector('.carousel-button-left');
prev.addEventListener('click', () => {
  console.log('назад');
  swiper.slidePrev();
});

////////////////////////// Swiper2
const numberOfSlides = document.querySelectorAll('.mySwiper2').length;
var swiper2 = new Swiper('.mySwiper2', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: '.swiper-pagination1',
  },
  mousewheel: true,
  keyboard: true,
  on: {
    init: function () {
      if (this.activeIndex === 0) {
        console.log('первый');
        document.querySelector('.btn2').classList.toggle('opac');
      } else {
        document.querySelector('.btn2').classList.toggle('opac');
      }
    },
  },
});
swiper2.on('slideChange', function () {
  if (swiper2.activeIndex === 0) {
    console.log('первый');
    document.querySelector('.btn2').classList.add('opac');
  } else {
    document.querySelector('.btn2').classList.remove('opac');
  }
});
const next2 = document.querySelector('.btn1');
next2.addEventListener('click', () => {
  console.log('вперед');
  swiper2.slideNext();
});

const prev2 = document.querySelector('.btn2');
prev2.addEventListener('click', () => {
  console.log('назад');
  swiper2.slidePrev();
});

////////////////////////// Swiper3
const swiper3 = new Swiper('.mySwiper3', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
});

const next3 = document.querySelector('.buton-go');
next3.addEventListener('click', () => {
  console.log('вперед');
  swiper3.slideNext();
});

const prev3 = document.querySelector('.buton-nazad');
prev3.addEventListener('click', () => {
  console.log('назад');
  swiper3.slidePrev();
});

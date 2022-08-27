import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 50,
    stopOnLastSlide: true,
    disableOnInteraction: false,
    loop: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    370:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    430: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    892: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200:{
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }

});

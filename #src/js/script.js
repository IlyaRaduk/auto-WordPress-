import Swiper, { Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints:{
    320:{
      slidesPerView: '1',
    },
    830:{
      slidesPerView: '2',
    },
    1200:{
      slidesPerView: '3',
    }
  },
});
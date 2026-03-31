import './scss/main.scss';
import { initBurger } from './js/burger';
import { initPlayer } from './js/player';
import { initModal } from './js/modal';
import { initLazyIframes } from './js/iframe-lazy';
import { initBookingVideo } from './js/booking-video';
import { initTextSliders } from './js/text-slider';
import { initFaq } from './js/faq';

document.addEventListener('DOMContentLoaded', () => {
  initBurger();
  initPlayer();
  initModal();
  initLazyIframes();
  initBookingVideo();
  initTextSliders();
  initFaq();

  // Reveal on scroll
  document.querySelectorAll('.page .img-wrap, .schedule ul hr').forEach(el => {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-visible'); }
    }, { threshold: 0.1 }).observe(el);
  });
});

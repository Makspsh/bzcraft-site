import './style.scss';

import Swiper from 'swiper';
import 'swiper/css';

var swiper = new Swiper(".mySwiper", {
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      grabCursor: false,
      centeredSlides: true,
      rewind: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: false,
      },
      initialSlide: 4,
    });

// up btn

$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
        } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});
const liveSlider = new Swiper('.live__slider', {
    speed: 600,
    loop: true,
    effect: "slide",
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


   
navigation: {
    nextEl: '.live__slider-arrow--next', 
    prevEl: '.live__slider-arrow--prev', 
  },
  });



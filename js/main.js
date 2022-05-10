$(document).ready(function(){
  
    var swiper_slider = new Swiper('.slider_wrapper', {
      prevButton: '.slider_nav.prev',
      nextButton: '.slider_nav.next',
      slidesPerView: 9,
      centeredSlides: true,
      effect: 'coverflow',
      slidesOffsetBefore: 0,
      speed: 800,
      coverflow: {
        rotate: 0,
        stretch: -10,
        depth: 100,
        modifier: 3,
        slideShadows : false
      },
      breakpoints: {
        320:{slidesPerView: 3},
        640:{slidesPerView: 5},
        1024:{slidesPerView: 7}
      },
      simulateTouch: true
    });
    
    var nb_slides = swiper_slider.params.slidesPerView;
    swiper_slider.slideTo(Math.floor(nb_slides / 2));
    
    $('.swiper-wrapper a').on('click', function(e){
      e.preventDefault();
      console.log($(this).index());
      swiper_slider.slideTo($(this).index());
      return false;
    });
  });
    
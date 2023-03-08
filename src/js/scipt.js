/* $(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        /* adaptiveHeight: true, */
       /*  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              } 
            }
        ]
      });
  }); */ 



  var slider = tns({
    container:'.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
      991: {
        items: 1,
        nav: true
      },
      767: {
        items: 1,
        nav: true
      },
      575: {
        items: 1,
        nav: true
      },
      320: {
        items: 1,
        nav: true
      },
    }
  });

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };
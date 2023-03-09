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

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

     
    function toggleSlide(item){
      $(item).each(function(i){
        $(this).on('click',function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');
      

     
    });
    })(jQuery);
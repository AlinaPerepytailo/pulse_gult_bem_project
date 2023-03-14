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
    
     //Modal
    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #oder, #thanks').fadeOut('slow');
    });


    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#oder .modal__descr').text($('.catalog-item__subtitle').eq(i).text())    
        $('.overlay, #oder').fadeIn('slow');    
      })
      
    });

    function validateForms(form){
      $(form).validate({
        rules:{
          name: "required",
          phone: "required",
          email:{
            required:true,
            email:true,
          }
        },
        messages: {
          name: "Будь ласка, вкажіть своє ім'я",
          phone: "Будь ласка, вкажіть свій номер телефону",
          email: {
            required: "Будь ласка, вкажіть адресу своєї електронної пошти",
            email: "Не вірна адреса електронної пошти"
          }
        }
      });
    };
    
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#oder form');

    $('input[name=phone]').mask("+38 (999) 999-9999");




  });
  })(jQuery);
    
    
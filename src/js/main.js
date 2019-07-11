$(document).ready(function(){

  var link_active = $('.blockmenu__link');
  var menu = $('.blockmenu');
  var menuBtn =$('.menu-btn');

  menuBtn.click(function(){
    menu.toggleClass('blockmenu_active');
    menuBtn.toggleClass('menu-btn_active');

  });

  link_active.click(function(){ 
    menu.toggleClass('blockmenu_active'); //выезжающее меню
    menuBtn.removeClass('menu-btn_active'); //крестик
  });

  //Анимация на меню

  $('.link-home').click(function(event){
    // event.preventDefault();
    $('.login-text-container').toggleClass('login-text-container-active');

  });


  //Активация поп-апа для обратного звонка
  // $('.call-order').click(function(){
  //   $('.contact-form').addClass('contact-form--active');

  // })

  // $('.contact-form-close').click(function(){
  //   $('.contact-form').removeClass('contact-form--active');
  // })


  //Анимация чисел
  $('#fun-level-1').animateNumber(
    {
      number: 60,
    },
    {
      easing: 'swing',
      duration: 5000
    }
  );

  $('#fun-level-2').animateNumber(
    {
      number: 45,
      // 'font-size': '48px',
    },
    {
      easing: 'swing',
      duration: 5000
    }
  );

  $('#fun-level-3').animateNumber(
    {
      number: 40,
    },
    {
      easing: 'swing',
      duration: 5000
    }
  );

  $('#fun-level-4').animateNumber(
    {
      number: 1000,
    },
    {
      easing: 'swing',
      duration: 5000
    }
  );


	
});

//анимация блоков при скролле
$(window).scroll(function (){
    $('.mov').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
            $(this).addClass('slideInUp');
        }
    });
});


//Вертикальное меню
jQuery(document).ready(function($){
  var contentSections = $('.cd-section'),
    navigationItems = $('#cd-vertical-nav a');

  updateNavigation();
  $(window).on('scroll', function(){
    updateNavigation();
  });

  //smooth scroll to the section
  navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
      $('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
      $('.touch #cd-vertical-nav').removeClass('open');
    });

  function updateNavigation() {
    contentSections.each(function(){
      $this = $(this);
      var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        navigationItems.eq(activeSection).addClass('is-selected');
      }else {
        navigationItems.eq(activeSection).removeClass('is-selected');
      }
    });
  }

  function smoothScroll(target) {
        $('body,html').animate(
          {'scrollTop':target.offset().top},
          600
        );
  }

  //скроллинг

  $('.top').click(function(){
    $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
  });
// функция прокрутки
  $(window).scroll(function(){
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });


});
/**
* Template Name: BizPage - v2.0.0
* Template URL: https://bootstrapmade.com/bizpage-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";


	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

  // ScrollUp 

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".scrollUp").addClass('active');
    } else {
      $('.scrollUp').removeClass('active');
    }
  });

  $('.scrollUp').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1000, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('menu-active menu-item-active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active');
      }
    });
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
      introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') + "')");
    $(this).children('.carousel-background').remove();
  });

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
  });

  // Skills section
  // $('#skills').waypoint(function() {
  //   $('.progress .progress-bar').each(function() {
  //     $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //   });
  // }, {
  //   offset: '80%'
  // });

  // jQuery counterUp (used in Facts section)
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });


  
  // individual Solutions Carousel initiation

  $('#individual_solution .owl-carousel').owlCarousel({

    items:1,
    margin:10,
    nav: false,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots : false,
    autoplay : false,
    autoplayTimeout: 10000,
    // animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    

  });

 
  //------------   // Mechanical Solution //------------------


  // Automotive Section

  var owl_auto = $('#owl-mec-auto .owl-carousel');

  $('#owl-mec-auto nav .pagination li#next-pg').click(function() {
    owl_auto.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-mec-auto nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_auto.trigger('prev.owl.carousel');
  });

$('#owl-mec-auto nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_auto.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_auto.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }
    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }
    // alert(curr_elem_id)

    $('#owl-mec-auto nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });


// Medical Section 

  var owl_med = $('#owl-mec-med .owl-carousel');

  $('#owl-mec-med nav .pagination li#next-pg').click(function() {
    owl_med.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-mec-med nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_med.trigger('prev.owl.carousel');
  });

$('#owl-mec-med nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_med.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_med.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }

    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }

    // alert(curr_elem_id)

    $('#owl-mec-med nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });


// Industrial Section 

  var owl_indus = $('#owl-mec-indus .owl-carousel');

  $('#owl-mec-indus nav .pagination li#next-pg').click(function() {
    owl_indus.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-mec-indus nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_indus.trigger('prev.owl.carousel');
  });

$('#owl-mec-indus nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_indus.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_indus.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }

    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }
    
    // alert(curr_elem_id)

    $('#owl-mec-indus nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });


  //------------   // Industrial Automation //------------------

  // Design Process Automation 

  var owl_indus_des = $('#owl-ind-design .owl-carousel');

  $('#owl-ind-design nav .pagination li#next-pg').click(function() {
    owl_indus_des.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-ind-design nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_indus_des.trigger('prev.owl.carousel');
  });

  $('#owl-ind-design nav .pagination li.pg a').click(
      function () {
        var val = $(this).html();
        owl_indus_des.trigger('to.owl.carousel',[val-1,100]);

    });

  owl_indus_des.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }

    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }

    // alert(curr_elem_id)

    $('#owl-ind-design nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });


// Factory Automation Section 

  var owl_indus_fact = $('#owl-ind-fact .owl-carousel');

  $('#owl-ind-fact nav .pagination li#next-pg').click(function() {
    owl_indus_fact.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-ind-fact nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_indus_fact.trigger('prev.owl.carousel');
  });

$('#owl-ind-fact nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_indus_fact.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_indus_fact.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }

    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }
    
    // alert(curr_elem_id)

    $('#owl-ind-fact nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });



  //------------//AL ML and IoT Solution//------------------


  // Automotive Section

  var owl_aimliot_auto = $('#owl-aimliot-auto .owl-carousel');

  $('#owl-aimliot-auto nav .pagination li#next-pg').click(function() {
    owl_aimliot_auto.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-aimliot-auto nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_aimliot_auto.trigger('prev.owl.carousel');
  });

$('#owl-aimliot-auto nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_aimliot_auto.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_aimliot_auto.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }
    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }
    // alert(curr_elem_id)

    $('#owl-aimliot-auto nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });


// Medical Section 

  var owl_aimliot_med = $('#owl-aimliot-med .owl-carousel');

  $('#owl-aimliot-med nav .pagination li#next-pg').click(function() {
    owl_aimliot_med.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-aimliot-med nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_aimliot_med.trigger('prev.owl.carousel');
  });

$('#owl-aimliot-med nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_aimliot_med.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_aimliot_med.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }

    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }

    // alert(curr_elem_id)

    $('#owl-aimliot-med nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });



//------------//Electronic and Embeded Solution//------------------


  // Automotive Section

  var owl_ene_auto = $('#owl-elec-auto .owl-carousel');

  $('#owl-elec-auto nav .pagination li#next-pg').click(function() {
    owl_ene_auto.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-elec-auto nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_ene_auto.trigger('prev.owl.carousel');
  });

$('#owl-elec-auto nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_ene_auto.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_ene_auto.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }
    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }
    // alert(curr_elem_id)

    $('#owl-elec-auto nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });


// Medical Section 

  var owl_ene_med = $('#owl-elec-med .owl-carousel');

  $('#owl-elec-med nav .pagination li#next-pg').click(function() {
    owl_ene_med.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('#owl-elec-med nav .pagination li#prev-pg').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl_ene_med.trigger('prev.owl.carousel');
  });

$('#owl-elec-med nav .pagination li.pg a').click(
    function () {
      var val = $(this).html();
      owl_ene_med.trigger('to.owl.carousel',[val-1,100]);

  });

  owl_ene_med.on('changed.owl.carousel', function(event) {

    var curr_elem_id ="ind"+ (event.item.index-1);
    if (curr_elem_id == "ind0"){
      curr_elem_id = "ind3";
    }

    if (curr_elem_id == "ind4"){
      curr_elem_id = "ind1";
    }

    // alert(curr_elem_id)

    $('#owl-elec-med nav .pagination li.'+curr_elem_id).addClass('active').siblings().removeClass('active');
  
  });


  // Porfolio isotope and filter
  // var portfolioIsotope = $('.portfolio-container').isotope({
  //   itemSelector: '.portfolio-item',
  //   layoutMode: 'fitRows'
  // });

  // $('#portfolio-flters li').on('click', function() {
  //   $("#portfolio-flters li").removeClass('filter-active');
  //   $(this).addClass('filter-active');

  //   portfolioIsotope.isotope({
  //     filter: $(this).data('filter')
  //   });
  // });

  // Initiate venobox (lightbox feature used in portofilo)
  // $(document).ready(function() {
  //   $('.venobox').venobox();
  // });

  // Clients carousel (uses the Owl Carousel library)
  // $(".clients-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     768: {
  //       items: 4
  //     },
  //     900: {
  //       items: 6
  //     }
  //   }
  // });

  // Testimonials carousel (uses the Owl Carousel library)
  // $(".testimonials-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1
  // });

  $('#about-slider').owlCarousel({
    items:1,
    loop:true,
    margin:15,
    nav: true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots : true,
    autoplay : false,
    animateOut: 'fadeOut'
  });

  // Click effect on up and down arrow of the our value page 
  $(document).ready(function() 
  {        
    $("#about .wrap_up .wrap_up_inner,#about .wrap_up .wrap_icon").click(function () 
      { 
      if ( $("#about .wrap_up").hasClass("active") ) 
          {
          $("#about .wrap_up").removeClass("active");
          }
      else{
        $("#about .wrap_up").addClass("active");
          }

      if ( $("#about .about-col.bg1").hasClass("active") ) 
          {
          $("#about .about-col.bg1").removeClass("active");
          }
      else{
        $("#about .about-col.bg1").addClass("active");
          }
      });
    
    // Hover effect on the Our Values
    $("#about .wrap_up .wrap_up_inner,#about .wrap_up .wrap_icon").hover(function () 
    
      {
        $("#about .wrap_up .wrap_icon").addClass("hover"); 
      }, function () 
      {
        $("#about .wrap_up .wrap_icon").removeClass("hover");   
      }
    );

  });

})(jQuery);
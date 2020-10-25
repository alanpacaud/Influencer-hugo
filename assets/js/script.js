  // Preloader js
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    $('body').scrollspy({
      target: '#navbarmain',
      offset: 100
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.smoth-scroll').on('click', function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 200
      }, 1000);
      e.preventDefault();
    });


    $('.testimonial-wrap').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });




    $('.book-preview').each(function () {
      $(this).find('.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });


    /* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */


    /*$(window).on('scroll', function () {
      if ($(window).scrollTop() > 10) {
        $('.site-header').addClass('header-white');
      } else {
        $('.site-header').removeClass('header-white');
      }

    });*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 10) {
        $('.site-header').addClass('header-golden');
      } else {
        $('.site-header').removeClass('header-golden');
      }

    });


    // Smooth scrolling using jQuery easing
    // jQuery for page scrolling feature - requires jQuery Easing plugin


    // Closes responsive menu when a scroll trigger link is clicked
    $('.smoth-scroll').on('click', function (event) {
      $('.navbar-collapse').collapse('hide');
    });


  })(jQuery);

  function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});

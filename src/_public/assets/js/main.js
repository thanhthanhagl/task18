$(document).ready(function () {
  //-------------Menu click
  $(".c-header__item").click(function () {
    $(".c-header__submenu").removeClass("is-click");
    var submenu = $(this).next();
    if (submenu) {
      $(this).next().addClass("is-click");
    }
    $(this).click(function () {
      $(this).next().toggleClass("is-click");
    });
  });
  //----------slick slider------------
  $('.c-mainvisual__slider').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplayspeed: 3000,
    speed: 2000,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false
        }
      }
    ]
  });
  function setslide() {
    if ($(window).width() <= 1023) {
      $(".c-blog__list").not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: "<button type='button' class='c-blog__next slick-next'></button>",
        prevArrow: "<button type='button' class='c-blog__prev slick-prev'></button>",
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
      });
    }
    else {
      $('.c-blog__list.slick-initialized').slick('unslick');
    }
  }

  $(window).on('resize', function () {
    setslide();
  });
  $(window).on('load', function () {
    setslide();
  });
  //----------------header scroll----------
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $(".c-header").addClass("is-scroll");
      $(".c-header__main").addClass("is-scroll");
      $(".c-header__logoimg").addClass("is-scroll");
      $(".c-backtotop").addClass("is-scroll");
    }
    else {
      $(".c-header").removeClass("is-scroll");
      $(".c-header__main").removeClass("is-scroll");
      $(".c-header__logo").removeClass("is-scroll");
      $(".c-backtotop").removeClass("is-scroll");
    }    
  }).scroll();
  $(".c-backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  })
  //-----------------open menu mobile -------
  $(".c-header__iconmenu").click(function () {
    if ($(window).scrollTop() < 30) {
      $(".c-header").toggleClass("is-scroll");
      $('.c-backtotop').removeClass("is-scroll");
    }
    $(".c-header__navmb").toggleClass("is-open");
    $(".c-header__icon").toggleClass("is-open");
    $('body').toggleClass("is-fixed");
  });
  var parent = $(".c-header__itemmb").next();
  if (parent) {
    parent.parent().addClass("is-parent");
  }
  $(".c-header__itemmb").click(function () {
    $(".c-header__submenumb").removeClass("is-click");
    var item = $(this).next();
    console.log(item);
    if (item.length > 0) {
      $(this).next().toggleClass("is-click");
      $(".c-header__navmb").animate({scrollTop: 0},0);
    }
    else {
      $(".c-header__navmb").toggleClass("is-open");
      $(".c-header__icon").toggleClass("is-open");
      $('body').toggleClass("is-fixed");
    }
  });
  $(".c-header__")
  $(".c-header__back").click(function () {
    $(this).parent().removeClass("is-click");
  })
  //---------------form validation --------------
  $(".c-form__content").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        email: true,
      },
      "phone": {
        required: true,
        fnType: true,
        maxlength: 10,
        digits: true,
      },
      "note": {
        required: true
      },
    },
    messages: {
      "name": {
        required: "この項目は必須です。"
      },
      "email": {
        required: "この項目は必須です。",
        email: "example@gmail.com"
      },
      "phone": {
        required: "この項目は必須です。",
        fnType: "00-0000-0000",
        maxlength: "00-0000-0000",
        digits: "00-0000-0000",
      },
      "note": {
        required: "この項目は必須です。"
      },
    }
  });
  $.validator.addMethod('fnType', function (value) {
    return value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
  }, 'Enter Valid  phone number');
  $('.c-form__input').blur(function () {
    if ($(this).val().length === 0) {
      $(this).nextAll('.c-form__error').addClass('is-error');
    }
    else {
      $(this).nextAll('.c-form__error').removeClass('is-error');
    }
  });
  $(".c-form__btn").click(function () {
    $('.c-form__error').removeClass('is-error');
    $(".c-form__input").next('label').show();
  });
});
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
    cssEase: 'linear'
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
        nextArrow: "<button type='button' class='c-blog__next slick-next'>></button>",
        prevArrow: "<button type='button' class='c-blog prev slick-prev'><</button>",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
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
  //----------form validate ----------
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
  $("#is-submitted").click(function () {
    $('.c-form__error').removeClass('is-error');
    $(".c-form__input").next('label').show();
  });
  //----------------header scroll----------
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $(".c-header").addClass("is-scroll");
      $(".c-header__main").addClass("is-scroll");
      $(".c-header__logoimg").addClass("is-scroll");
    }
    else {
      $(".c-header").removeClass("is-scroll");
      $(".c-header__main").removeClass("is-scroll");
      $(".c-header__logo").removeClass("is-scroll");
    }
    $(".c-backtotop").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    })
  }).scroll();
});
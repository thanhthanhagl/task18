$(document).ready(function () {
    //-------------Menu click
    $(".c-header__item").click(function(){
        $(".c-header__submenu").removeClass("is-click");
        var submenu = $(this).next();
        if(submenu){
            $(this).next().addClass("is-click");
        }  
        $(this).click(function(){
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
    cssEase:'linear'
  });
});
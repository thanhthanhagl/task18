$(document).ready(function () {
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
});
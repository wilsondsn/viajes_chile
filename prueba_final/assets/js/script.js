$(function() {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	var menu = $("nav");
    if (scroll >= 200) {
        menu.addClass("navbar-light");
        menu.addClass("bg-light");
        menu.removeClass("navbar-dark")
    } else {
        menu.removeClass("navbar-light");
        menu.removeClass("bg-light");
        menu.addClass("navbar-dark")
    }
});

});

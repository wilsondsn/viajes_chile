$(function() {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	var menu = $("nav");
    if (scroll >= 200) {
        menu.addClass("negro");
    } else {
        menu.removeClass("negro");
    }
});

});

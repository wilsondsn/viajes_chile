$(function() {

// Añadir clase al nav al hacer scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	var menu = $("nav");
    if (scroll >= 200) {
        menu.addClass("negro");
    } else {
        menu.removeClass("negro");
    }
});

// Añadir clase .active al elemento del menú seleccionado y hacer scroll
$('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
         var target = this.hash,
         menu = target;
        $target = $(target);
              
       $('html, body').stop().animate({
            'scrollTop': $target.offset().top+1
        }, 600, 'swing', function () {
            window.location.hash = target;
        });
    });

});

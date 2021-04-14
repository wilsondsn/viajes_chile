$(function() {

    // BootstrapJS: ScrollSpy --> Marcar el en menú la navegación por scroll, cuando se realiza con el mouse.
    // Añade la clase .active a cada item según se transite por cada uno.
    $('body').scrollspy({ target: '#navbarNav' })

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

    // Añadir clase .active al elemento del menú seleccionado y hacer scroll hacia el mismo
    
    $("a").click(function(event) { 
        // alert(this.hash);
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $('a').each(function() { 
                $(this).removeClass('active');
            })
            $(this).addClass('active'); 
            var target = this.hash,
                menu = target;
            $target = $(target);

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function() { 
                window.location.hash = gato; 
           });
        };

    });


    // BootstrapJS: Activa Tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });




}); //
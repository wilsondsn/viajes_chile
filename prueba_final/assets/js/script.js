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

    $("a").click(function(event) { // seleccionamos la etiqueta a y un clic como función del evento
        // alert(this.hash);
        if (this.hash !== "") { 
            event.preventDefault(); 

            var gato = this.hash; // 

            $('a').each(function() { // al hacer clic en un link, remover la clase active de otro que la tenga.
                $(this).removeClass('active');
            })
            $(this).addClass('active'); // al hacer clic en un link, añadir a éste la clase active
            var target = this.hash,
                menu = target;
            $target = $(target);

            $("html, body").animate({
                scrollTop: $(gato).offset().top 
            }, 800, function() { // 800 milisegundos
                window.location.hash = gato; // busca la locación de la variable gato.
            });
        }
    });


}); //
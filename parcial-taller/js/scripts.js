/*!
    Último cambio: 28/06/2023
    Autor: Guido Halley
*/

(function($) {

    // Mostrar el año actual
    $("#current-year").text(new Date().getFullYear());

    // Eliminar la clase 'no-js'
    $('html').removeClass('no-js');

    // Animar hasta la sección cuando se hace clic en el enlace de navegación
    $('header a').click(function(e) {

        // Tratarlo como un enlace normal si tiene la clase 'no-scroll'
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Ocultar el menú una vez que se hace clic en él (en dispositivos móviles)
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Desplazarse hacia arriba
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Desplazamiento del encabezado
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
      
        // Agregar o quitar la clase 'header-fixed' según el desplazamiento
        if (scrollDistance >= 50) {
          $('header').addClass('header-fixed');
        } else {
          $('header').removeClass('header-fixed');
        }
    });

    // Desplazarse al primer elemento
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Crear la línea de tiempo
    $('#experience-timeline').each(function() {

        $this = $(this); // Guardar referencia a esto
        $userContent = $this.children('div'); // contenido del usuario

        // Crear cada bloque de la línea de tiempo
        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Agregar iconos a cada bloque
        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Agregar fechas a la línea de tiempo si existen
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Agregar si existe
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    // Abrir el menú móvil
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Cerrar el menú móvil
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Cargar proyectos adicionales
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
  
    // Animar el contenido cuando aparezca en la ventana
    $('#lead-content').each(function() {
        var offset = $(this).offset().top;
        var windowHeight = $(window).height();
  
        if (scrollDistance + windowHeight >= offset) {
            $(this).addClass('animated');
        } else {
            $(this).removeClass('animated');
        }
    });
});


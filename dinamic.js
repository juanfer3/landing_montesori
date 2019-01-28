$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true
    });

    $('.contenedor_medellin').mouseover(function(){
       
        $('.contenido_medellin').addClass('contenido_medellin_hover');
        $('#contenedor_oriente').addClass('contenedor_oriente_hover');
    })
    $('.contenedor_medellin').mouseleave(function(){
        $('.contenido_medellin').removeClass('contenido_medellin_hover');
        $('#contenedor_oriente').removeClass('contenedor_oriente_hover');
    })
})




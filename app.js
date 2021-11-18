//cuando la pagina cargue ejecuta esta funcion
window.addEventListener('load', function(){
    //la clase donde esta la lista //dentro de {} pondras las opciones
    new Glider(document.querySelector('.lista-slide'), {
        slidesToShow: 3,
        slidesToScroll: 1, //cuantos slide avanza
        arrows: {
            prev: '.slide-anterior',
            next: '.slide-siguiente'
        }
    });
});

//cuando la pagina cargue ejecuta esta funcion
window.addEventListener('load', function(){
    //la clase donde esta la lista //dentro de {} pondras las opciones
    new Glider(document.querySelector('.lista-slide-recomendados'), {
        slidesToShow: 3,
        slidesToScroll: 1, //cuantos slide avanza
        arrows: {
            prev: '.slide-anterior-r',
            next: '.slide-siguiente-r'
        }
    });
});
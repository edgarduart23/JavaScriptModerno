// Event Bubbling
// tienes un elemento y das click en el, y otros elementos tambien seleccionados


const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');
// quiero hacer click y ese evento se propaga a los demas elementos
card.addEventListener('click', function(e){
    
    console.log('click en card');
    // stopPropagation: El método stopPropagation() de la interfaz Event evita la propagación adicional 
    //del evento actual en las fases de captura y bubbling.
    
    e.stopPropagation();
})

infoCurso.addEventListener('click', function(e){
    console.log('click en Info Curso');
    e.stopPropagation();
})

agregarCarrito.addEventListener('click', function(e){
    console.log('click en Agregar a Carrito');
    e.stopPropagation();
})

// el problema es que si hago click se activen otras cosas que no quiero
// hay varias formas de solucionarlo

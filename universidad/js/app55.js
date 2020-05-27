// Otros Eventos con el mouse
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlaces');
const boton =  document.querySelector('#vaciar-carrito');
// Click
//boton.addEventListener('click', obtenerEvento)

// Doble Click
//boton.addEventListener('dblclick', obtenerEvento);

// Mouse Enter
//boton.addEventListener('mouseenter', obtenerEvento);

// Mouse leave
//boton.addEventListener('mouseleave', obtenerEvento);

// Mouse Over
//boton.addEventListener('mouseover', obtenerEvento);

// Mouse Out
//boton.addEventListener('mouseout', obtenerEvento);

// Mouse Down
//boton.addEventListener('mousedown', obtenerEvento);

// Mouse Up
//boton.addEventListener('mouseup', obtenerEvento);

// se puede hacer sobre otros elementos
encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
    
    //type: nos va a dar que tipo de eventos hicimos
    console.log(`EVENTO: ${e.type}`);
}
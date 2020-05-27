// Eventos para los inputs
const busqueda = document.querySelector('#buscador');

// keydown: cuando ingreso una texto
busqueda.addEventListener('keydown', obtenerEvento);

// keyup:cada vez que dejo de apretar la tecla
busqueda.addEventListener('keydown', obtenerEvento);

// keypress:cada vez que presiono una tecla
busqueda.addEventListener('keypress', obtenerEvento);

// focus:cada vez que ingreso en el input
busqueda.addEventListener('focus', obtenerEvento);


// blur: se dispara cuando salgo del input
busqueda.addEventListener('blur', obtenerEvento);

// cut: cuando se corta el texto en el input
busqueda.addEventListener('cut', obtenerEvento);

// copy: cuando se copia el texto en el input
busqueda.addEventListener('copy', obtenerEvento);

// copy: cuando se copia el texto en el input
busqueda.addEventListener('paste', obtenerEvento);

// input: se actica por cualquiera de los anteriores eventos
busqueda.addEventListener('input', obtenerEvento);


// change: es para el select cuando cambias de opcion
busqueda.addEventListener('change', obtenerEvento);
function obtenerEvento(e) {
    
    // Lo que escribo en el input se va mostrando en el encabezado
    document.querySelector('#encabezado').innerText = busqueda.value;
    // value: va a dar lo que se ingrese en el input
    console.log(busqueda.value);
    //type: nos va a dar que tipo de eventos hicimos
    console.log(`EVENTO: ${e.type}`);
}
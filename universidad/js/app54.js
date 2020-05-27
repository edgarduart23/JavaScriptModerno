// EVENT LISTENER CLICK
// click al buscador.1) primero el selector


// addEventListener: Registra un evento a un objeto en específico. El ObJeto especifico puede ser un simple 
// elemento en un archivo, el mismo  documento , una ventana o un  XMLHttpRequest.

// preventDefault: Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, 
//es decir, puede ser llamado de nuevo.
// seria cancela el evento por defecto en el caso del formulario el action

/*
document.querySelector('#submit-buscador').addEventListener('click', function(e){
            e.preventDefault();
    alert('buscando cursos');
})
*/

// otra forma es crear la funcion por afuera
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento = e;
    // Target: Una referencia a un objeto que lanzo el evento
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;
    console.log(elemento);
    console.log('Desde la funcion ejecutar boton')
}

// click al encabezado
document.querySelector('#encabezado').addEventListener('click',function(e){
    //modificar
    e.target.innerText = 'Nuevo Encabezado';
   console.log(e.target.innerText) 
})
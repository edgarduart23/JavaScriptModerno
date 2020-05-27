// Creando Elementos con JavaScript

//crear enlace
// createElement: crea un elemento HTML especificado por su tagName, 
//o un  HTMLUnknownElement si su tagName no se reconoce
const enlace = document.createElement('a');

// agregamos una clase
enlace.className = 'enlace';
// añadir id
enlace.id = 'nuevo-id';
// atributo de href
enlace.setAttribute('href', '#');
// añadir texto
//enlace.textContent = 'Nuevo Enlace';
// otra forma de añadir texto
// appendChild: Agrega un nuevo nodo al final de la lista de un elemento 
//hijo de un elemento padre especificado
enlace.appendChild(document.createTextNode('Nuevo enlace'))

// agregar al HTML
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);
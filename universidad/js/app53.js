// Agregando y quitando clases y otro atributos

const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');
//remove
// elimina el objeto del árbol al que pertenece.
// un elemento puede ser borrado desdde su selector
//enlaces[0].remove();
//console.log(enlaces)

// otra alternativa es del padre
// removeChild: elimina un nodo hijo del DOM y 
//puede devolver el nodo eliminado.
//navegacion.removeChild(enlaces[0]);
//console.log(navegacion);

// para borrar un atributo, clase o para agregar un elemento
const primerLi = document.querySelector('.enlace');
let elemento;

// obtener una clase de CSS

// className: obtiene y establece el valor del 
//atributo class del elemento especificado.
elemento = primerLi.className;

// añadir una nueva clase
// add: añade un nuevo elemento con un valor 
//específico al final del objeto Set.
elemento = primerLi.classList.add('nueva-clase');
// eliminar la nueva clase
elemento = primerLi.classList.remove('nueva-clase');


// classList: devuelve una colección activa de DOMTokenList 
//de los atributos de clase del elemento
// es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto 
//delimitada por espacios a través de element.className.
elemento = primerLi.classList;

// leer o obtener un atributo
// getAttribute: devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, 
//el valor retornado puede ser tanto null como "" (una cadena vacía)
elemento = primerLi.getAttribute('href');

// modificar un atributo
// setAttribute: Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, 
//el nuevo atributo es añadido con el nombre y valor indicado
primerLi.setAttribute('href', 'http://facebook.com');
elemento = primerLi;

// atributos personalizados
primerLi.setAttribute('data-id',20);

//comprobar que tenga un atributo
// hasAttribute: devuelve un valor Booleano indicando si el elemento 
//tiene el atributo especificado o no.
elemento = primerLi.hasAttribute('data-id');

// Eliminar un atributo
primerLi.removeAttribute('data-id');
elemento = primerLi;

console.log(elemento);
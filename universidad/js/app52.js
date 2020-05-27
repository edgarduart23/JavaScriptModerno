// Reemplazar Elementos

const nuevoEncabezado = document.createElement('h2');

// agregar un id
nuevoEncabezado.id = 'encabezado';
// agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores Cursos'));
// Elemento anterior (sera reemplazado)
const anterior = document.querySelector('#encabezado');
// Elemento padre, para reemplazar siempre hay que ir hasta el padre
const elPadre = document.querySelector('#lista-cursos');

// Reemplazar
// replaceChild: reemplaza un nodo hijo del elemento especificado por otro.
elPadre.replaceChild(nuevoEncabezado, anterior);
console.log(anterior.parentElement);
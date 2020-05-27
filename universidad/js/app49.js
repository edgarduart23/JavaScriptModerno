// Traversing en JavaScript
// Del padre hacia el hijo
const navegacion = document.querySelector('#principal');
// childNodes: devuelve una colección de hijos nodes del elemento 
//dado donde el primer nodo hijo es asignado un índice 0
//el problema es que regresa mas elementos porque toma en
//los espacios entre enlaces
// children: es una propiedad de sólo lectura que retorna una
//HTMLCollection "viva" de los elementos hijos de un Node
//los nodos son los html de nuestro documento
//los nodos son las etiquetas html
//console.log(navegacion.children);

// nodeName: Devuelve el nombre del nodo actual,
// en forma de cadena.
//console.log(navegacion.nodeName);
//console.log(navegacion.children[0]);
//console.log(navegacion.children[0].nodeName);


//nodeType: etornará un valor positivo entero 
//representando el tipo de nodo
// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = comentarios
// 9 = documentos
// 10 = doctypes
//console.log(navegacion.children[0].nodeType)

//cambiar el texto
//console.log(navesgacion.children[0].textContent = 'Nuevo Enlace');

const barra = document.querySelector('.barra');
//puedo ir navegando con children
//console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');
// lastElementChild: retorna el último hijo del objeto Element 
//o bien null si no hay elementos hijos
console.log(cursos)
console.log(cursos[0].lastElementChild);
// firstElementChild: retorna el primer hijo del objeto Element, 
//o bien null si no existen elementos hijos
console.log(cursos[0].firstElementChild);
// childElementCount:  devuelve un número del tipo unsigned long que representa 
//la cantidad de elementos hijo que penden del elemento padre
console.log(cursos[0].childElementCount);

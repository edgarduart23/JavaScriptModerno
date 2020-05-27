// Seleccionando múltiples elementos en JavaScript

// getElemetsByClassName: Retorna un objecto similar a un array 
//de los elementos hijos que tengan todos los nombres de clase indicados

let enlaces = document.getElementsByClassName('enlace');
//con querySelector solo devuelve la primera clase
const enlaces2 = document.querySelector('.enlace');
console.log(enlaces2);

//se puede acceder a un elemento determinado
enlaces = enlaces[5];

// CSS
enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo enlace';
console.log(enlaces);

//se puede mezclar querySelector con getElementByClassName

const listaEnlaces = document.querySelector('#principal')
.getElementsByClassName('enlace');

console.log(listaEnlaces);

// getElementByTagName: Devuelve una lista de elementos con un nombre determinado. 
//Se busca en todo el documento, incluyendo el nodo raíz.
const links = document.getElementsByTagName('a');
links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace';
console.log(links);

//para convertir a arreglo
let enlaces3 = Array.from(links);
enlaces3.forEach(function(enlace){
    console.log(enlace.textContent);
})






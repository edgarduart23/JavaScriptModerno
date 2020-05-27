// Traversing en JavaScript
// Del hijo al padre


//parentElement: devuelve el nodo padre del DOM Element, o null, si el nodo no tiene 
//padre o si el padre no es un Element DOM 

const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces[0].parentElement.parentElement)

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].parentElement.parentElement.parentElement);
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent= 'Hola desde traversing')


//sibling(hermano)
// previousElementSibling: retorna el Element predecesor inmediato al especificado dentro de la lista de hijos de su padre,
//o bien null si el elemento especificado es el primero de dicha lista
const enlaces2 = document.querySelectorAll('.enlace');
console.log(enlaces2[4].previousElementSibling.previousElementSibling);

// nextElementSibling: devuelve el elemento inmediatamente posterior al especificado, dentro de la lista de elementos hijos
//de su padre, o bien null si el elemento especificado es el último en dicha lista
console.log(enlaces2[0].nextElementSibling)

// tambien se puede incluir parentElement y children

console.log(enlaces2[0].nextElementSibling.parentElement.children[4])
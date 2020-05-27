//video 45: Seleccionando elementos y aplicandole propiedades
// Eliminar de Local Storage
//localStorage.clear();
let elemento;
//document: manda todo el DOM  a consola
elemento = document;
//all regresa todo de forma diferente como htmlallCollection
//La interfaz HTMLCollection representa una colección genérica 
//(objeto tipo array similar a arguments) de elementos (en orden de documento)
// y ofrece métodos y propiedades para seleccionarlos de la lista.
elemento = document.all;
//se puede seleccionar un elemento particular
elemento = document.all[10];
//se puede devolver tambien una parte especifica
elemento = document.head;
//domain nos regresa la url en la que estamos
//La propiedad de domain de la interfaz de Document obtiene / establece la
//porción de dominio del origen del documento actual, tal como lo utiliza la
//misma política de origen 
elemento = document.domain;
//Url
elemento = document.URL;
elemento = document.characterSet;
//forms: puedo acceder a todos los formularios
elemento = document.forms; 
elemento = document.forms[0].id; 
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];
// images: muestra todas las imagenes
elemento = document.images;
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');
//scripts
elemento = document.scripts;
//console.log(elemento);

// convertir las imagenes a un array
//El método Array.from() crea una nueva instancia de Array
// a partir de un objeto iterable.


elemento = document.images;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
imagenesArr.forEach(function(imagen){
    console.log(imagen)
});
console.log(imagenesArr);

// video 46: Seleccionando un elemento y aplicandole propiedades
// getElementById:Devuelve una referencia
// al elemento por su ID

//let elemento;
elemento = document.getElementById('hero');
console.log(elemento)

let encabezado;
//id: para acceder a su id
encabezado = document.getElementById('encabezado').id;
//className: para acceder a sus clases
encabezado = document.getElementById('encabezado').className;
//textContent: para acceder al contenido del texto
// tambien se puede utilizar innerText
encabezado = document.getElementById('encabezado').textcontent;
encabezado = document.getElementById('encabezado').innerText;
// agregar estilos
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

//cambiar el texto
encabezado.textContent = 'Los mejores cursos'
console.log(encabezado);
//se puede obtener el contenido con innerText
console.log(encabezado.innerText)

// video 47: Seleccionando un elemento de Javascript
// Query Selector: Devuelve el primer elemento del documento (utilizando un recorrido
 //primero en profundidad pre ordenado de los nodos del documento) 
 //que coincida con el grupo especificado de selectores.
// se utiliza la sintaxis de css o jquery

//const encabezado2 = document.querySelector('#encabezado')
// puede seleccionar clase , esa es la diferencia con getElementBy
// cuando es clase y hay muchas solamente va a seleccionar el primero
const encabezado2 = document.querySelector('.encabezado')
// const encabezado2= document.querySelector('.card img')
// Aplicar CSS
encabezado2.style.background = '#333';
encabezado.style.color = 'red';
encabezado.style.padding = '20px';
console.log(encabezado2);

//querySelectorAll:El método querySelectorAll() de un Element devuelve 
//una NodeList estática (no viva) que representa una lista de elementos del 
//documento que coinciden con el grupo de selectores indicados.
const encabezado3 = document.querySelectorAll('.enlace')
console.log(encabezado3);

//agregar selectores de css3

let enlance;
//seleciona el primer enlance
enlace = document.querySelector('#principal a:first-child');
// seleccion uno del medio
enlace = document.querySelector('#principal a:nth-child(3)');
// selecciona el del final
enlace = document.querySelector('#principal a:last-child');
console.log(enlace);



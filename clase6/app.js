
// propiedades de los string
let mensaje;
mensaje = 'Aprendiendo',
// lenght: La propiedad length de un objeto String
// representa la longitud de una cadena         
console.log(mensaje.length);

let tecnologia = 'JavaScript'
// concat:El método concat() se utiliza para combinar dos o más cadenas.
// Este método no cambia las cadenas existentes, 
//sino que retorna una nueva cadena.
console.log(tecnologia.concat(' ', "Es genial"));

//toUpperCase:El toUpperCase() método devuelve 
//el valor convertido en mayúsculas de la cadena
// que realiza la llamada 
console.log(tecnologia.toUpperCase());
//toLowerCase:El toUpperCase() método devuelve 
//el valor convertido en minuscula de la cadena
// que realiza la llamada 
console.log(tecnologia.toLowerCase());

let mensaje2= 'Aprendiendo JavasScript, css, html para ser frontend';
//indexOf: El método indexOf() retorna el primer índice en el que se puede
//encontrar un elemento dado en el array, 
//ó retorna -1 si el elemento no esta presente.
console.log(mensaje2.indexOf('JavaScript'))

let mensaje3= 'Aprendiendo JavasScript, css, html para ser frontend';

//substring
//substring extrae caracteres 
//desde indiceA hasta indiceB sin incluirlo

console.log(mensaje3.substring(0,10));

let mensaje4= 'Aprendiendo JavasScript, css, html para ser frontend';

//slice
//El método slice() devuelve una copia de una parte del array 
//dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
//El array original no se modificará 
// poniendo numero negativo comienza de atrás hacia adelante
// con numero positivo se puede poner un numero inicial y cuantos 
//caracteres son para cortar el mensaje .slice(0,11)
console.log(mensaje4.slice(-3));

let mensaje5= 'Aprendiendo JavasScript, css, html para ser frontend';
//split: El método split() divide un objeto de tipo String en un array (vector)
// de cadenas mediante la separación de la cadena en subcadenas.
//cadena.split([separador][,limite])
//separador: Especifica el carácter a usar para la separación de la cadena. 
//El separador es tratado como una cadena o como una expresión regular. 
//Si se omite el separador, el array devuelto contendrá un sólo elemento con la cadena completa.
//limite :Opcional. Entero que especifica un límite sobre el número de divisiones a realizar. 
//El método split() todavía se divide en todas las concordancias del separador, 
//pero divide la matriz devuelta en la cantidad de elementos impuesta por el limite.

console.log(mensaje5.split(' '));

let mensaje5= 'Aprendiendo JavasScript, css, html para ser frontend';

//repalce El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, 
//siendo cada una de estas coincidencias reemplazadas por remplazo. 
//El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función
//que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.
//La cadena original permanecerá inalterada.

console.log(mensaje5.replace('CSS', 'PHP' ));

let mensaje6= 'Aprendiendo JavasScript, css, html para ser frontend';
//include: El método includes() determina si una cadena de texto puede ser encontrada 
//dentro de otra cadena de texto,retornando true o false según corresponda.
console.log(mensaje5.includes('CSS'));
//Repeat: El método repeat() construye y devuelve una nueva cadena que contiene 
//el número especificado de copias de la cadena en la cual fue llamada, concatenados
let tencologia = "Javascript" + ' ';

console.log(tecnologia.repeat(10));









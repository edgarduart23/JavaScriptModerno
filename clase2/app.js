/*La instrucción let declara una variable de alcance local con ámbito de bloque(block scope), 
la cual, opcionalmente, puede ser inicializada con algún valor.
let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. 
Lo anterior diferencia  let de la palabra reservada var , 
la cual define una variable global o local en una función sin importar el ámbito del bloque*/
let nombre = prompt('Cual es tu nombre?');
let edad = prompt('Cual es tu edad');

document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;
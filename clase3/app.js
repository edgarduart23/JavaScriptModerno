/* Las  declaraciones de variables, donde sea que ocurran, 
son procesadas antes de que cualquier otro código sea ejecutado.
 El ámbito de una variable declarada con la palabra reservada var 
 es su contexto de ejecución en curso, que puede ser la función que la contiene o,
 para las variables declaradas afuera de cualquier función,
 un ámbito global. Si re-declaras una variable Javascript, esta no perderá su valor.*/

 //puede utilizarse comillas simples o dobles
 var nombre = 'Juan';
//se puuede reescribir
 nombre = 'John';
 // tambien se puede dejar sin declarar, en este caso seria undefined
 // por ejemplo en carrito, se puede inicializar sola
 var carrito;
 // se puede inicializar varias variables con un solo var
 var carrito = 'libro', carrito1 = 'libro2'

 // forma de declarar varibles
 var primerNombre = 'juan';  //camelCase
 var primer_nombre = 'juan'; //underscore
 var PrimerNombre = 'juan'; // pascal case
 console.log(nombre);
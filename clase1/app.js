/*La función innerHTML se emplea para escribir de forma dinámica, cualquier contenido.
No es necesario recargar la página y generalmente se usa mediante un evento, que puede ser un enlace, un botón, dar clic en una sección o
Es imprescindible para usarla identificar primeramente el elemento donde se va a escribir.
La forma más fácil de hacerlo es asignar a un elemento un identificador o ID 
La propiedad innerHTML nos sirve para conocer y manipular el valor dentro de una etiqueta, por ejemplo el innerHTML de <p>Hola</p> 
es la palabra Hola, lo que se encuentra dentro de la etiqueta p*/

/* getElementById: Devuelve una referencia al elemento por su ID 
Buscamos un elemento HTML dentro del DOM por su ID*/

document.getElementById('app').innerHTML = 'Hola mundo';
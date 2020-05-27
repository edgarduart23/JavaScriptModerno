// Seleccionando múltiples elementos en JavaScript Pt 2
// regresa todas las clases
//const enlaces = document.querySelectorAll('#principal .enlace');

// CSS
//enlaces[1].style.background = 'red';
//enlaces[1].textContent = 'nuevo enlace';
//console.log(enlaces)
// odd: selecciona los impares
const enlaces2 = document.querySelectorAll('#principal a:nth-child(odd)');
enlaces2.forEach(function(impares){
    impares.style.backgroundColor = 'red';
});
console.log(enlaces2);


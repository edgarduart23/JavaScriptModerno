// video67: Comenzando el proyecto

// Variables
 
const carrito = document.getElementById('carrito')
const cursos = document.getElementById('lista-cursos')
const contenedorCursos = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBoton = document.getElementById('vaciar-carrito')
 
 
 
// Event Listeners
 
cargarEventListeners()
 
 
function cargarEventListeners() {
 
    // Delegation: Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso)
    
    // video69: Eliminando el curso seleccionado del carrito
    // Para eliminar un curso del carrito
 
    carrito.addEventListener('click', eliminarCurso)
    // video70 
    // Para vaciar el carrito
 
    vaciarCarritoBoton.addEventListener('click', vaciarCarrito)
    
    // video72
    // Al cargar el documento mostrar localStorage
 
    document.addEventListener('DOMContentLoaded', mostrarCursosLocalStorage)
 
}
 
// Funciones 
 
// Función que añade el curso al carrito
function comprarCurso(e) {
 
    e.preventDefault()
    // Deletegation para agregar carrito
    if(e.target.classList.contains('agregar-carrito')) {
        // Accedo al padre(card)
        const curso = e.target.parentElement.parentElement
        // enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso)
    }
}
 
 // Lee los datos del curso
function leerDatosCurso(curso) {
    // video68: Agregando en el carrito los cursos seleccionados
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    // Para insertar el html
    insertarCarrito(infoCurso);
 
    //console.log(infoCurso.id)
}
 
 // Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr')
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    // agrega el contenido al carrito
    contenedorCursos.appendChild(row)
    // Video71 Almacenando Cursos en Local Storage
    guardarCursoLocalStorage(curso)
}
 
 
// Eliminar el curso del carrito en el DOM 
 function eliminarCurso(e) {
    e.preventDefault()
    let curso;
    let cursoId;
    if(e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove()
 
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
 
        //console.log(cursoId)
    }
    // video73: Eliminando Cursos de Local Storage
    eliminarCursoLocalStorage(cursoId)
}
 
// función para vaciar carro
// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    //FORMA LENTA
    // listaCursos.innerHTML= ''

    // FORMA RAPIDA
    while(contenedorCursos.firstChild) {
        contenedorCursos.removeChild(contenedorCursos.firstChild)
    }
 
    
 
    // vaciar Local Storage
 
    vaciarLocalStorage();
 
    return false;
 
}
 
// Almacenar el curso en LocalStorage 
 function guardarCursoLocalStorage(curso) {
    let cursos;
    // Toma el valor de un arreglo con datos de LS o vacio
    cursos = obtenerCursoLocalStorage()
 
    // el curso seleccionado se arregla al carrito
    cursos.push(curso)
 
    localStorage.setItem('cursos', JSON.stringify(cursos))
    console.log(cursos)
}
 
// Comprueba que haya elementos en Local Storage
function obtenerCursoLocalStorage(){
    let cursosLS;
 
    // comprobamos si hay algo en LocalStorage 
 
    if(localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'))
    }
 
    return cursosLS; 
}
 
// Imprime los cursos de Local Storage en el carrito
function mostrarCursosLocalStorage() {
 
    let cursosLS;
    cursosLS = obtenerCursoLocalStorage()
 
    cursosLS.forEach(function(curso) {

        // construir el template
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
            `;
 
        contenedorCursos.appendChild(row)
 
    })
 
}
// Elimina el curso por el ID en local storage 
function eliminarCursoLocalStorage(curso) {
    let cursosLS;
 
    //console.log(curso)
 
    cursosLS = obtenerCursoLocalStorage()
 
    cursosLS.forEach(function(cursoLS, index) {
 
        if(curso === cursoLS.id) {
            console.log(cursoLS.id)
            // con esto removemos el td del carrito
            cursosLS.splice(index, 1)
            
        }
 
    })
 
    // con esto setteamos el localStorage ya sin el curso que removimos
    // añadimos el arreglo actual a storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS))
 
}
 
 // Elimina todos los cursos de Local Storage
function vaciarLocalStorage() {
    localStorage.clear()
}
 
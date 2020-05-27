// Delegation en JavaScript
// Es una forma en la que puedes esperar un click en cualquier lugar y comprobas
// que elemento esta siendo click y ejecutar el codigo
document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e){
    e.preventDefault();
    //console.log('click');
    //console.log(e.target.classList);
    // saber en cual de las cards dieron click
    //El método Node.contains() devuelve un valor Boolean indicando si un nodo es descendiente de un nodo dado o no, por ejemplo,
    // el propio nodo, uno de sus hijos directos ((childNodes)), uno de los hijos directos de su nodo hijo, etc.
    /*if(e.target.classList.contains('borrar-curso')){
        console.log('SI');

    } else {
        console.log('NO');
    }*/
    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove());
    }
    // con esto no creo un selector para cada curso y tampoco un event listener
    if(e.target.classList.contains('agregar-carrito')){
        console.log('curso agregado')
    }
}
    


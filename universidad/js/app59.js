// AGREGANDO, LEYENDO, BORRANDO Y LIMPIANDO EL LOCALSTORGAE
// Permite añadir cierta informacion en el navegador de los visitantes

// Agregar a local storage
// El método setItem() de la interfaz Storage, cuando reciba una clave y un valor, 
//añadirá estos al almacén, o actualizará el valor si la clave ya existe.
localStorage.setItem('nombre','juan')
// Eliminar de local Storage
// El método removeItem() de la interfaz Storage elimina la clave cuyo 
// nombre recibe por parámetro del almacenamiento.
localStorage.removeItem('nombre');
// El método getItem() de la interfaz Storage devuelve el 
//valor de la clave cuyo nombre se le pasa por parámetro.
const nombre = localStorage.getItem('nombre');
console.log(nombre)

// El método clear() de la interfaz Storage, al invocarlo, 
//elimina todos los registros del almacen local
localStorage.clear();
// la diferencia con localstorage es que borra al volver iniciar la sesion
sessionStorage.setItem('nombre','juan')


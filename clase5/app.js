

let mensaje;
//si quiero citar con "" siempre que las comillas esten
// adentro de las comillas simples o viceversa
// no se puede tener ambas

mensaje = 'y entonces dije "buen curso!!"';

// si quiero poner simples y poner simples adentro
// se tiene que escapar con \
mensaje = 'Y entonces dije \'Buen Curso!!\'';

//concatenacion javascript
mensaje = 'JAVA' + 'SCRIPT';

// uniendo variables en una sola
// forma vieja
let aprendiendo = 'Aprendiendo',
    tecnologia = 'Javascript';
console.log(aprendiendo+''+tecncologia)

// forma nueva con template literal
console.log(`${aprendiendo} ${tecnologia}`);
console.log()
console.log(mensaje);
// video 61: Iniciando el proyecto

/*
// Variables
const listaTweets = document.getElementById('lista-tweets');
// Event Listeners
eventosEncadenados()
 
// Funciones
 
function eventosEncadenados() {
    // cuando se envie el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)
    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet)
 
    // contenido Cargado 
    document.addEventListener('DOMContentLoaded', localStorageListo)
}
 
function agregarTweet(e) {
 
    e.preventDefault()
    //console.log('Formulario Enviado')
 
    // crear botón borrar
 
    const botonBorrar = document.createElement('a')
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X'
 
 
    // leer el valor del textarea
 
    const tweet = document.getElementById('tweet').value
    //console.log(tweet)
 
    // crear elemento
    const li = document.createElement('li')
    li.innerText = tweet
    // añade el botonBorrar
    li.appendChild(botonBorrar)
    listaTweets.appendChild(li)
 
    
    // agregar Tweet a LocalStorage 
 
    agregarTweetLocalStorage(tweet)
 
}
 
 
function borrarTweet(e) {
    e.preventDefault()
    //console.log('diste click en la lista')
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove()
        borrarTweetLocalStorage(e.target.parentElement.innerText)
        //console.log(e.target.parentElement.innerText)
    } 
 
}
 
// función que agrega el Tweet a LocalStorage 
 
function agregarTweetLocalStorage(tweet) {
    let tweets;
 
    tweets = obtenerTweetsLocalStorage()
    // añadir nuevo Tweet
    tweets.push(tweet)
    // convertir de string a arreglo para local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets))
}
 
// mostrar la información proveniente de LocalStorage
 
function localStorageListo() {
    let tweets;
 
    tweets = obtenerTweetsLocalStorage()
    //console.log(tweets)
 
    tweets.forEach(function(tweet){
        // crear botón borrar
 
        const botonBorrar = document.createElement('a')
        botonBorrar.classList = 'borrar-tweet'
        botonBorrar.innerText = 'X'
 
 
        // crear elemento
        const li = document.createElement('li')
        li.innerText = tweet
        // añade el botonBorrar
        li.appendChild(botonBorrar)
        listaTweets.appendChild(li)
    })
}
 
// comprueba que haya elementos en localStorage
 
function obtenerTweetsLocalStorage() {
    let tweets;
 
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'))   
    }
 
    return tweets;
 
}
 
// eliminar Tweet del Local Storage
 
function borrarTweetLocalStorage(tweet) {
    let tweets;
    let tweetBorrado;
    // así se obtiene el tweet a borrar y cortado 
    tweetBorrado = tweet.substring(0, tweet.length - 1)
 
    tweets = obtenerTweetsLocalStorage(); 
 
    tweets.forEach(function(tweet, index){
        if(tweetBorrado === tweet) {
            tweets.splice(index, 1)
        }
    })
 
    localStorage.setItem('tweets', JSON.stringify(tweets))
}
 */

 //-----------variables-----------------------------
 const listaTweets = document.getElementById('lista-tweets');

 // Event Listeners
 eventListeners()
function eventListeners(){
    // cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    // video 62:
    // APLICANDO DELEGATION A LOS TWEETS AGREGADOS
    listaTweets.addEventListener('click', borrarTweet);
    //video 64: Cargando los tweets de local Storage
    // DOMContentLoaded: El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, 
    //sin esperar hojas de estilo, images y subframes para  finalizar la carga.
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

 //------------Funciones------------------------------

 // añadir tweet del formulario
 function agregarTweet(e) {
     e.preventDefault();
     //console.log('Formulario agregado')
     // leer el valor del textarea
     const tweet = document.getElementById('tweet').value;
     // crear boton de eliminar
     const botonBorrar = document.createElement('a');
     //añado la clase
     botonBorrar.classList = 'borrar-tweet';
     botonBorrar.innerText = 'X'

     // Crear elemento y añadirle el contenido a la lista
     const li = document.createElement('li');
     li.innerText = tweet;
     // añado el enlace , añado el botón de borrar al tweet
     li.appendChild(botonBorrar);
     // lo añado al padre, añade el tweet a la lista
     listaTweets.appendChild(li);
     //console.log(tweet);

     // video 63
     // ALMACENANDO TWEETS EN LOCAL STORAGE
     // AÑADIR A LOCAL STORAGE
     agregarTweetLocalStorage(tweet);
 }

 // Elimina el tweet del DOM
 function borrarTweet(e){
    e.preventDefault();
   /* if(e.target.className === 'borrar-tweet'){
        console.log('Diste click en eliminar');
    } else {
        console.log('diste click en otra parte');
    }*/
    if(e.target.className === 'borrar-tweet'){
        //console.log(e.target.parentElement.remove());
        //alert('Tweet eliminado')
        e.target.parentElement.remove();
        // video65: Eliminando elementos del local storage;
        borrarTweetLocalStorage(e.target.parentElement.innerText);


    }


    //console.log('Diste click en la lista');

 }
 // Mostrar datos de localstorage en la lista
 function localStorageListo(){
    let tweets;
    tweets = obtenerTweetLocalStorage();
    //console.log(tweets);
    tweets.forEach(function(tweet)  {
        // crear boton de eliminar
        const botonBorrar = document.createElement('a');
        //añado la clase
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X'

        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // añado el enlace , añado el botón de borrar al tweet
        li.appendChild(botonBorrar);
        // lo añado al padre, añade el tweet a la lista
        listaTweets.appendChild(li); 
    });
}


 // Agrega tweet a local storage
 function agregarTweetLocalStorage(tweet){
     let tweets;
     tweets = obtenerTweetLocalStorage();
     // añandir el nuevo tweet, push agrega a lo ultimo del arreglo
     tweets.push(tweet);
     // convertir de string a arreglo para local storage
     // El método JSON.stringify() convierte un objeto o valor de JavaScript 
     // en una cadena de texto JSON
     localStorage.setItem('tweets', JSON.stringify(tweets));    
     //agregar a local storage
     //localStorage.setItem('tweets', tweet);
 }

 // Comprobar que haya elementos en localStorage, retorna un arreglo
 function obtenerTweetLocalStorage(){
     let tweets;
     // revisamos los valores de local storage
     if(localStorage.getItem('tweets') === null){
        tweets = [];
     } else {
         // json.parse: El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  
         // el valor producido por el análisis
         tweets = JSON.parse(localStorage.getItem('tweets'))

     }
     return tweets;
 }

 //Eliminar tweet de Local Storage

 function borrarTweetLocalStorage(tweet) {
     let tweets, tweetBorrar;
     // Elimina la X del tweet
     tweetBorrar = tweet.substring(0, tweet.length - 1);

     tweets = obtenerTweetLocalStorage();
     tweets.forEach(function(tweet, index){
         //console.log(tweet);
         if(tweetBorrar === tweet){
             tweets.splice(index, 1);
         }
     });
     //console.log(tweetBorrar);
     localStorage.setItem('tweets', JSON.stringify(tweets));

 }
 
 

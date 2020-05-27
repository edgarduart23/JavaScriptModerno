/*// video75: Comenzando el proyecto
// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');







// event listener
eventListeners();
function eventListeners() {
    // Inicio de la aplicacion y deshabilito submit
    document.addEventListener('DOMContentLoaded', inicioApp)
    // video76: Validando que los campos no estén vacios
    // Campos del formulario
    // blur: El evento blur es disparado cuando un elemento ha perdido su foco
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}






// funciones

function inicioApp() {
    //deshabilitar el envio
    btnEnviar.disabled = true
}

// Valida que el campo tengo algo escrito
function validarCampo() {
    //console.log('Dentro del INPUT');
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    // validar unicamente email
    if(this.type == 'email'){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('error');
    if (email.value !== '' && asunto.value != '' && mensaje.value != '') {
        if(errores.lenght == 0){
            btnEnviar.disable = true;
        }
        
    }
}
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
     
    }
    if(campo.value.length === 0){
        btnEnviar.disabled = true; 
    }
    }

function validarEmail(campo){
    const mensaje =  campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error') 
    }
}

*/

// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     email.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}



// funciones
function inicioApp() {
     // deshabilitar el envio
     btnEnviar.disabled = true;
}
// Valida que el campo tengo algo escrito

function validarCampo() {
    
     // Se valida la longitud del texto y que no este vacio
     validarLongitud(this);

     // Validar unicamente el email
     if(this.type === 'email') {
          validarEmail(this);
     }

     let errores = document.querySelectorAll('.error');

     if(email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
          if(errores.length === 0) {
               btnEnviar.disabled = false;
          }
     } 
}

// Resetear el formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}

// Cuando se envia el correo
function enviarEmail(e) {
     // Spinner al presionar Enviar
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     // Gif que envia email
     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif';
     enviado.style.display = 'block';

     // Ocultar Spinner y mostrar gif de enviado

     setTimeout(function() {
          spinnerGif.style.display = 'none';

          document.querySelector('#loaders').appendChild( enviado );

          setTimeout(function() {
               enviado.remove();
               formularioEnviar.reset();
          }, 5000);
     }, 3000);

     e.preventDefault();
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

     if(campo.value.length > 0 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          //btnEnviar.disabled= true;
     }
     /*if(campo.value.length === 0){
        btnEnviar.disabled = true; 
    }*/
}

function validarEmail(campo) {
     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}
// procesar lso datos del formulario contacto
//buscamos lso elemntos del formulario formContacto y el parrafo respuesta
const fromContacto = document.getElementById("formContacto");
const respuesta = documen.getElementById("respuesta");
// escuchamos el evento submit del formulario
fromContacto.addEventListener("submit", function(event) {
    event.preventDefault(); // evita que se recarge la paguina al enviar
    // leemos los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    // aqui se deben validar los datos del formulario, por ejemplo que nunca estan....
    // si todo esta bien, se procesan los datos del formulario

    // limpiamos el formulario
    fromContacto.reset();
    // mostramos un mensaje de exito en el parrafo de respuesta
    mostrarMensaje("Gracias por contactarnos, " + nombre + ". Te responderemos a la brevedad.","exito");
});

fromContacto.addEventListener("reset", function(even) {
    // limpiamos el parrafo respuesta al limpiar el formulario
    respuesta.textContent = "";
    respuesta.className = ""; // quitamos la clase de exito o error
});

// fucion que muestra un texto en el parrafo respuesta cuando se cargo
function mostrarMensaje(texto, tipo){
    respuesta.textContent = texto;
    respuesta.className = tipo; // tipo puede ser "exito" o "error"
}
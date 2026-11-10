const botones = document.querySelectorAll(".btnDetalle");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const detalle = boton.nextElementSibling;

        if (detalle.hidden) {
            detalle.hidden = false; // Si está oculto, lo mostramos
            boton.textContent = "Ocultar detalles";
        } else {
            detalle.hidden = true; // Si está visible, lo ocultamos
            boton.textContent = "Ver detalles";
        }
    });
});
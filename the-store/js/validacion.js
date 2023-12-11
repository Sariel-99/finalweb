//Se mueve la llamada a la función despues que el DOM este completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
    // Función para validar el formulario al enviar
    function validarFormulario(event) {

        var nombre = document.getElementById("nombre").value;
        var precio = document.getElementById("precio").value;
        var inventario = document.getElementById("inventario").value;

        if (nombre === "" || precio === "" || isNaN(precio) || inventario === "") {
            // Muestra la alerta solo si hay campos faltantes o inválidos
            alert("Por favor, complete todos los campos correctamente.");
            event.preventDefault(); // Detiene el envío del formulario
        }
    }
    // Asigna la función al evento submit del formulario
    var formulario = document.querySelector('form');
    formulario.addEventListener('submit', validarFormulario);
});

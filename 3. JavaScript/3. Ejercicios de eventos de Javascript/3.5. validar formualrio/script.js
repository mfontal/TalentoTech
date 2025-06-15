function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        document.getElementById("error").innerHTML = "El nombre no puede estar vacío.";
        return false;
    }
    return true;
}
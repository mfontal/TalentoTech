function mostrarDatos() {
    var persona = {
        "nombre": "Juan",
        "edad": 30,
        "ciudad": "Madrid",
        "hobbies": ["leer", "viajar", "correr"]
    };

    var resultado = "Nombre: " + persona.nombre + "\n" +
                    "Edad: " + persona.edad + "\n" +
                    "Ciudad: " + persona.ciudad + "\n" +
                    "Hobbies: " + persona.hobbies.join(", ");

    document.getElementById("resultado").textContent = resultado;
}

mostrarDatos();
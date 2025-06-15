function buscarDatos() {
    // Obtener el valor de búsqueda del formulario
    var busqueda = document.getElementById("busqueda").value.toLowerCase();

    // Hacer una solicitud para obtener el archivo JSON
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            // Filtrar los datos según la búsqueda
            var resultados = data.filter(item => item.nombre.toLowerCase().includes(busqueda));

            // Mostrar los resultados en el HTML
            var resultadosDiv = document.getElementById("resultados");
            resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

            if (resultados.length > 0) {
                resultados.forEach(item => {
                    resultadosDiv.innerHTML += `<p>Nombre: ${item.nombre}, Edad: ${item.edad}, Ciudad: ${item.ciudad}</p>`;
                });
            } else {
                resultadosDiv.innerHTML = "<p>No se encontraron resultados.</p>";
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

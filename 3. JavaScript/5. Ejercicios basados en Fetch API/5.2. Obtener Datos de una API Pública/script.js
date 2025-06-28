fetch('datos.json')
    .then(response => response.json())
    .then(data => {
        let resultados = document.getElementById('resultados');
        data.forEach(usuario => {
            resultados.innerHTML += `<p>Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Ciudad: ${usuario.ciudad}</p>`;
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));


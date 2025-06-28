function actualizarDatos() {
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            nombre: nombre,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerHTML = `Datos actualizados: ${JSON.stringify(data)}`;
    })
    .catch(error => console.error('Error al actualizar los datos:', error));
}

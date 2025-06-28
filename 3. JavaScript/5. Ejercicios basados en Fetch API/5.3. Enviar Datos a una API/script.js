function enviarDatos() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerHTML = `Datos enviados: ${JSON.stringify(data)}`;
    })
    .catch(error => console.error('Error al enviar los datos:', error));
}

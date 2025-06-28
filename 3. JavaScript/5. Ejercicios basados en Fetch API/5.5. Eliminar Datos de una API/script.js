function eliminarDatos() {
    let id = document.getElementById('id').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('resultado').innerHTML = `Datos con ID ${id} eliminados.`;
        } else {
            throw new Error('Error al eliminar los datos');
        }
    })
    .catch(error => console.error('Error al eliminar los datos:', error));
}

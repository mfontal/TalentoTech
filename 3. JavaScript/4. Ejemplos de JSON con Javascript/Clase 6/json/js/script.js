// Espera a que el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('cargarUsuarios');
    const contenedor = document.getElementById('usuarios');

    btn.addEventListener('click', async () => {
        contenedor.innerHTML = 'Cargando...';
        try {
            // Usamos la API pública JSONPlaceholder
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            const usuarios = await respuesta.json();
            mostrarUsuarios(usuarios);
        } catch (error) {
            contenedor.innerHTML = 'Error al cargar los usuarios.';
        }
    });

    function mostrarUsuarios(usuarios) {
        contenedor.innerHTML = usuarios.map(u => `
            <div class="usuario">
                <h3>${u.name}</h3>
                <p><strong>Email:</strong> ${u.email}</p>
                <p><strong>Ciudad:</strong> ${u.address.city}</p>
            </div>
        `).join('');
    }
});

const estudiantes =
    [
        { nombre: 'ana', nota: '8' },
        { nombre: 'Juan', nota: '6' },
        { nombre: 'Carlos', nota: '7' },
        { nombre: 'Oscar', nota: '9' },
        { nombre: 'Jhon', nota: '10' },
        { nombre: 'Elena', nota: '5' }
    ]

const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 7);

console.log(aprobados);

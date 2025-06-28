function leerArchivo(ruta, callback) {
    // Simulando la lectura de un archivo con un retraso
    setTimeout(() => {
        let contenido = 'Contenido del archivo';
        callback(contenido);
    }, 2000);
}
function procesarContenido(contenido) {
    console.log('Contenido del archivo: ' + contenido);
}
leerArchivo('ruta/al/archivo.txt', procesarContenido);

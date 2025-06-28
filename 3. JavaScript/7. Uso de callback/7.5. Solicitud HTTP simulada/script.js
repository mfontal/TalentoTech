function hacerSolicitud(url, callback) {
    // Simulando una solicitud HTTP con un retraso
    setTimeout(() => {
        let respuesta = 'Datos de la solicitud a ' + url;
        callback(respuesta);
    }, 1500);
}
function manejarRespuesta(respuesta) {
    console.log('Respuesta recibida: ' + respuesta);
}
hacerSolicitud('https://api.ejemplo.com/datos', manejarRespuesta);

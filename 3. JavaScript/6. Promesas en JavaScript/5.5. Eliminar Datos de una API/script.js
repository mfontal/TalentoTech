function realizarOperacion() {
    let operacionAsincrona = new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = Math.random() > 0.5; // Simulación de éxito o fracaso
            if (exito) {
                resolve("Operación realizada con éxito");
            } else {
                reject("Operación fallida");
            }
        }, 2000);
    });

    operacionAsincrona
        .then(mensaje => {
            document.getElementById('resultado').innerHTML = mensaje;
        })
        .catch(error => {
            document.getElementById('resultado').innerHTML = error;
        });
}

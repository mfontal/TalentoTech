function sumar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}
function mostrarResultado(resultado) {
    console.log('El resultado es: ' + resultado);
}
sumar(5, 7, mostrarResultado);

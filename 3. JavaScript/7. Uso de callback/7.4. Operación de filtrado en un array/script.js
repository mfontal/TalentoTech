function filtrarArray(array, callback) {
    let resultado = array.filter(callback);
    console.log('Array filtrado: ' + resultado);
}
function esPar(numero) {
    return numero % 2 === 0;
}
filtrarArray([1, 2, 3, 4, 5, 6], esPar);

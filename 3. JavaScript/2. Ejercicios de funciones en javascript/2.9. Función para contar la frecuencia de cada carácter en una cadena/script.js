function contarFrecuencia(cadena) {

    const frecuencia = {};
    for (let char of cadena) {
        if (frecuencia[char]) {
            frecuencia[char]++;
        } else {
            frecuencia[char] = 1;
        }
    }
    return frecuencia;
}
console.log(contarFrecuencia("hello world"));
// Salida: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
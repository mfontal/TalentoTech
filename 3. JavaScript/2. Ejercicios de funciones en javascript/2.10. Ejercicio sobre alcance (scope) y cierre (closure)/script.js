function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}

const contador1 = crearContador();
console.log(contador1()); // Salida: 1
console.log(contador1()); // Salida: 2

const contador2 = crearContador();
console.log(contador2()); // Salida: 1

console.log(contador1()); // Salida: 3
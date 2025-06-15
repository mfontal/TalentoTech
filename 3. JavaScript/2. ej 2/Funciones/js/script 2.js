function esPar(numero) {
    return numero % 2 === 0;
}

let numero = 2

console.log(`${numero} es ${esPar(numero) ? "par" : "impar"}`);


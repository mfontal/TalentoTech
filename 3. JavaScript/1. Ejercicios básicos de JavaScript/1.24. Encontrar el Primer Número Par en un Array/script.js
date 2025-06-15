let numeros = [1, 3, 5, 8, 9, 11]
i = 0
while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
        console.log("El primer numero par es:", numeros[i]);
        break;
    }
    i++;
}
console.log("----Fin del ejercicio 12");

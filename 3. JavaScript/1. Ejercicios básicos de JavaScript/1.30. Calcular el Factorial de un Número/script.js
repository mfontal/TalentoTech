// Declara una variable para el número
let numero = 6;
// Declara una variable para almacenar el factorial
let factorial = 1;
// Declara una variable de control
let i = 1;
// Usa un bucle do...while para calcular el factorial

do {
factorial *= i;
i++;
} while (i <= numero);
// Imprime el resultado en la consola
console.log("El factorial de", numero, "es:", factorial);
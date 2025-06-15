// Declara las variables iniciales
let a = 0, b = 1, siguiente;
// Declara una variable de control
let i = 1;
// Usa un bucle while para generar los primeros 10 números de la secuencia de Fibonacci
while (i <= 10) {
console.log(a);
siguiente = a + b;
a = b;
b = siguiente;
i++;
}
// Declara una constante
const EDAD = 25;
// Imprime el valor original
console.log("Edad original:", EDAD);
// Intenta reasignar la constante (esto causará un error)
try {

EDAD = 30;
} catch (error) {
console.log("Error: No se puede reasignar una constante.");
}
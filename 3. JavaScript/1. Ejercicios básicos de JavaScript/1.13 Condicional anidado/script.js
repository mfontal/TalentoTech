// Declara dos variables booleanas
let tieneLicencia = true;
let usaCinturon = false;
// Usa condiciones anidadas para verificar ambas condiciones
if (tieneLicencia) {
if (usaCinturon) {
console.log("Puedes conducir.");
} else {
console.log("No puedes conducir sin cinturón.");
}
} else {
console.log("No puedes conducir sin licencia.");
}
function esPalindromo(cadena) {
    const cadenaLimpia = cadena.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cadenaReversa = cadenaLimpia.split('').reverse().join(''); return
    cadenaLimpia === cadenaReversa;
}

console.log(esPalindromo("A man, a plan, a canal, Panama")); // Salida: true
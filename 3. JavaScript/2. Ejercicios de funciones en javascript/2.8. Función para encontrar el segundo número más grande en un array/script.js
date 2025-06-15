function segundoMayor(array) {
    let max = -Infinity, segundoMax = -Infinity;
    for (let num of array) {
        if (num > max) {
            segundoMax = max;
            max = num;
        } else if (num > segundoMax && num < max) {
            segundoMax = num;
        }
    }
    return segundoMax;
}
console.log(segundoMayor([1, 3, 4, 5, 0, 2])); // Salida: 4
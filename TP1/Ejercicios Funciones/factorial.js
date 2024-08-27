function Factorial(n){
    if (n === 0 || n=== 1) {
        return 1;
    }

    return n * Factorial(n -1);

}

const numero = 10;
console.log(`El factorial de ${numero} es: ${Factorial(numero)}`)
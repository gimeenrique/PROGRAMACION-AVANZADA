function crearMultiplicador(x) {
    return function(y) {
        return x * y;
    };
}

// Ejemplo de uso:
const multiplicarPor2 = crearMultiplicador(2);
console.log(multiplicarPor2(54)); 

const multiplicarPor13 = crearMultiplicador(13);
console.log(multiplicarPor13(3)); 



function procesarArray (array, funcion){
    const resultado = [];
    for (let i = 0; i < array.length; i++){
        resultado.push(funcion(array[i]));
    }
}

return resultado;

function Multiplicar(numero){
    return numero * 2;
}

const Numeros = [1, 2, 3, 4, 5];
const numerosMultiplicar = procesarArray(Numeros, Multiplicar);

console.log(numerosMultiplicar); 
function sumarElementos(numeros) {
    return numeros.reduce(function(acumulador, numero) {
      return acumulador + numero;
    }, 0);
  }

  let arrayNumeros = [1, 2, 3, 4, 5];
let sumaTotal = sumarElementos(arrayNumeros);

console.log(sumaTotal);
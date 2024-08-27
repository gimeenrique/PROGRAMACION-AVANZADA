function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(function(numero) {
      return numero > referencia;
    });
  }

  let arrayOriginal = [1, 5, 8, 12, 20, 3];
let valorReferencia = 10;
let arrayFiltrado = filtrarMayoresDe(arrayOriginal, valorReferencia);

console.log(arrayFiltrado);
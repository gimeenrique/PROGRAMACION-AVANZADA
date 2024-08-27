let numeros = [3, 7, 8, 2, 15, 4];

let esMayorQueDiez = numeros.some(function(numero) {
  return numero > 10;
});

console.log(esMayorQueDiez);
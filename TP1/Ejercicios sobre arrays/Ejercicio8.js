let numeros = [3, 7, 8, 2, 15, 4];

let todosSonPositivos = numeros.every(function(numero) {
  return numero > 0;
});

console.log(todosSonPositivos); 

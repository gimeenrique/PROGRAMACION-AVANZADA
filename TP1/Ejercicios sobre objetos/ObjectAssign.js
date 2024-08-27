const Objeto1 = {
    A: 1,
    B: 2,
}

const Objeto2 = {
    B: 3,
    C: 4,
}

const combinado = Object.assign({}, Objeto1, Objeto2);

console.log(combinado);
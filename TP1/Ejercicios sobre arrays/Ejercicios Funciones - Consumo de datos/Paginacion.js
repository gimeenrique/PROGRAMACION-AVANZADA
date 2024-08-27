const datos = [
    'Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5',
    'Elemento 6', 'Elemento 7', 'Elemento 8', 'Elemento 9', 'Elemento 10',
    'Elemento 11', 'Elemento 12'
];

function obtenerPagina(datos, numeroDePagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroDePagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
}

const pagina1 = obtenerPagina(datos, 1);
console.log(pagina1); 

const pagina2 = obtenerPagina(datos, 2);
console.log(pagina2); 

const pagina3 = obtenerPagina(datos, 3);
console.log(pagina3); 

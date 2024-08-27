function TienePropiedad(Objeto, propiedad){
    return propiedad in Objeto;
}

const carritoCompras = [
    {
    Producto: 'Notebook Noblex',
    Modelo: 'NB15A-12',
    Procesador: 'Intel Celeron N4000',
    RAM: '4 GB',
    Almacenamiento: '64 GB eMMC',
    Pantalla: '15.6 pulgadas Full HD',
    SistemaOperativo: 'Windows 10 Home',
    },

    {
    Producto: 'Notebook Noblex',
    Modelo: 'NB14A-8',
    Procesador: 'Intel Core i3-1005G1',
    RAM: '4 GB',
    Almacenamiento: '128 GB SSD',
    Pantalla: '14 pulgadas HD',
    SistemaOperativo: 'Windows 10 Home',
    },

    {
    Producto: 'Notebook Noblex',
    Modelo: 'NB17A-8',
    Procesador: 'Intel Core i5-10210U',
    RAM: '8 GB',
    Almacenamiento: '256 GB SSD',
    Pantalla: '17.3 pulgadas HD+',
    SistemaOperativo: 'Windows 10 Home'
    }
]

carritoCompras.forEach((Productos)=>{
    console.log(`Modelo ${Productos.Modelo}:`);
    console.log(TienePropiedad(Productos, 'Peso'))
    console.log(TienePropiedad(Productos, 'RAM'));

})

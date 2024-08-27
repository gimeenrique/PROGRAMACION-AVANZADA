const libro = {
    Titulo: 'Campo de Fresas',
    Autor: 'Jordi Sierra Fabra',
    añoDePublicacion: '1997',

    descripcion() {
        return `Título: ${this.Titulo}, Autor: ${this.Autor}`;
      }
};
console.log(libro.descripcion());
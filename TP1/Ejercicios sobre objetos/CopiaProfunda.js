const estudiantes = {
    nombre:'Juan',
    edad:'25 años',
    direccion: 
    {   calle:'Sarmiento 728',
        ciudad:'Concepcion Del Uruguay',
        pais: 'Argentina', 
    }
}

const copiaProfunda = JSON.parse(JSON.stringify(estudiantes));

console.log(copiaProfunda);

copiaProfunda.direccion.calle = 'San Martin 465';

console.log(estudiantes);
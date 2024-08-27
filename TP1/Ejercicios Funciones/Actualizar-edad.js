function ActualizarEdad (persona, nuevaEdad){
  persona.edad=nuevaEdad
}

let persona = {nombre: 'Luis', edad: 25};

console.log(persona)
ActualizarEdad(persona,35);

console.log(persona);


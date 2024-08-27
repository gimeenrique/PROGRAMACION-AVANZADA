let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 32 },
    { nombre: "Pedro", edad: 28 },
    { nombre: "Lucía", edad: 35 }
  ];
  
  let personaMayorDe30 = personas.find(function(persona) {
    return persona.edad > 30;
  });
  
  console.log(personaMayorDe30); 
  
  
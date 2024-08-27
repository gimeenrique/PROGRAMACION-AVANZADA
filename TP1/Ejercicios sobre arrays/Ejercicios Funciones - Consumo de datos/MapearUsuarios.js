function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición HTTP');
            }
            return response.json();
        });
}

function MapearUsuarios(usuarios){
    return usuarios.map(usuarios => ({
        nombre: usuarios.name,
        email: usuarios.email,
    }) )
}

obtenerUsuarios().then(usuarios =>{
    const usuariosMapeados = MapearUsuarios(usuarios);
    console.log(usuariosMapeados);
}).catch(error => {
    console.error('Hubo un problema con la petición:', error);
});
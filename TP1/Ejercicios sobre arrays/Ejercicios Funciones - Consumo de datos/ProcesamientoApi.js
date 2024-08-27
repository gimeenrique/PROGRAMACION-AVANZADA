function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición HTTP');
            }
            return response.json();
        });
}

obtenerUsuarios().then(usuarios => {
    const nombres = usuarios.map(usuario => usuario.name);
    console.log(nombres); // Esto imprimirá los nombres en la consola
}).catch(error => {
    console.error('Hubo un problema con la petición:', error);
});
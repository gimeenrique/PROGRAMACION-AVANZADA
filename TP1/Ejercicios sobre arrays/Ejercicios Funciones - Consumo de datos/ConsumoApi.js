function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición HTTP');
            }

            return response.json();
        })
        .then(usuarios => {
            console.log(usuarios);
        })
        .catch(error => {
            console.error('Hubo un problema con la petición:', error);
        });
}

obtenerUsuarios();

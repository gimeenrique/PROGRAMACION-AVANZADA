function enviarDatos(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la petición POST');
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta de la API:', data);
    })
    .catch(error => {
        console.error('Hubo un problema con la petición:', error);
    });
}

const datos = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

enviarDatos(datos);

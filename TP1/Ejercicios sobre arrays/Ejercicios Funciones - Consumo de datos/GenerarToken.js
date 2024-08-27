function generarToken(usuario) {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };

    const headerBase64 = btoa(JSON.stringify(header));

    const payloadBase64 = btoa(JSON.stringify(usuario));

    return `${headerBase64}.${payloadBase64}.firma_simulada`;
}

const usuario = {
    id: 123,
    nombre: 'Juan Pérez',
    email: 'juan@example.com'
};

const token = generarToken(usuario);
console.log(token);
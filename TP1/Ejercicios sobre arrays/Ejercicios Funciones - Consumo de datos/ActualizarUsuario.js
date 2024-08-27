function actualizarUsuario(usuario, cambios) {
    return { ...usuario, ...cambios };
}

const usuario = {
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    edad: 30
};

const cambios = {
    nombre: 'Juan Carlos Pérez',
    edad: 31
};

const usuarioActualizado = actualizarUsuario(usuario, cambios);
console.log(usuarioActualizado);

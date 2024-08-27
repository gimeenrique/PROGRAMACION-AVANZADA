function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

const usuarios = [
    { name: 'Juan Pérez', email: 'juan@example.com' },
    { name: 'Ana Gómez', email: 'ana@example.com' },
    { name: 'Luis Fernández', email: 'luis@example.com' }
];

const usuarioBuscado = buscarUsuarioPorEmail(usuarios, 'ana@example.com');
console.log(usuarioBuscado); 

const usuarioNoEncontrado = buscarUsuarioPorEmail(usuarios, 'maria@example.com');
console.log(usuarioNoEncontrado); 

const UsuarioPredefinido = {
    usuario: 'Santiago',
    contraseña: '123abc'
};

function AutenticarUsuario(credenciales){
    return credenciales.usuario === UsuarioPredefinido.usuario && credenciales.contraseña === UsuarioPredefinido.contraseña ;
}

const credenciales = {
    usuario: 'Santiago',
    contraseña: '123abc'
};

const credencialesUsuarioDos = {
    usuario: 'Milagros',
    contraseña: '23465jb'
}

const esAutenticado = AutenticarUsuario(credenciales);
console.log(esAutenticado);

const esAutenticadodos = AutenticarUsuario(credencialesUsuarioDos);
console.log(esAutenticadodos);



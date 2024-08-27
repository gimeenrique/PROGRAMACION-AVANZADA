const formulario = {
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    password: '1234'
};

const formularioDos = {
    nombre: '',
    email: 'ana@example.com',
    password: 'abcd'
};

function validarFormulario (campos){
    const {nombre, password, email} = campos;

    return nombre && email && password && nombre.trim() !== '' && email.trim() !== '' && password.trim() !== '';
}

const esValido = validarFormulario(formulario);
console.log(esValido);

const esValidoIncompleto = validarFormulario(formularioDos);
console.log(esValidoIncompleto);



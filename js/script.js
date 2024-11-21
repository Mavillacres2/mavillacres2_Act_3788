function toggleEnvio() {
    const entregaPropietario = document.getElementById('entregaPropietario').checked;
    const entregaTercero = document.getElementById('entregaTercero').checked;
    const formConfidencial = document.getElementById('formConfidencial');
    const enviarDatos = document.getElementById('enviarDatos');
    if (entregaPropietario) {
        enviarDatos.disabled = false;
        formConfidencial.style.display = 'none';
    } else if (entregaTercero) {
        formConfidencial.style.display = 'block';
        enviarDatos.disabled = false;
    } else {
        enviarDatos.disabled = true;
        formConfidencial.style.display = 'none';
    }
}

function borrarDatos() {
    document.forms['FormProducto'].reset();
}


function toggleDatosEconomicos() {
    const datosEconomicos = document.getElementById('datosEconomicos');
    const infoconfidencial = document.getElementById('infoconfidencial');
    if (infoconfidencial.checked) {
        datosEconomicos.style.display = 'block';
    } else {
        datosEconomicos.style.display = 'none';
    }
}

function validar() {
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('phone').value;
    const emailRegex = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido');
        return false;
    }

    if (telefono.length !== 10 || isNaN(telefono)) {
        alert('Teléfono no válido, ingrese 10 dígitos');
        return false;
    }

    document.getElementById('submitBtn').disabled = true;
    document.getElementById('submitBtn').value = 'Enviando Datos .......';
    this.form.submit();
    return true;
}

function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    if (usuario === "" || contrasena === "") {
        alert('Falta un campo por llenar');
        return false;
    }

    return true;
}
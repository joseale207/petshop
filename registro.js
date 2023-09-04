document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registro-form');

    registroForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtiene los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;

        // Aquí deberías enviar los datos del usuario al servidor para el registro
        // Puedes utilizar fetch() o AJAX para hacer una solicitud POST al servidor
        // y guardar la información en una base de datos

        // Después de registrar al usuario, puedes redirigirlo a otra página, como la página de inicio de sesión
        // window.location.href = 'inicio-sesion.html';
    });
});

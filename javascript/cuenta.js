document.getElementById('formCreateAccount').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Obtener el nombre del usuario
    let name = document.getElementById('name').value;

    // Obtener el archivo de la foto de perfil
    let avatarFile = document.getElementById('avatar').files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        // Guardar los datos en localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userAvatar', reader.result);
        localStorage.setItem('cuentacreada', '1'); // Marcar que la cuenta ha sido creada

        // Redireccionar al perfil.html
        window.location.href = 'perfil.html';
    }

    if (avatarFile) {
        reader.readAsDataURL(avatarFile);
    }
});

// Mostrar datos del usuario al cargar la página
const avatarElements = document.querySelectorAll('.avatar');
const userNameElements = document.querySelectorAll('.username');
const avatarSrc = localStorage.getItem('userAvatar') || 'path/to/your/image.jpg';
const userName = localStorage.getItem('userName') || 'Darlin Lopez';

avatarElements.forEach(avatar => {
    avatar.style.backgroundImage = `url(${avatarSrc})`;
});

userNameElements.forEach(name => {
    name.textContent = userName;
});

// Cambiar foto de perfil
document.getElementById('changeAvatar').addEventListener('change', function(event) {
    let avatarFile = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        localStorage.setItem('userAvatar', reader.result);

        avatarElements.forEach(avatar => {
            avatar.style.backgroundImage = `url(${reader.result})`;
        });
    }

    if (avatarFile) {
        reader.readAsDataURL(avatarFile);
    }
});

  // Mostrar datos del usuario al cargar la página
  const avatarElements = document.querySelectorAll('.avatar');
  const userNameElements = document.querySelectorAll('.username');
  const avatarSrc = localStorage.getItem('userAvatar');
  const userName = localStorage.getItem('userName');

  avatarElements.forEach(avatar => {
      avatar.src = avatarSrc;
  });

  userNameElements.forEach(name => {
      name.textContent = userName;
  });

        function toggleMenu() {
            const menu = document.getElementById('side-menu');
            menu.classList.toggle('open');
        
            // Animar las barras del icono de hamburguesa
            const bars = document.querySelectorAll('.bar');
            bars[0].classList.toggle('rotate-bar1');
            bars[1].classList.toggle('hide-bar2');
            bars[2].classList.toggle('rotate-bar3');
        }
        
        // Añadir las clases de animación para las barras del icono de hamburguesa
        const style = document.createElement('style');
        style.innerHTML = `
        .bar.rotate-bar1 {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .bar.hide-bar2 {
            opacity: 0;
        }
        
        .bar.rotate-bar3 {
            transform: rotate(-45deg) translate(5px, -5px);
        }
        `;
        document.head.appendChild(style);
        





        document.addEventListener("DOMContentLoaded", function() {
            const links = document.querySelectorAll('.nav a');
        
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1); // Elimina el '#'
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });

        

        document.getElementById('perfilLink').addEventListener('click', function(event) {
            event.preventDefault(); // Evitar que se abra el enlace

            // Verificar si la cuenta ha sido creada
            if (localStorage.getItem('cuentacreada') === '1') {
                window.location.href = 'perfil.html'; // Redirigir a perfil.html
            } else {
                window.location.href = 'cuenta.html'; // Redirigir a cuenta.html
            }
        });
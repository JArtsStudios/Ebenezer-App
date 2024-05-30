setTimeout(function() {
    const fadeOverlay = document.getElementById('fadeOverlay');
    fadeOverlay.style.opacity = 1;
    
    // Espera a que la transición termine antes de redirigir
    fadeOverlay.addEventListener('transitionend', function() {
        window.location.href = 'home.html'; // Cambia 'home.html' por la URL de tu página de inicio
    });
}, 6000);

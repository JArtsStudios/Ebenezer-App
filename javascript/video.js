const API_KEY = 'AIzaSyBn41Jf367kk---Opad_qq9jlMWuVbZAxE';
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('videoId');

const videoContainer = document.getElementById('video-container');
const videoTitleElement = document.getElementById('video-title');
const videoDescriptionElement = document.getElementById('video-description');

// Obtener detalles del video
fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const video = data.items[0];
        const title = video.snippet.title;
        const description = video.snippet.description;
        videoTitleElement.innerText = title;
        videoDescriptionElement.innerText = description;
        videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    })
    .catch(error => {
        console.error('Error fetching video details:', error);
        videoTitleElement.innerText = 'Error al cargar el video';
        videoDescriptionElement.innerText = 'No se pudo cargar la descripción del video.';
    });
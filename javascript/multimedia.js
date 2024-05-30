const API_KEY = 'AIzaSyBn41Jf367kk---Opad_qq9jlMWuVbZAxE';
const CHANNEL_ID = 'UCsM-kI4yXjR7XXH5svyy0Kg';

const liveStreamElement = document.getElementById('live-video');
const pastStreamsElement = document.getElementById('past-videos');
const allVideosElement = document.getElementById('all-videos-list');

// Obtener videos en vivo
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        if (data.items.length > 0) {
            const item = data.items[0];
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            liveStreamElement.innerHTML = `<div class="video-item" onclick="openVideoPage('${videoId}')">
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                <div class="video-title">${title}</div>
            </div>`;
        } else {
            liveStreamElement.innerHTML = '<p>No hay transmisiones en vivo en este momento.</p>';
        }
    });

// Obtener videos pasados
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            pastStreamsElement.innerHTML += `<div class="video-item" onclick="openVideoPage('${videoId}')">
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                <div class="video-title">${title}</div>
            </div>`;
        });
    });

// Obtener todos los videos
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            allVideosElement.innerHTML += `<div class="video-item" onclick="openVideoPage('${videoId}')">
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                <div class="video-title">${title}</div>
            </div>`;
        });
    });

function openVideoPage(videoId) {
    window.location.href = `video.html?videoId=${videoId}`;
}

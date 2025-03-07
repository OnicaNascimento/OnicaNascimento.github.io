document.addEventListener('DOMContentLoaded', function() {
    const introVideo = document.getElementById('intro-video');
    const mainContent = document.getElementById('main-content');
    const introVideoContainer = document.getElementById('intro-video-container');

    introVideo.onended = function() {
        introVideoContainer.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 50); // Small delay to ensure display change is processed
    };
});
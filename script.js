document.addEventListener('DOMContentLoaded', function() {
    const introVideo = document.getElementById('intro-video');
    const mainContent = document.getElementById('main-content');
    const introVideoContainer = document.getElementById('intro-video-container');

    function showMainContent() {
        introVideoContainer.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 50); // Small delay to ensure display change is processed
    }

    introVideo.onended = showMainContent;
    document.addEventListener('keydown', showMainContent);
    document.addEventListener('click', showMainContent);

    // Timeout to skip the intro video after 20 seconds
    setTimeout(showMainContent, 20000); // 20000 milliseconds = 20 seconds
});
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('videoPlayer');
    const promoPopup = document.getElementById('promoPopup');
    const closeButton = document.getElementById('closeButton');

    video.addEventListener('timeupdate', () => {
        if (Math.floor(video.currentTime) === window.promoTime) {
            promoPopup.style.display = 'block';
            video.pause();
        }
    });

    closeButton.addEventListener('click', () => {
        promoPopup.style.display = 'none';
        video.play();
    });
});

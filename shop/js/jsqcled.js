const video = document.getElementById('video');
const controlButton = document.getElementById('controlButton');
const playIcon = document.getElementById('playIcon');
const fullscreenButton = document.getElementById('fullscreenButton');
const volumeSlider = document.getElementById('volumeSlider');
const muteButton = document.getElementById('muteButton');

// Initial state: show play icon
playIcon.classList.remove('hidden');

// Toggle play/pause on button click
controlButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playIcon.classList.add('hidden'); 
  } else {
    video.pause();
    playIcon.classList.remove('hidden');
  }
});
fullscreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
});
    // Volume control
    volumeSlider.addEventListener('input', (event) => {
      video.volume = event.target.value;
    });

    // Mute/unmute button functionality
    muteButton.addEventListener('click', () => {
      video.muted = !video.muted;
      muteButton.textContent = video.muted ? '🔇' : '🔊';
    });
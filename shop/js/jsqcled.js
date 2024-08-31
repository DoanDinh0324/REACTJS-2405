
//play videos
const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const currentTimeDisplay = document.getElementById('currentTime');

// Play/Pause Functionality
playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Mute/Unmute Functionality
muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
});

// Update Time Display
video.addEventListener('timeupdate', () => {
  const currentTime = Math.floor(video.currentTime);
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} / 16:06`;
});
// JavaScript to toggle fullscreen
const fullscreenBtn = document.getElementById('fullscreenBtn');
const videoContainer = document.getElementById('myVideo');

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
});





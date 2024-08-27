
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




//play video right
const video1 = document.getElementById('video1');
const playPauseBtn1 = document.getElementById('playPauseBtn1');
const muteBtn1 = document.getElementById('muteBtn1');
const currentTimeDisplay1 = document.getElementById('currentTime1');

// Play/Pause Functionality
playPauseBtn1.addEventListener('click', () => {
  if (video1.paused) {
    video1.play();
  } else {
    video1.pause();
  }
});

// Mute/Unmute Functionality
muteBtn1.addEventListener('click', () => {
  video1.muted = !video1.muted;
});

// Update Time Display
video1.addEventListener('timeupdate', () => {
  const currentTime1 = Math.floor(video1.currentTime1);
  const minutes = Math.floor(currentTime1 / 60);
  const seconds = currentTime1 % 100;
  currentTimeDisplay1.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} / 10:00`;
});
// JavaScript to toggle fullscreen
const fullscreenBtn1 = document.getElementById('fullscreenBtn1');
const videoContainer1 = document.getElementById('video');

fullscreenBtn1.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video1.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
});

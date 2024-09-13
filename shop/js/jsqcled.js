const video = document.getElementById('main-video');  // Video chính
const controlButton = document.getElementById('controlButton');  // Nút điều khiển play/pause
const playIcon = document.getElementById('playIcon');  // Biểu tượng play
const progressBar = document.getElementById('progress-bar');  // Thanh tiến trình
const progressBarContainer = document.getElementById('progress-bar-container');  // Container của thanh tiến trình
const pauseIcon = document.getElementById('pauseIcon');
const replayButton = document.getElementById('replayButton');  // Nút phát lại
const currentTimeElem = document.getElementById('current-time');  // Hiển thị thời gian hiện tại
const totalTimeElem = document.getElementById('total-time');  // Hiển thị tổng thời gian
const subtitlesButton = document.getElementById('subtitlesButton');  // Nút phụ đề
const subtitlesTrack = document.getElementById('subtitles');  // Track phụ đề
const fullscreenButton = document.getElementById('fullscreenButton');
const volumeButton = document.getElementById('volume-button');  // Nút âm lượng
const volumeIcon = document.getElementById('volume-icon');  // Biểu tượng âm lượng
const volumeBar = document.getElementById('volume-bar');  // Thanh điều chỉnh âm lượng
const volumeBarContainer = document.getElementById('volume-bar-container');  // Container của thanh âm lượng
const toggleMiniPlayerButton = document.getElementById('toggle-mini-player');  // Nút kích hoạt mini player

// Initial state: show play icon
playIcon.classList.remove('hidden');

// Toggle play/pause on button click
controlButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();  // Phát video khi đang tạm dừng
    playIcon.classList.add('hidden');  // Ẩn biểu tượng play
    pauseIcon.classList.remove('hidden');  // Hiển thị biểu tượng pause
  } else {
    video.pause();  // Dừng video khi đang phát
    pauseIcon.classList.add('hidden');  // Ẩn biểu tượng pause
    playIcon.classList.remove('hidden');  // Hiển thị biểu tượng play
  }
});
// Cập nhật thanh tiến trình khi video phát
video.addEventListener('timeupdate', () => {
  const percentage = (video.currentTime / video.duration) * 100;  // Tính phần trăm thời gian phát
  progressBar.style.width = `${percentage}%`;  // Cập nhật độ dài thanh tiến trình
});
// Khi nhấp vào nút phát lại
replayButton.addEventListener('click', () => {
  video.currentTime = 0;  // Đặt thời gian video về 0
  video.play();  // Phát video từ đầu
  playIcon.classList.add('hidden');  // Ẩn biểu tượng play
  pauseIcon.classList.remove('hidden');  // Hiển thị biểu tượng pause
});
// Khi nhấp vào nút phụ đề
subtitlesButton.addEventListener('click', () => {
  subtitlesEnabled = !subtitlesEnabled;  // Chuyển trạng thái phụ đề
  subtitlesTrack.mode = subtitlesEnabled ? 'showing' : 'hidden';  // Hiển thị hoặc ẩn phụ đề
});
fullscreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    video.requestFullscreen();
  }
});
// Hàm để định dạng thời gian thành mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Cập nhật thời gian video và thanh tiến trình
video.addEventListener('timeupdate', () => {
  const currentTime = video.currentTime;
  const duration = video.duration;

  // Cập nhật thời gian hiện tại và tổng thời gian
  currentTimeElem.textContent = formatTime(currentTime);
  totalTimeElem.textContent = formatTime(duration);

  // Cập nhật thanh tiến trình
  const percentage = (currentTime / duration) * 100;
  progressBar.style.width = `${percentage}%`;
});

// Cho phép người dùng tua video bằng cách nhấp vào thanh tiến trình
progressBarContainer.addEventListener('click', (e) => {
  const rect = progressBarContainer.getBoundingClientRect();  // Lấy vị trí của thanh tiến trình
  const offsetX = e.clientX - rect.left;  // Xác định vị trí nhấp chuột so với thanh
  const percentage = offsetX / rect.width;  // Tính phần trăm vị trí nhấp chuột
  video.currentTime = percentage * video.duration;  // Tua video đến thời điểm tương ứng
});
// Cập nhật trạng thái âm lượng và biểu tượng
function updateVolume() {
  const volume = video.volume;
  volumeBar.style.width = `${volume * 100}%`;
  if (volume === 0) {
    volumeIcon.innerHTML = '<path d="M12 3v18c-4.33 0-8-3.67-8-8s3.67-8 8-8zm6 8c0 1.91-.63 3.68-1.69 5.11L16 18v-2.11C17.37 14.32 18 12.28 18 10c0-2.28-.63-4.32-1.69-6.11L16 4.11V2h2v2.11l.31.31C19.37 5.32 20 7.09 20 9z"/>';  // Biểu tượng âm lượng tắt
  } else if (volume <= 0.5) {
    volumeIcon.innerHTML = '<path d="M12 3v18c-4.33 0-8-3.67-8-8s3.67-8 8-8zm6 8c0 1.91-.63 3.68-1.69 5.11L16 18v-2.11C17.37 14.32 18 12.28 18 10c0-2.28-.63-4.32-1.69-6.11L16 4.11V2h2v2.11l.31.31C19.37 5.32 20 7.09 20 9z"/>';  // Biểu tượng âm lượng trung bình
  } else {
    volumeIcon.innerHTML = '<path d="M12 3v18c-4.33 0-8-3.67-8-8s3.67-8 8-8zm6 8c0 1.91-.63 3.68-1.69 5.11L16 18v-2.11C17.37 14.32 18 12.28 18 10c0-2.28-.63-4.32-1.69-6.11L16 4.11V2h2v2.11l.31.31C19.37 5.32 20 7.09 20 9z"/>';  // Biểu tượng âm lượng cao
  }
}

// Khi nhấp vào nút âm lượng
volumeButton.addEventListener('click', () => {
  if (volumeBarContainer.classList.contains('hidden')) {
    volumeBarContainer.classList.remove('hidden');  // Hiển thị thanh âm lượng
    volumeButton.classList.add('text-gray-500');  // Đổi màu nút âm lượng
  } else {
    volumeBarContainer.classList.add('hidden');  // Ẩn thanh âm lượng
    volumeButton.classList.remove('text-gray-500');  // Khôi phục màu nút âm lượng
  }
});

// Cập nhật thanh âm lượng khi kéo
volumeBarContainer.addEventListener('click', (e) => {
  const rect = volumeBarContainer.getBoundingClientRect();  // Lấy vị trí của thanh âm lượng
  const offsetX = e.clientX - rect.left;  // Xác định vị trí nhấp chuột so với thanh
  const percentage = offsetX / rect.width;  // Tính phần trăm vị trí nhấp chuột
  video.volume = percentage;  // Cập nhật âm lượng video
  updateVolume();  // Cập nhật thanh âm lượng và biểu tượng
});

// Cập nhật thanh âm lượng khi thay đổi âm lượng video
video.addEventListener('volumechange', () => {
  updateVolume();  // Cập nhật thanh âm lượng và biểu tượng khi âm lượng thay đổi
});

function swapVideo(smallVideoElement) {
  // Lấy video lớn
  const mainVideo = document.getElementById('main-video');
  const mainSource = mainVideo.querySelector('source');

  // Lấy video nhỏ
  const smallVideo = smallVideoElement.querySelector('video');
  const smallSource = smallVideo.querySelector('source');

  // Hoán đổi URL của video lớn và video nhỏ
  const tempUrl = mainSource.src;
  mainSource.src = smallSource.src;
  smallSource.src = tempUrl;

  // Tải lại cả video lớn và video nhỏ
  mainVideo.load();
  smallVideo.load();
}
// Khi nhấp vào nút kích hoạt mini player
toggleMiniPlayerButton.addEventListener('click', () => {
  if (video.classList.contains('minimized')) {
    video.classList.remove('minimized');
    video.classList.add('maximized');  // Trở lại kích thước đầy đủ
  } else {
    video.classList.remove('maximized');
    video.classList.add('minimized');  // Thu nhỏ thành mini player
  }
});


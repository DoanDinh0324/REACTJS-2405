//colorPicker
let colorPicker;
const defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}

function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}

const fileInputs = document.querySelectorAll('.fileInput');
const imagePreviews = document.querySelectorAll('.imagePreview');

// Add click events to image previews to trigger file input
imagePreviews.forEach((preview) => {
    const id = preview.getAttribute('data-id');
    preview.addEventListener('click', () => {
        document.querySelector(`.fileInput[data-id="${id}"]`).click();
    });
});

// Handle file input change to show previews
fileInputs.forEach((fileInput) => {
    fileInput.addEventListener('change', handleFileSelect);
});

function handleFileSelect(event) {
    const id = this.getAttribute('data-id');
    const previewContainer = document.querySelector(`.imagePreview[data-id="${id}"]`);
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const src = e.target.result;
            file.type.startsWith('image/') ? displayImage(src, previewContainer) : displayVideo(src, previewContainer);
            previewContainer.addEventListener('click', () => showInBothMainPreviews(src, file.type));
        };
        reader.readAsDataURL(file);
    }
}

// Display image in small container
function displayImage(src, container) {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.className = 'object-cover w-full h-full rounded-md';
    container.innerHTML = ''; // Clear current content
    container.appendChild(imgElement);
}

// Display video in small container
function displayVideo(src, container) {
    const videoElement = document.createElement('video');
    videoElement.src = src;
    videoElement.controls = true; // Show video controls
    videoElement.className = 'object-cover w-full h-full rounded-md';
    container.innerHTML = ''; // Clear current content
    container.appendChild(videoElement);
}

// Show image or video in main previews
function showInBothMainPreviews(src, fileType) {
    const mainPreviews = [document.querySelector('.mainPreview1'), document.querySelector('.mainPreview2')];

    mainPreviews.forEach(mainPreview => {
        mainPreview.innerHTML = ''; // Clear current content
        if (fileType.startsWith('image/')) {
            const imgElement = document.createElement('img');
            imgElement.src = src;
            imgElement.className = 'object-cover w-full h-full rounded-md';
            mainPreview.appendChild(imgElement);
        } else if (fileType.startsWith('video/')) {
            const videoElement = document.createElement('video');
            videoElement.src = src;
            videoElement.controls = true; // Show video controls
            videoElement.className = 'object-cover w-full h-full rounded-md';
            mainPreview.appendChild(videoElement);
        }
    });
}



let mediaSources = []; // Mảng để lưu trữ các nguồn hình ảnh/video
let currentIndex = 0; // Chỉ số hiện tại

// Cập nhật mảng mediaSources khi người dùng chọn tệp
function handleFileSelect(event) {
    const id = this.getAttribute('data-id');
    const previewContainer = document.querySelector(`.imagePreview[data-id="${id}"]`);
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const src = e.target.result;
            mediaSources.push(src); // Thêm nguồn vào mảng
            file.type.startsWith('image/') ? displayImage(src, previewContainer) : displayVideo(src, previewContainer);
            previewContainer.addEventListener('click', () => {
                showInBothMainPreviews(src, file.type);
                startAutoSwitch(); // Bắt đầu tự động chuyển đổi khi nhấp vào preview
            });
        };
        reader.readAsDataURL(file);
    }
}

// Hàm tự động chuyển đổi hình ảnh/video
function startAutoSwitch() {
    clearInterval(autoSwitchInterval); // Xóa interval trước đó nếu có
    autoSwitchInterval = setInterval(() => {
        if (mediaSources.length > 0) {
            currentIndex = (currentIndex + 1) % mediaSources.length; // Cập nhật chỉ số
            showInBothMainPreviews(mediaSources[currentIndex], getFileType(mediaSources[currentIndex])); // Hiển thị media tiếp theo
        }
    }, 3000); // Thay đổi mỗi 3 giây (3000 ms)
}

// Lấy kiểu tệp từ URL
function getFileType(src) {
    return src.startsWith('data:image/') ? 'image/' : 'video/';
}

// Thêm biến autoSwitchInterval
let autoSwitchInterval;

// Các hàm khác vẫn giữ nguyên...

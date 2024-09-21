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

// Lấy tất cả các phần tử chứa file input và các khung hình nhỏ
const fileInputs = document.querySelectorAll('.fileInput');
const imagePreviews = document.querySelectorAll('.imagePreview');

// Lặp qua các khung hình nhỏ và gắn sự kiện click để kích hoạt chọn file
imagePreviews.forEach((preview) => {
    const id = preview.getAttribute('data-id');
    preview.addEventListener('click', () => {
        document.querySelector(`.fileInput[data-id="${id}"]`).click();
    });
});

// Lặp qua tất cả các file input và xử lý xem trước tệp
fileInputs.forEach((fileInput) => {
    fileInput.addEventListener('change', () => {
        const id = fileInput.getAttribute('data-id');
        const previewContainer = document.querySelector(`.imagePreview[data-id="${id}"]`);
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const src = e.target.result;

                // Hiển thị hình ảnh hoặc video trong khung nhỏ
                if (file.type.startsWith('image/')) {
                    displayImage(src, previewContainer);
                } else if (file.type.startsWith('video/')) {
                    displayVideo(src, previewContainer);
                }

                // Gắn sự kiện click để hiển thị hình ảnh hoặc video trong 2 khung lớn
                previewContainer.addEventListener('click', () => {
                    showInBothMainPreviews(src, file.type);
                });
            };
            reader.readAsDataURL(file);
        }
    });
});

// Hiển thị ảnh trong khung nhỏ
function displayImage(src, container) {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.className = 'object-cover w-full h-full rounded-md';
    container.innerHTML = ''; // Xóa nội dung hiện tại của khung
    container.appendChild(imgElement);
}

// Hiển thị video trong khung nhỏ
function displayVideo(src, container) {
    const videoElement = document.createElement('video');
    videoElement.src = src;
    videoElement.controls = true; // Hiển thị các điều khiển video
    videoElement.className = 'object-cover w-full h-full rounded-md';
    container.innerHTML = ''; // Xóa nội dung hiện tại của khung
    container.appendChild(videoElement);
}

// Hiển thị hình ảnh hoặc video trong cả hai khung chứa lớn
function showInBothMainPreviews(src, fileType) {
    const mainPreviews = [document.querySelector('.mainPreview1'), document.querySelector('.mainPreview2')];
    
    mainPreviews.forEach(mainPreview => {
        mainPreview.innerHTML = ''; // Xóa nội dung hiện tại của khung
        
        if (fileType.startsWith('image/')) {
            const imgElement = document.createElement('img');
            imgElement.src = src;
            imgElement.className = 'object-cover w-full h-full rounded-md';
            mainPreview.appendChild(imgElement);
        } else if (fileType.startsWith('video/')) {
            const videoElement = document.createElement('video');
            videoElement.src = src;
            videoElement.controls = true; // Hiển thị điều khiển video
            videoElement.className = 'object-cover w-full h-full rounded-md';
            mainPreview.appendChild(videoElement);
        }
    });
}

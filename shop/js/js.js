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






// Hàm kích hoạt trường nhập tệp
function triggerFileInput(classId) {
  document.querySelector('.fileInput' + classId).click();
}

// Hàm xem trước tệp
function previewFile(classId) {
  const fileInputs = document.querySelectorAll('.fileInput' + classId);
  const previewContainers = document.querySelectorAll('.imagePreview' + classId);

  fileInputs.forEach((fileInput, index) => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const src = e.target.result;

        // Hiển thị ảnh trong tất cả các phần tử có lớp hoặc ID
        displayImageInAllContainers(src, classId);
      };
      reader.readAsDataURL(file);
    }
  });
}


// Hàm hiển thị ảnh trong tất cả các phần tử có lớp hoặc ID
function displayImageInAllContainers(src, classId) {
  // Tìm tất cả các phần tử có lớp cụ thể
  const containersByClass = document.querySelectorAll('.imagePreview' + classId);
  containersByClass.forEach(container => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.className = 'object-cover w-full h-full rounded-md';
    container.innerHTML = ''; // Xóa nội dung hiện tại của khung
    container.appendChild(imgElement);
  });

  // Tìm tất cả các phần tử có ID cụ thể
  const containersById = document.querySelectorAll('#' + classId);
  containersById.forEach(container => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.className = 'object-cover w-full h-full rounded-md';
    container.innerHTML = ''; // Xóa nội dung hiện tại của khung
    container.appendChild(imgElement);
  });
}
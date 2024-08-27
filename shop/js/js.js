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




//show-images
function triggerFileInput(classId) {
  document.querySelector('.fileInput' + classId).click();
}

function previewFile(classId) {
  const fileInputs = document.querySelectorAll('.fileInput' + classId);
  const previewContainers = document.querySelectorAll('.imagePreview' + classId);

  fileInputs.forEach((fileInput, index) => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const previewContainer = previewContainers[index];
        previewContainer.innerHTML = '';  // Clear the preview container
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.className = 'object-cover w-full h-full rounded-md';
        // const videoElement = document.createElement('video');
        // videoElement.src = e.target.result;
        // videoElement.className = 'object-cover w-full h-full rounded-md';
        // videoElement.controls = true; previewContainer.appendChild(videoElement);
        previewContainer.appendChild(imgElement);
      };
      reader.readAsDataURL(file);
    }
  });
}


//colorPicker
let colorPicker;
const defaultColor = "#";

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



//video-images
function triggerFileInput(index) {
  document.getElementById('fileInput' + index).click();
}

function previewFile(index) {
  const fileInput = document.getElementById('fileInput' + index);
  const file = fileInput.files[0];
  const container = fileInput.closest('.file-container');

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Display the file as a thumbnail background image
      container.style.backgroundImage = `url(${e.target.result})`;
      container.style.backgroundSize = 'cover';
      container.style.backgroundPosition = 'center';
      container.querySelector('span').style.display = 'none'; // Hide the plus icon
    };
    reader.readAsDataURL(file);
  }
}

function toggleFileInput(mediaType) {
  // Implement functionality to handle media type selection if needed
}



//show-images
function triggerFileInput(id) {
  document.getElementById('fileInput' + id).click();
}

function previewFile(id) {
  const fileInput = document.getElementById('fileInput' + id);
  const previewContainer = document.getElementById('imagePreview' + id);
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Clear the preview container and add the selected image
      previewContainer.innerHTML = '';
      const imgElement = document.createElement('img');
      imgElement.src = e.target.result;
      imgElement.className = 'object-cover w-full h-full rounded-md';
      previewContainer.appendChild(imgElement);
    };

    reader.readAsDataURL(file);
  }
}


// show-radio
// function toggleFileInput(type) {
//   const imageInput = document.getElementById('imageInput');
//   const videoInput = document.getElementById('videoInput');

//   if (type === 'image') {
//       imageInput.classList.remove('hidden');
//       videoInput.classList.add('hidden');
//   } else if (type === 'video') {
//       imageInput.classList.add('hidden');
//       videoInput.classList.remove('hidden');
//   }
// }

// function previewFile(type) {
//  if (type === 'video') {
//       const fileInput = document.querySelector('input[name="media"][accept="video/*"]');
//       const videoPreview = document.getElementById('videoPreview');
//       const file = fileInput.files[0];

//       if (file) {
//           const reader = new FileReader();

//           reader.onload = function(e) {
//               videoPreview.src = e.target.result;
//               videoPreview.classList.remove('hidden');
//               videoPreview.load();
//               videoPreview.play();
//           };

//           reader.readAsDataURL(file);
//       }
//   }
// }

// document.getElementById('uploadForm').onsubmit = async function(event) {
//   event.preventDefault();

//   const formData = new FormData(this);

//   const response = await fetch('/upload', {
//       method: 'POST',
//       body: formData
//   });

//   const result = await response.text();
//   document.getElementById('response').innerText = result;
// }
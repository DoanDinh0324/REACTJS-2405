function showContent(tab) {
    const camNhanContent = document.getElementById('camNhanContent');
    const videoContent = document.getElementById('videoContent');
    const camNhanTab = document.getElementById('camNhanTab');
    const videoTab = document.getElementById('videoTab');

    if (tab === 'camNhan') {
        camNhanContent.classList.remove('hidden');
        videoContent.classList.add('hidden');
        camNhanTab.classList.add('text-blue-600', 'font-semibold');
        videoTab.classList.remove('text-blue-600', 'font-semibold');
    } else if (tab === 'video') {
        videoContent.classList.remove('hidden');
        camNhanContent.classList.add('hidden');
        videoTab.classList.add('text-blue-600', 'font-semibold');
        camNhanTab.classList.remove('text-blue-600', 'font-semibold');
    }
}

document.getElementById('toggleButton').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
});

document.getElementById("toggleButton1").addEventListener("click", function() {
    const dropdownMenu = document.getElementById("dropdownMenu1");
    const overlay = document.getElementById("overlay");

    dropdownMenu.classList.toggle("hidden");
    overlay.classList.toggle("hidden"); // Show/hide the background overlay
});

// Close the dropdown and overlay if clicked outside
document.addEventListener("click", function(event) {
    const toggleButton = document.getElementById("toggleButton1");
    const dropdownMenu = document.getElementById("dropdownMenu1");
    const overlay = document.getElementById("overlay");

    if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
        overlay.classList.add("hidden"); // Hide the overlay
    }
});

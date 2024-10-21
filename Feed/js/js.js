document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const parentMenu = document.getElementById('parentMenu');
    const submenu = document.getElementById('submenu');
    const arrow = document.getElementById('arrow');

    // Toggle submenu and arrow rotation
    parentMenu.addEventListener('click', function() {
        submenu.classList.toggle('hidden'); // Toggle the hidden class

        // Rotate arrow by toggling class
        arrow.classList.toggle('rotate-180');
    });
});
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

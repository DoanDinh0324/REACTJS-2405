// Get the modal and the button that triggers it
const showModal = document.getElementById('showModal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

// Show the modal when the button is clicked
showModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Optional: Close the modal when the background is clicked
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
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
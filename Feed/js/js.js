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
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const channelMenu = document.getElementById('channelMenu');
    const channelSubmenu = document.getElementById('channelSubmenu');
    const channelArrow = document.getElementById('channelArrow');

    // Toggle submenu and arrow rotation
    channelMenu.addEventListener('click', function() {
        channelSubmenu.classList.toggle('hidden'); // Toggle submenu visibility
        channelArrow.classList.toggle('rotate-180'); // Rotate arrow on click
    });
});

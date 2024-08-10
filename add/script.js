// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle active class on sidebar items
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Additional JavaScript functionality here
});

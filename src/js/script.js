// This file contains JavaScript code to handle user interactions, such as toggling between light and dark modes, managing the registration/login functionality, and processing the text input to generate class diagrams.

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.querySelector('img'); // Select the logo image

    // Toggle between light and dark mode
    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            toggleButton.textContent = 'Dark Mode';
            logo.src = 'darklogobg.png'; // Switch to dark logo
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            toggleButton.textContent = 'Light Mode';
            logo.src = 'lightlogobg.png'; // Switch to light logo
        }
    });

    // Redirect to login page if not logged in
    const startButton = document.getElementById('start-diagram');
    startButton.addEventListener('click', () => {
        const isLoggedIn = true; // Replace with actual login check
        if (!isLoggedIn) {
            window.location.href = './auth.html';
        } else {
            window.location.href = './app.html';
        }
    });
});
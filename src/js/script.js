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
            toggleButton.innerHTML='<img src="https://cdn.discordapp.com/attachments/1258104265214398608/1360892335478804521/dark.png?ex=67fcc540&is=67fb73c0&hm=e2a8a7e5c77178a508c44ef019819aa45e8d029495f570a303d131d2c847dec3&" width="30" height="30" alt="Dark Mode Icon">'
            logo.src = 'darklogobg.png'; // Switch to dark logo
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            toggleButton.innerHTML ='<img src="https://cdn.discordapp.com/attachments/1258104265214398608/1360892335717617755/light.png?ex=67fcc540&is=67fb73c0&hm=84894b022393d591deb3ad61112db52dc9a022bd4aa75c88267f0f892c3ff22c&" width="30" height="30" alt="Light Mode Icon">'
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
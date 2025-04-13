document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    const response = await fetch('./users.json');
    const users = await response.json();

    if (users.find(user => user.username === username)) {
        alert('Username already exists.');
        return;
    }

    users.push({ username, password });

    await fetch('./users.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(users),
    });

    alert('Sign up successful!');
    window.location.href = './signin.html';
});
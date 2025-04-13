document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signin-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim().toLowerCase();
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('./users.json');
            if (!response.ok) throw new Error('Failed to load users');
            
            const data = await response.json();
            const users = data.users || [];
            
            const user = users.find(user => 
                user.username.trim().toLowerCase() === username &&
                user.password === password
            );
            
            if (user) {
                alert('Login successful!');
                window.location.href = './app.html';
            } else {
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error loading users. Please try again later.');
        }
    });
});
document.getElementById('mail').addEventListener('submit', async e => {
    e.preventDefault();

    await fetch('http://localhost:2700/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            role: document.getElementById('role').value
        }),
        headers: { 'Content-Type': 'application/json' }
    });
});

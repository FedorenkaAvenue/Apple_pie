document.getElementById('mail').addEventListener('submit', async e => {
    e.preventDefault();

    await fetch('https://apple-pie-server.herokuapp.com/api/auth/signup', {
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

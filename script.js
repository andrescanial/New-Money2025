function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check credentials
    if (username === '09269197835' && password === 'andresanadon') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('home').style.display = 'block';
        document.getElementById('loginMessage').innerText = 'Login successful!';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
}

function handleRegister(event) {
    event.preventDefault();
    // Registration logic can be added here
    document.getElementById('registerMessage').innerText = 'Registration functionality is not implemented yet.';
}

function handleTransfer(event) {
    event.preventDefault();
    // Transfer logic can be added here
    document.getElementById('transferMessage').innerText = 'Transfer functionality is not implemented yet.';
}

function purchaseLoad() {
    // Load purchase logic can be added here
    document.getElementById('loadMessage').innerText = 'Load purchase functionality is not implemented yet.';
}

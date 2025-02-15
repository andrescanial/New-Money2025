let balance = 1000; // Simulating user balance, you can set this to any initial value

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check credentials
    if (username === '09269197835' && password === 'andresanadon') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('home').style.display = 'block';
        document.getElementById('loginMessage').innerText = 'Login successful!';
        document.getElementById('balanceAmount').innerText = `₱${balance.toFixed(2)}`; // Display initial balance
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
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Check if the amount is valid and if there is enough balance
    if (amount > 0 && amount <= balance) {
        balance -= amount; // Deduct amount from balance
        document.getElementById('transferMessage').innerText = `Successfully sent ₱${amount} to ${recipient}.`;
        document.getElementById('balanceAmount').innerText = `₱${balance.toFixed(2)}`; // Update balance display
    } else {
        document.getElementById('transferMessage').innerText = 'Insufficient balance or invalid amount.';
    }
}

function purchaseLoad() {
    const loadAmount = parseFloat(document.getElementById('loadAmount').value);
    
    // Check if the load amount is valid and if there is enough balance
    if (loadAmount > 0 && loadAmount <= balance) {
        balance -= loadAmount; // Deduct load amount from balance
        document.getElementById('loadMessage').innerText = `Successfully purchased ₱${loadAmount} load.`;
        document.getElementById('balanceAmount').innerText = `₱${balance.toFixed(2)}`; // Update balance display
    } else {
        document.getElementById('loadMessage').innerText = 'Insufficient balance or invalid amount.';
    }
}

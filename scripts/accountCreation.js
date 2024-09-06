document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const form = document.getElementById('accountCreationForm');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        let messages = [];
        
        // Check if name field is empty
        if (name.value.trim() === '') {
            messages.push('Name is required');
        }

        // Check if email field is empty
        if (email.value.trim() === '') {
            messages.push('Email is required');
        }

        // Check if password field is empty
        if (password.value.trim() === '') {
            messages.push('Password is required');
        }

        // Check if confirm password field is empty or doesn’t match password
        if (confirmPassword.value.trim() === '') {
            messages.push('Confirm Password is required');
        } else if (confirmPassword.value !== password.value) {
            messages.push('Passwords do not match');
        }

        // If there are any messages, prevent form submission and display messages
        if (messages.length > 0) {
            e.preventDefault();
            errorElement.innerText = messages.join(', ');
        } else {
            // Store form data in localStorage
            localStorage.setItem('userData', JSON.stringify({
                name: name.value,
                email: email.value
            }));
            // Redirect to userPage.html
            window.location.href = 'userScreen.html';
        }
    });
});

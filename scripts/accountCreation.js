document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')
    const form = document.getElementById('accountCreationForm')

    form.addEventListener('submit', (e) => {
        let messages = []

        if (name.value.trim() === '') {
            messages.push('Name is required')
        }
        
        if (email.value.trim() === '') {
            messages.push('Email is required')
        }

        if (password.value.trim() === '') {
            messages.push('Password is required')
        } else {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
            if (!passwordRegex.test(password.value)) {
                messages.push('Password must be at least 8 characters long, include at least one number and one special character')
            }
        }

        if (confirmPassword.value.trim() === '') {
            messages.push('Confirm Password is required')
        } else if (confirmPassword.value !== password.value) {
            messages.push('Passwords do not match')
        }

        if (messages.length > 0) {
            e.preventDefault()
            alert(messages.join(', '))
        } else {
            localStorage.setItem('userData', JSON.stringify({
                name: name.value,
                email: email.value
            }))
            window.location.href = 'userScreen.html'
        }
    })

    document.getElementById('backBtn').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            window.location.href = 'loginScreen.html'
        }
    })
})

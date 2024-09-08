document.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.getElementById('userInfo')

    const userData = JSON.parse(localStorage.getItem('userData'))

    if (userData) {
        userInfo.innerText = `Name: ${userData.name}\n Email: ${userData.email}`
        localStorage.removeItem('userData')
    } else {
        userInfo.innerText = 'No user data found.'
    }
});

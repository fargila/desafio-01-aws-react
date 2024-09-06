document.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.getElementById('userInfo');

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        userInfo.innerText = `Name: ${userData.name}, Email: ${userData.email}`;
        // Optionally clear the data if no longer needed
        localStorage.removeItem('userData');
    } else {
        userInfo.innerText = 'No user data found.';
    }
});

function updateText() {
    const title = document.getElementById('title')
    const textBtn = document.getElementById('textBtn')
    if (window.innerWidth <= 376) {
      title.textContent = "Let's you in"
      textBtn.textContent = "Sign in with password"
    } else {
      title.textContent = "Let's log you in"
      textBtn.textContent = "Login with E-mail"
    }
  }

  window.addEventListener('resize', updateText)
  window.addEventListener('load', updateText)
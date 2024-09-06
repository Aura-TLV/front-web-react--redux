document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('passwordInput');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Меняем иконку в зависимости от состояния
    this.classList.toggle('bi-eye');
    this.classList.toggle('bi-eye-slash');
});

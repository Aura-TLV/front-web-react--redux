document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
        inputs.forEach(input => {
            input.value = '';
        });
    }, 100); // Задержка в 100 миллисекунд
});


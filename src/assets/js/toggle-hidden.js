document.getElementById('toggleLink').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвратить переход по ссылке
    document.querySelector('.additional-fields').classList.toggle('toggle-hidden');
});

document.getElementById('toggleIcon').addEventListener('click', function() {
    document.querySelector('.additional-fields').classList.toggle('toggle-hidden');
});
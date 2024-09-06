document.addEventListener('DOMContentLoaded', function () { // добавление обработчика событий после того как весь контент загрузится
      var toggleButtons = document.querySelectorAll('.toggle-button'); // выбор кнопок для сворачивния или разворачивания
      toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var targetId = button.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          var isExpanded = targetElement.classList.contains('show');

          
          setTimeout(function() { // изменение текста на кнопке
            if (isExpanded) {
              button.textContent = 'Развернуть ' + button.textContent.split(' ')[1];
            } else {
              button.textContent = 'Свернуть ' + button.textContent.split(' ')[1];
            }
          }, 350); 
        });
      });

      
      toggleButtons.forEach(function (button) {
        var targetId = button.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        var isExpanded = targetElement.classList.contains('show');

        if (isExpanded) {
          button.textContent = 'Скрыть ' + button.textContent.split(' ')[1];
        } else {
          button.textContent = 'Подробнее ' + button.textContent.split(' ')[1];
        }
      });
    });
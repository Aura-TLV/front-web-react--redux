document.addEventListener('DOMContentLoaded', function () {
      var toggleLinks = document.querySelectorAll('.toggle-link');
      toggleLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          var targetId = link.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);
          var isExpanded = targetElement.classList.contains('show');

          setTimeout(function() {
            if (isExpanded) {
              link.classList.add('collapsed');
            } else {
              link.classList.remove('collapsed');
            }
          }, 350); // Задержка должна совпадать с длительностью анимации
        });
      });

      // Инициализация состояния стрелки при загрузке страницы
      toggleLinks.forEach(function (link) {
        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        var isExpanded = targetElement.classList.contains('show');

        if (isExpanded) {
          link.classList.remove('collapsed');
        } else {
          link.classList.add('collapsed');
        }
      });
    }); 
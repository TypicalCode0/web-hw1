document.addEventListener('DOMContentLoaded', function() {
    // Кнопка для изменения цвета фона
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('bg-changed');
    });
  
    // Кнопка для показа/скрытия дополнительной информации
    const toggleInfoButton = document.getElementById('toggleInfoButton');
    const extraInfoSection = document.getElementById('extraInfo');
  
    toggleInfoButton.addEventListener('click', function() {
      if (extraInfoSection.classList.contains('hidden')) {
        extraInfoSection.classList.remove('hidden');
        toggleInfoButton.textContent = 'Скрыть доп. информацию';
      } else {
        extraInfoSection.classList.add('hidden');
        toggleInfoButton.textContent = 'Показать доп. информацию';
      }
    });
  });
  
$(document).ready(function() {
  $('#contactForm').submit(function(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы

    // Проверяем валидность формы
    if (validateForm()) {
      $('#successModal').modal('show'); // Показываем модальное окно успешного отправления
    }
  });

  function validateForm() {
    var valid = true;

    // Проверяем каждое поле на валидность
    $('#contactForm input, #contactForm textarea').each(function() {
      if ($(this).prop('required') && !$(this).val()) {
        valid = false;
        $(this).next().text($(this).data('error')); // Отображаем сообщение об ошибке
      } else {
        $(this).next().text(''); // Очищаем сообщение об ошибке, если поле заполнено
      }
    });

    return valid;
  }
});
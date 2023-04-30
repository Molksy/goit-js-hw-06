const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // предотвращаем перезагрузку страницы

  const { email, password } = event.target.elements; // получаем доступ к элементам формы

  if (email.value === '' || password.value === '') { // проверяем, заполнены ли все поля
    alert('All fields must be filled!');
    return; // прерываем выполнение функции, если есть незаполненные поля
  }

  if (email.value.includes('.ru')) {
    alert('Русский военный корабль иди на ***!');
    return; // прерываем выполнение функции, если есть незаполненные поля
  }

  const userData = { // создаем объект с данными пользователя
    email: email.value,
    password: password.value,
  };

  console.log(userData); // выводим объект с данными в консоль
  form.reset(); // очищаем поля формы
});

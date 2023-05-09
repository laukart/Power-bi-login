const correctUsername = "11111";
const correctPassword = "11111";

const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // отменяем действие по умолчанию (отправку формы)

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "index2.html", _blank; // переходим на защищенную страницу
  } else {
    alert("Неправильный логин или пароль"); // выводим сообщение об ошибке
  }
});

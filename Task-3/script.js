var form = document.querySelector("#regForm");
var result = document.querySelector("#result");

// Source - https://stackoverflow.com/a/46181
// Posted by John Rutherford, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-08, License - CC BY-SA 4.0

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.querySelector("#name").value.trim();
    var email = document.querySelector("#email").value.trim();
    var password = document.querySelector("#password").value.trim();

    var error = "";

    if (name === "") {
        error = "Введите имя";
    } else if (!validateEmail(email)) {
        error = "Введите email";
    } else if (password === "" | password.length < 8) {
        error = "Введите пароль";
    }

    if (error !== "") {
        result.className = "result result--error";
        result.textContent = error;
    } else {
        result.className = "result result--ok";
        result.textContent = "Проверка пройдена, всё заполнено";
    }
});
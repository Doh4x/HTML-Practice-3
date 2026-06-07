function checkPassword(password) {
    if (password.length < 8) {
        return "Пароль слабый: минимум 8 символов";
    }
    if (!/[0-9]/.test(password)) {
        return "Пароль слабый: нужна хотя бы одна цифра";
    }
    if (!/[a-zA-Zа-яА-Я]/.test(password)) {
        return "Пароль слабый: нужна хотя бы одна буква";
    }
    return "Пароль сваговый";
}

var result = document.querySelector("#result");

document.querySelector("#checkBtn").addEventListener("click", function () {
    var password = document.querySelector("#password").value;
    var message = checkPassword(password);

    if (message === "Пароль сваговый") {
        result.className = "result result--ok";
    } else {
        result.className = "result result--error";
    }
    result.textContent = message;
});

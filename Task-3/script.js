var button = document.querySelector("#checkBtn");
var input = document.querySelector("#age");
var result = document.querySelector("#result");

button.addEventListener("click", function () {
    var value = input.value.trim();

    if (value === "") {
        result.className = "result result--error";
        result.textContent = "Введите возраст";
        return;
    }

    var age = Number(value);

    if (age < 0) {
        result.className = "result result--error";
        result.textContent = "Возраст не может быть отрицательным";
        return;
    }

    if (age < 18) {
        result.className = "result";
        result.textContent = "Доступ запрещён";
    } else if (age < 60) {
        result.className = "result result--ok";
        result.textContent = "Доступ разрешён";
    } else if (age > 60 & age < 100){
        result.className = "result";
        result.textContent = "Льготная категория";
    } else {
        result.className = "result";
        result.textContent = "Ты как сюда попала плесень?";
    }
});

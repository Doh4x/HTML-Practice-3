var button = document.querySelector("#checkBtn");
var input = document.querySelector("#price");
var result = document.querySelector("#result");

button.addEventListener("click", function () {
    var price = Number(input.value);

    if (price < 0) {
        result.className = "result result--error";
        result.textContent = "Цена не может быть меньше нуля";
    } else if (price === 0) {
        result.className = "result";
        result.textContent = "Бесплатно";
    } else if (price < 1000) {
        result.className = "result";
        result.textContent = "Дешёвый товар";
    } else if (price <= 10000) {
        result.className = "result";
        result.textContent = "Обычный товар";
    } else {
        result.className = "result";
        result.textContent = "Дорогой товар";
    }
});

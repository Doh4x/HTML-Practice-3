var button = document.querySelector("#greetBtn");
var input = document.querySelector("#name");
var result = document.querySelector("#result");

button.addEventListener("click", function () {
    var name = input.value.trim();

    if (name === "") {
        result.textContent = "Какова твоя кликуха?";
    } else {
        result.textContent = "Вечер в хату " + name;
    }
});

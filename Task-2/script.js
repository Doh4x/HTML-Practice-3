var button = document.querySelector("#calcBtn");
var result = document.querySelector("#result");

button.addEventListener("click", function () {
    var price = Number(document.querySelector("#price").value);
    var discount = Number(document.querySelector("#discount").value);

    if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
        result.textContent = "Введите корректные данные";
        return;
    }

    var finalPrice = price - price * discount / 100;

    result.textContent = "Итоговая цена " + finalPrice;
});

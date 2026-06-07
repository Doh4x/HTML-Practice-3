var input = document.querySelector("#text");
var output = document.querySelector("#output");

input.addEventListener("input", function () {
    if (input.value === "") {
        output.textContent = "Здесь появится текст";
    } else {
        output.textContent = input.value;
    }
});

var title = document.querySelector("#title");
var button = document.querySelector("#changeBtn");

button.addEventListener("click", function () {
    title.textContent = "Новый заголовок";
});

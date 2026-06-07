var card = document.querySelector("#card");
var button = document.querySelector("#toggleBtn");

button.addEventListener("click", function () {
    card.classList.toggle("is-active");
});

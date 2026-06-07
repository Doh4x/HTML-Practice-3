var button = document.querySelector("#toggleBtn");
var state = document.querySelector("#state");

var isOn = false;

button.addEventListener("click", function () {
    isOn = !isOn;

    if (isOn) {
        state.textContent = "Включено";
        state.classList.add("is-active");
    } else {
        state.textContent = "Выключено";
        state.classList.remove("is-active");
    }
});

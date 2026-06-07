var overlay = document.querySelector("#overlay");
var openBtn = document.querySelector("#openBtn");
var closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", function () {
    overlay.classList.remove("is-hidden");
});

closeBtn.addEventListener("click", function () {
    overlay.classList.add("is-hidden");
});

overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        overlay.classList.add("is-hidden");
    }
});

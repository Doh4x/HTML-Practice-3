function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calc(op, a, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return sub(a, b);
    if (op === "*") return mul(a, b);
    if (op === "/") return div(a, b);
}

var result = document.querySelector("#result");

document.querySelector("#calcBtn").addEventListener("click", function () {
    var a = Number(document.querySelector("#a").value);
    var b = Number(document.querySelector("#b").value);
    var op = document.querySelector("#op").value;

    if (op === "/" && b === 0) {
        result.className = "result result--error";
        result.textContent = "Ошибка: на ноль делить нельзя";
        return;
    }

    result.className = "result result--ok";
    result.textContent = "Результат: " + calc(op, a, b);
});

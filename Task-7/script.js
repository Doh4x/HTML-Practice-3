var globalValue = "Я глобальная";

function demo() {
    var localValue = "Я локальная";

    console.log("Внутри функции globalValue =", globalValue);
    console.log("Внутри функции localValue =", localValue);
}

document.querySelector("#runBtn").addEventListener("click", function () {
    demo();

    console.log("Снаружи globalValue =", globalValue);

    document.querySelector("#result").textContent =
        "Готово. Глобальная переменная доступна везде, локальная - только внутри функции. Резня в консоли.";
});

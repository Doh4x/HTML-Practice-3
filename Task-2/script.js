function makeRow(n, i) {
    return n + " × " + i + " = " + n * i;
}

var result = document.querySelector("#result");

document.querySelector("#buildBtn").addEventListener("click", function () {
    var n = Number(document.querySelector("#number").value);

    result.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        result.innerHTML += makeRow(n, i) + "<br>";
    }
});

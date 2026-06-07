var numbers = [];

var input = document.querySelector("#number");
var list = document.querySelector("#numbers");
var sumBlock = document.querySelector("#sum");
var averageBlock = document.querySelector("#average");

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function average(arr) {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
}

function render() {
    list.innerHTML = "";
    for (var i = 0; i < numbers.length; i++) {
        var li = document.createElement("li");
        li.textContent = numbers[i];
        list.append(li);
    }
    sumBlock.textContent = "Сумма: " + sum(numbers);
    averageBlock.textContent = "Среднее: " + average(numbers);
}

document.querySelector("#addBtn").addEventListener("click", function () {
    var value = input.value.trim();

    if (value === "") return;

    numbers.push(Number(value));
    input.value = "";
    render();
});

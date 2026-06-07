var count = 0;

var countBlock = document.querySelector("#count");

document.querySelector("#addBtn").addEventListener("click", function () {
    count = count + 1;
    countBlock.textContent = count;
});

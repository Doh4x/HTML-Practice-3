var input = document.querySelector("#text");
var list = document.querySelector("#list");

document.querySelector("#addBtn").addEventListener("click", function () {
    var text = input.value.trim();

    if (text === "") return;

    var li = document.createElement("li");
    li.textContent = text;
    list.append(li);

    input.value = "";
});

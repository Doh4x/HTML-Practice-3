var tasks = ['Забрать деньги у Майка', 'Позвонить Солу', 'Спрятать улики'];

var list = document.querySelector("#tasks");

for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.textContent = tasks[i] + " ";

    var button = document.createElement("button");
    button.className = "buttonSecondary";
    button.textContent = "Удалить";

    button.addEventListener("click", function () {
        this.parentElement.remove();
    });

    li.append(button);
    list.append(li);
}

var tasks = [];

var input = document.querySelector("#text");
var list = document.querySelector("#list");
var counters = document.querySelector("#counters");

function render() {
    list.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];

        var li = document.createElement("li");
        if (task.done) {
            li.className = "todoDone";
        }
        li.textContent = task.title + " ";

        var doneBtn = document.createElement("button");
        doneBtn.className = "buttonSecondary";
        doneBtn.textContent = "Готово";
        doneBtn.dataset.index = i;
        doneBtn.addEventListener("click", function () {
            tasks[this.dataset.index].done = !tasks[this.dataset.index].done;
            render();
        });

        var delBtn = document.createElement("button");
        delBtn.className = "buttonSecondary";
        delBtn.textContent = "Удалить";
        delBtn.dataset.index = i;
        delBtn.addEventListener("click", function () {
            tasks.splice(this.dataset.index, 1);
            render();
        });

        li.append(doneBtn);
        li.append(delBtn);
        list.append(li);
    }

    var done = tasks.filter(function (t) { return t.done; }).length;
    counters.textContent = "Всего задач: " + tasks.length + ", выполнено: " + done;
}

document.querySelector("#addBtn").addEventListener("click", function () {
    var text = input.value.trim();
    if (text === "") return;

    tasks.push({ title: text, done: false });
    input.value = "";
    render();
});

render();

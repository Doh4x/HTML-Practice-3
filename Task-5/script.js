var tasks = [
    { id: 1, title: 'Сварить партию', completed: true },
    { id: 2, title: 'Заплатить Солу', completed: false },
    { id: 3, title: 'Встретить поставку', completed: false }
];

var list = document.querySelector("#tasks");

function render(items) {
    list.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        li.textContent = items[i].title + (items[i].completed ? " (готово)" : "");
        list.append(li);
    }
}

document.querySelector("#allBtn").addEventListener("click", function () {
    render(tasks);
});

document.querySelector("#doneBtn").addEventListener("click", function () {
    render(tasks.filter(function (t) { return t.completed; }));
});

document.querySelector("#undoneBtn").addEventListener("click", function () {
    render(tasks.filter(function (t) { return !t.completed; }));
});

render(tasks);

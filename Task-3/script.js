var users = [
    { id: 1, name: 'Гас Фринг', email: 'gus@lospollos.com', role: 'admin', active: true },
    { id: 2, name: 'Сол Гудман', email: 'sol@lospollos.com', role: 'user', active: false },
    { id: 3, name: 'Майк Эрмантраут', email: 'mike@lospollos.com', role: 'user', active: true },
    { id: 4, name: 'Скайлер Уайт', email: 'skyler@lospollos.com', role: 'admin', active: false }
];

var active = users.filter(function (u) { return u.active; });

var admins = users.filter(function (u) { return u.role === 'admin'; });

var emails = users.map(function (u) { return u.email; });

var inactiveCount = users.filter(function (u) { return !u.active; }).length;

function fill(id, arr, getText) {
    var list = document.querySelector(id);
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.textContent = getText(arr[i]);
        list.append(li);
    }
}

fill("#active", active, function (u) { return u.name; });
fill("#admins", admins, function (u) { return u.name; });
fill("#emails", emails, function (e) { return e; });

document.querySelector("#inactive").textContent = "Неактивных пользователей: " + inactiveCount;

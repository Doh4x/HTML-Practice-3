var users = [
    { name: 'Гас Фринг', email: 'gus@lospollos.com', role: 'admin' },
    { name: 'Сол Гудман', email: 'sol@lospollos.com', role: 'user' },
    { name: 'Майк Эрмантраут', email: 'mike@lospollos.com', role: 'user' }
];

var tbody = document.querySelector("#users");

function render() {
    tbody.innerHTML = "";

    for (var i = 0; i < users.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML =
            "<td>" + users[i].name + "</td>" +
            "<td>" + users[i].email + "</td>" +
            "<td>" + users[i].role + "</td>";
        tbody.append(row);
    }
}

render();

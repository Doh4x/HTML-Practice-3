var users = [
    { id: 1, name: 'Волтух' },
    { id: 2, name: 'Джесси' },
    { id: 3, name: 'Сол' }
];

var result = document.querySelector("#result");

document.querySelector("#searchBtn").addEventListener("click", function () {
    var id = Number(document.querySelector("#id").value);

    var user = users.find(function (u) {
        return u.id === id;
    });

    if (user) {
        result.className = "result result--ok";
        result.textContent = "Найден пользователь: " + user.name;
    } else {
        result.className = "result result--error";
        result.textContent = "Пользователь не найден";
    }
});

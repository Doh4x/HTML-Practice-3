var users = [
    { id: 1, name: 'Гаврила Жарко', email: 'gavrila@lospollos.com', role: 'admin', active: true, avatar: '../../assets/avatar-gavrila.jpg' },
    { id: 2, name: 'Сол Гудман', email: 'sol@lospollos.com', role: 'user', active: false, avatar: '../../assets/avatar-sol.jpg' },
    { id: 3, name: 'Майк Эрмантраут', email: 'mike@lospollos.com', role: 'user', active: true, avatar: '../../assets/avatar-mike.jpg' }
];

var container = document.querySelector("#users");

for (var i = 0; i < users.length; i++) {
    var user = users[i];

    var status = user.active ? "Активен" : "Неактивен";

    var card = document.createElement("article");
    card.className = "userCard";
    card.innerHTML = `
        <img src="${user.avatar}" alt="${user.name}" class="userCard-avatar">
        <h3 class="userCard-name">${user.name}</h3>
        <p class="userCard-role">${user.role}</p>
        <p class="userCard-bio">${user.email}<br>Статус: ${status}</p>
    `;
    container.append(card);
}

var user = {
    id: 1,
    name: 'Гаврила Жарко',
    age: 25,
    email: 'gavrila@lospollos.com',
    role: 'владелец',
    avatar: '../../assets/avatar-gavrila.jpg'
};

var html = `
    <article class="userCard">
        <img src="${user.avatar}" alt="${user.name}" class="userCard-avatar">
        <h3 class="userCard-name">${user.name}</h3>
        <p class="userCard-role">${user.role}</p>
        <p class="userCard-bio">Возраст: ${user.age}<br>Email: ${user.email}<br>ID: ${user.id}</p>
    </article>
`;

document.querySelector("#profile").innerHTML = html;

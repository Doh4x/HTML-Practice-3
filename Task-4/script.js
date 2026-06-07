var user = {
    id: 1,
    name: 'Уолтер Уайт',
    email: 'walter@lospollos.com',
    role: 'повар'
};

const { name, email, role } = user;

document.querySelector("#result").innerHTML =
    "Имя: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Роль: " + role;

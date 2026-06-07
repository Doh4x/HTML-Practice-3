var order = {
    number: 'A-1001',
    date: '2026-05-31',
    client: {
        name: 'Уолтер Уайт',
        email: 'heisenberg@lospollos.com'
    },
    items: [
        { title: 'Ведро курицы', price: 890, count: 2 },
        { title: 'Бургер', price: 450, count: 1 }
    ]
};

document.querySelector("#info").innerHTML =
    "Заказ №: " + order.number + "<br>" +
    "Дата: " + order.date + "<br>" +
    "Клиент: " + order.client.name + " (" + order.client.email + ")";

var tbody = document.querySelector("#items");
var total = 0;

for (var i = 0; i < order.items.length; i++) {
    var item = order.items[i];
    var sum = item.price * item.count;
    total += sum;

    var row = document.createElement("tr");
    row.innerHTML =
        "<td>" + item.title + "</td>" +
        "<td>" + item.price + " ₽</td>" +
        "<td>" + item.count + "</td>" +
        "<td>" + sum + " ₽</td>";
    tbody.append(row);
}

document.querySelector("#total").textContent = "Итого: " + total + " ₽";

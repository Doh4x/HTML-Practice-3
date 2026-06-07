var orders = [
    {
        number: 'A-1001',
        client: 'Уолтер Уайт',
        status: 'Оплачен',
        items: [
            { title: 'Ведро курицы', price: 890, count: 2 },
            { title: 'Картошка фри', price: 250, count: 1 }
        ]
    },
    {
        number: 'A-1002',
        client: 'Джесси Пинкман',
        status: 'В пути',
        items: [
            { title: 'Комбо-набор', price: 990, count: 1 }
        ]
    }
];

function countItems(items) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        count += items[i].count;
    }
    return count;
}

function sumItems(items) {
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        sum += items[i].price * items[i].count;
    }
    return sum;
}

var tbody = document.querySelector("#orders");

for (var i = 0; i < orders.length; i++) {
    var order = orders[i];
    var row = document.createElement("tr");
    row.innerHTML =
        "<td>" + order.number + "</td>" +
        "<td>" + order.client + "</td>" +
        "<td>" + countItems(order.items) + "</td>" +
        "<td>" + sumItems(order.items) + " ₽</td>" +
        "<td>" + order.status + "</td>";
    tbody.append(row);
}

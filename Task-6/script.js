var cart = [
    { title: 'Ведро курицы', price: 890, count: 2 },
    { title: 'Бургер', price: 450, count: 1 },
    { title: 'Комбо-набор', price: 990, count: 1 }
];

function totalSum(items) {
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        sum += items[i].price * items[i].count;
    }
    return sum;
}

function totalCount(items) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        count += items[i].count;
    }
    return count;
}

function mostExpensive(items) {
    var max = items[0];
    for (var i = 1; i < items.length; i++) {
        if (items[i].price > max.price) {
            max = items[i];
        }
    }
    return max;
}

var list = document.querySelector("#items");
for (var i = 0; i < cart.length; i++) {
    var li = document.createElement("li");
    li.textContent = cart[i].title + " - " + cart[i].price + " ₽ × " + cart[i].count;
    list.append(li);
}

document.querySelector("#totals").innerHTML =
    "Общая сумма: " + totalSum(cart) + " ₽<br>" +
    "Всего товаров: " + totalCount(cart) + "<br>" +
    "Самый дорогой: " + mostExpensive(cart).title;

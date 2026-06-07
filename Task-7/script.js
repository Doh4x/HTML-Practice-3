var products = [
    { title: 'Чурро-сода', price: 150 },
    { title: 'Комбо-набор', price: 990 },
    { title: 'Картошка фри', price: 250 },
    { title: 'Бургер', price: 450 }
];

var list = document.querySelector("#products");

function render(items) {
    list.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        li.textContent = items[i].title + " - " + items[i].price + " ₽";
        list.append(li);
    }
}

document.querySelector("#originalBtn").addEventListener("click", function () {
    render(products);
});

document.querySelector("#ascBtn").addEventListener("click", function () {
    var sorted = products.slice().sort(function (a, b) {
        return a.price - b.price;
    });
    render(sorted);
});

document.querySelector("#descBtn").addEventListener("click", function () {
    var sorted = products.slice().sort(function (a, b) {
        return b.price - a.price;
    });
    render(sorted);
});

render(products);

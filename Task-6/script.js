var products = [
    { title: 'Ведро курицы', price: 890, category: 'Курица' },
    { title: 'Наггетсы', price: 350, category: 'Курица' },
    { title: 'Картошка фри', price: 250, category: 'Гарниры' },
    { title: 'Комбо-набор', price: 990, category: 'Наборы' }
];

var search = document.querySelector("#search");
var category = document.querySelector("#category");
var sort = document.querySelector("#sort");
var catalog = document.querySelector("#catalog");

function render() {
    var result = products.filter(function (p) {
        var byName = p.title.toLowerCase().indexOf(search.value.toLowerCase()) !== -1;
        var byCat = category.value === "" || p.category === category.value;
        return byName && byCat;
    });

    result = result.slice().sort(function (a, b) {
        return sort.value === "asc" ? a.price - b.price : b.price - a.price;
    });

    catalog.innerHTML = "";
    for (var i = 0; i < result.length; i++) {
        var card = document.createElement("article");
        card.className = "productCard";
        card.innerHTML =
            '<h3 class="productCard-name">' + result[i].title + '</h3>' +
            '<div class="productCard-footer">' +
            '<span class="productCard-price">' + result[i].price + ' ₽</span>' +
            '</div>';
        catalog.append(card);
    }
}

search.addEventListener("input", render);
category.addEventListener("change", render);
sort.addEventListener("change", render);

render();

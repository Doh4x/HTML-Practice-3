function filterByCategory(products, category) {
    return products.filter(function (p) {
        return p.category === category;
    });
}

function searchProducts(products, query) {
    return products.filter(function (p) {
        return p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
}

function sortByPrice(products, direction) {
    return products.slice().sort(function (a, b) {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
    });
}

function formatProducts(products) {
    return products.map(function (p) {
        return p.title + " - " + p.price + " ₽";
    });
}

var products = [
    { title: 'Ведро курицы', price: 890, category: 'Курица' },
    { title: 'Картошка фри', price: 250, category: 'Гарниры' },
    { title: 'Чурро-сода', price: 150, category: 'Напитки' }
];

var chicken = filterByCategory(products, 'Курица');
var found = searchProducts(products, 'кар');
var sorted = sortByPrice(products, 'desc');
var formatted = formatProducts(products);

document.querySelector("#result").innerHTML =
    "filterByCategory('Курица'): " + formatProducts(chicken).join(", ") + "<br>" +
    "searchProducts('кар'): " + formatProducts(found).join(", ") + "<br>" +
    "sortByPrice('desc'): " + formatProducts(sorted).join(", ") + "<br>" +
    "formatProducts: " + formatted.join(" | ");

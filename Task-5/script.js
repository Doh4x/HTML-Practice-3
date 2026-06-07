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

function filterProducts(list, query, cat) {
    return list.filter(function (p) {
        var byName = p.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        var byCat = cat === "" || p.category === cat;
        return byName && byCat;
    });
}

function sortProducts(list, direction) {
    return list.slice().sort(function (a, b) {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
    });
}

function render() {
    var result = filterProducts(products, search.value, category.value);
    result = sortProducts(result, sort.value);

    catalog.innerHTML = "";
    for (var i = 0; i < result.length; i++) {
        var card = document.createElement("article");
        card.className = "productCard";
        card.innerHTML = `
            <h3 class="productCard-name">${result[i].title}</h3>
            <div class="productCard-footer">
                <span class="productCard-price">${result[i].price} ₽</span>
            </div>
        `;
        catalog.append(card);
    }
}

search.addEventListener("input", render);
category.addEventListener("change", render);
sort.addEventListener("change", render);

render();

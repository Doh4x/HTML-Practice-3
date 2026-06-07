var categories = ['Курица', 'Гарниры', 'Напитки'];

var products = [
    { title: 'Ведро курицы', category: 'Курица' },
    { title: 'Наггетсы', category: 'Курица' },
    { title: 'Картошка фри', category: 'Гарниры' },
    { title: 'Картофельные дольки', category: 'Гарниры' }
];

var catalog = document.querySelector("#catalog");

for (var i = 0; i < categories.length; i++) {
    var category = categories[i];

    var items = products.filter(function (product) {
        return product.category === category;
    });

    var title = document.createElement("h2");
    title.className = "sectionTitle";
    title.textContent = category;
    catalog.append(title);

    if (items.length === 0) {
        var empty = document.createElement("div");
        empty.className = "result";
        empty.textContent = "В этой категории пока пусто";
        catalog.append(empty);
        continue;
    }

    var grid = document.createElement("div");
    grid.className = "cardGrid";
    for (var j = 0; j < items.length; j++) {
        var card = document.createElement("article");
        card.className = "productCard";
        card.innerHTML = '<h3 class="productCard-name">' + items[j].title + '</h3>';
        grid.append(card);
    }
    catalog.append(grid);
}

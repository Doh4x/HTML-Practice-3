var products = [
    { title: 'Ведро курицы', price: 890, category: 'Курица' },
    { title: 'Чурро-сода', price: 150, category: 'Напитки' }
];

var prepared = products.map(function (product) {
    return {
        title: product.title,
        priceText: product.price + " ₽",
        categoryText: "Категория: " + product.category,
        caption: product.title + " - " + product.category
    };
});

var catalog = document.querySelector("#catalog");

for (var i = 0; i < prepared.length; i++) {
    var item = prepared[i];
    var card = document.createElement("article");
    card.className = "productCard";
    card.innerHTML = `
        <h3 class="productCard-name">${item.title}</h3>
        <p class="productCard-desc">${item.categoryText}<br>${item.caption}</p>
        <div class="productCard-footer">
            <span class="productCard-price">${item.priceText}</span>
        </div>
    `;
    catalog.append(card);
}

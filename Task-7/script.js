var rawProducts = [
    { name: 'наггетсы', price: 350, available: true },
    { name: 'синяя карамель', price: 9999, available: false }
];

var uiProducts = rawProducts.map(function (product) {
    return {
        title: product.name.charAt(0).toUpperCase() + product.name.slice(1),
        priceText: product.price + " ₽",
        availableText: product.available ? "В наличии" : "Нет в наличии",
        availableClass: product.available ? "result--ok" : "result--error"
    };
});

var catalog = document.querySelector("#catalog");

for (var i = 0; i < uiProducts.length; i++) {
    var item = uiProducts[i];
    var card = document.createElement("article");
    card.className = "productCard";
    card.innerHTML = `
        <h3 class="productCard-name">${item.title}</h3>
        <p class="productCard-desc ${item.availableClass}">${item.availableText}</p>
        <div class="productCard-footer">
            <span class="productCard-price">${item.priceText}</span>
        </div>
    `;
    catalog.append(card);
}

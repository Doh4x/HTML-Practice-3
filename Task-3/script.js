var products = [
    { name: 'Ведро курицы', image: '../../assets/vedro-kuricy.jpg' },
    { name: 'Картошка фри', image: '../../assets/kartoshka-fri.jpg' },
    { name: 'Наггетсы', image: '../../assets/naggetsy.jpg' },
    { name: 'Бургер', image: '../../assets/burger.jpg' }
];

var catalog = document.querySelector("#catalog");

function createCard(product) {
    var card = document.createElement("article");
    card.className = "productCard";
    card.innerHTML =
        '<img src="' + product.image + '" alt="' + product.name + '" class="productCard-image">' +
        '<h3 class="productCard-name">' + product.name + '</h3>' +
        '<div class="productCard-footer">' +
        '<span class="productCard-price">в наличии</span>' +
        '<button class="productCard-button">В корзину</button>' +
        '</div>';
    return card;
}

for (var i = 0; i < products.length; i++) {
    catalog.append(createCard(products[i]));
}

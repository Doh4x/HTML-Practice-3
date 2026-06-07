var products = [
    { name: 'Ведро курицы', image: '../../assets/vedro-kuricy.jpg' },
    { name: 'Картошка фри', image: '../../assets/kartoshka-fri.jpg' },
    { name: 'Наггетсы', image: '../../assets/naggetsy.jpg' },
    { name: 'Бургер', image: '../../assets/burger.jpg' }
];

var catalog = document.querySelector("#catalog");
var result = document.querySelector("#result");

for (var i = 0; i < products.length; i++) {
    var card = document.createElement("article");
    card.className = "productCard";
    card.dataset.title = products[i].name;
    card.innerHTML =
        '<img src="' + products[i].image + '" alt="' + products[i].name + '" class="productCard-image">' +
        '<h3 class="productCard-name">' + products[i].name + '</h3>' +
        '<div class="productCard-footer">' +
        '<button class="productCard-button addBtn">В корзину</button>' +
        '<button class="productCard-button delBtn">Удалить</button>' +
        '</div>';
    catalog.append(card);
}

catalog.addEventListener("click", function (event) {
    var card = event.target.closest(".productCard");
    if (!card) return;

    if (event.target.classList.contains("delBtn")) {
        card.remove();
    }

    if (event.target.classList.contains("addBtn")) {
        result.textContent = "В корзину добавлен: " + card.dataset.title;
    }
});

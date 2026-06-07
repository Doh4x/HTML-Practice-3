var products = [
    { name: 'Ведро курицы', image: '../../assets/vedro-kuricy.jpg' },
    { name: 'Наггетсы', image: '../../assets/naggetsy.jpg' },
    { name: 'Картошка фри', image: '../../assets/kartoshka-fri.jpg' },
    { name: 'Бургер', image: '../../assets/burger.jpg' },
    { name: 'Чурро-сода', image: '../../assets/churro-soda.jpg' },
    { name: 'Комбо-набор', image: '../../assets/kombo-nabor.jpg' }
];

var input = document.querySelector("#search");
var catalog = document.querySelector("#catalog");

function show(list) {
    catalog.innerHTML = "";

    if (list.length === 0) {
        catalog.innerHTML = '<div class="result">Ничего не найдено</div>';
        return;
    }

    for (var i = 0; i < list.length; i++) {
        var card = document.createElement("article");
        card.className = "productCard";
        card.innerHTML =
            '<img src="' + list[i].image + '" alt="' + list[i].name + '" class="productCard-image">' +
            '<h3 class="productCard-name">' + list[i].name + '</h3>';
        catalog.append(card);
    }
}

document.querySelector("#searchBtn").addEventListener("click", function () {
    var query = input.value.toLowerCase();

    var found = products.filter(function (product) {
        return product.name.toLowerCase().indexOf(query) !== -1;
    });

    show(found);
});

show(products);

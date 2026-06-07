var products = [
    { name: 'Ведро курицы', image: '../../assets/vedro-kuricy.jpg' },
    { name: 'Картошка фри', image: '../../assets/kartoshka-fri.jpg' },
    { name: 'Наггетсы', image: '../../assets/naggetsy.jpg' },
    { name: 'Бургер', image: '../../assets/burger.jpg' }
];

var catalog = document.querySelector("#catalog");

function render() {
    catalog.innerHTML = "";

    for (var i = 0; i < products.length; i++) {
        var card = document.createElement("article");
        card.className = "productCard";
        card.innerHTML =
            '<img src="' + products[i].image + '" alt="' + products[i].name + '" class="productCard-image">' +
            '<h3 class="productCard-name">' + products[i].name + '</h3>';
        catalog.append(card);
    }
}

document.querySelector("#renderBtn").addEventListener("click", render);

render();

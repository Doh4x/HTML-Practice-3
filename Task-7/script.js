var products = [
    { title: 'Ведро курицы', price: 890, image: '../../assets/vedro-kuricy.jpg' },
    { title: 'Картошка фри', price: 250, image: '../../assets/kartoshka-fri.jpg' },
    { title: 'Наггетсы', price: 350, image: '../../assets/naggetsy.jpg' }
];

var cart = [];

var catalogBlock = document.querySelector("#catalog");
var cartBlock = document.querySelector("#cart");
var totalBlock = document.querySelector("#total");

for (var i = 0; i < products.length; i++) {
    var card = document.createElement("article");
    card.className = "productCard";
    card.innerHTML =
        '<img src="' + products[i].image + '" alt="' + products[i].title + '" class="productCard-image">' +
        '<h3 class="productCard-name">' + products[i].title + '</h3>' +
        '<div class="productCard-footer">' +
        '<span class="productCard-price">' + products[i].price + ' ₽</span>' +
        '<button class="productCard-button" data-index="' + i + '">В корзину</button>' +
        '</div>';
    catalogBlock.append(card);
}

function addToCart(product) {
    var found = cart.find(function (item) {
        return item.title === product.title;
    });

    if (found) {
        found.count = found.count + 1;
    } else {
        cart.push({ title: product.title, price: product.price, count: 1 });
    }
}

function renderCart() {
    cartBlock.innerHTML = "";
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += item.price * item.count;

        var li = document.createElement("li");
        li.textContent = item.title + " × " + item.count + " = " + item.price * item.count + " ₽ ";

        var delBtn = document.createElement("button");
        delBtn.className = "buttonSecondary";
        delBtn.textContent = "Удалить";
        delBtn.dataset.index = i;
        delBtn.addEventListener("click", function () {
            cart.splice(this.dataset.index, 1);
            renderCart();
        });

        li.append(delBtn);
        cartBlock.append(li);
    }

    totalBlock.textContent = "Итого: " + total + " ₽";
}

catalogBlock.addEventListener("click", function (event) {
    if (event.target.dataset.index !== undefined) {
        addToCart(products[event.target.dataset.index]);
        renderCart();
    }
});

renderCart();

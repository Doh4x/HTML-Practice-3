var prices = [500, 1200, 3000, 700];

var discounted = prices.map(function (price) {
    return price - price * 0.1;
});

var labels = prices.map(function (price) {
    return "Цена товара: " + price + " ₽";
});

function fill(id, arr) {
    var list = document.querySelector(id);
    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.textContent = arr[i];
        list.append(li);
    }
}

fill("#discounted", discounted);
fill("#labels", labels);

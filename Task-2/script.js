var product = {
    title: 'Синяя карамель',
    price: 9999,
    specs: {
        purity: '99.1%',
        weight: '1 кг',
        color: 'Голубой'
    }
};

var html = `
    <article class="productCard">
        <h3 class="productCard-name">${product.title}</h3>
        <p class="productCard-desc">
            Характеристики:
        </p>
        <ul class="list">
            <li>Чистота: ${product.specs.purity}</li>
            <li>Вес: ${product.specs.weight}</li>
            <li>Цвет: ${product.specs.color}</li>
        </ul>
        <div class="productCard-footer">
            <span class="productCard-price">${product.price} ₽</span>
        </div>
    </article>
`;

document.querySelector("#product").innerHTML = html;

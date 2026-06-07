var product = {
    name: 'Фирменное ведро Los Pollos',
    price: 890,
    category: 'Еда',
    description: '12 кусочков хрустящей курицы по фирменному рецепту.'
};

var card = `
    <article class="productCard">
        <h3 class="productCard-name">${product.name}</h3>
        <p class="productCard-desc">
            Категория: ${product.category}<br>
            ${product.description}
        </p>
        <div class="productCard-footer">
            <span class="productCard-price">${product.price} ₽</span>
            <button class="productCard-button">В корзину</button>
        </div>
    </article>
`;

document.querySelector("#product").innerHTML = card;

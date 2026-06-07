var menu = ['Главная', 'Каталог', 'О нас', 'Контакты'];

function buildMenu(items) {
    var html = "";
    for (var i = 0; i < items.length; i++) {
        html += '<li><a href="#" class="navLink">' + items[i] + '</a></li>';
    }
    return html;
}

document.querySelector("#menu").innerHTML = buildMenu(menu);

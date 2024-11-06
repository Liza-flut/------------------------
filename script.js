// Получаем элементы поисковой строки и контейнера с ресурсами
const searchBar = document.querySelector('.search-bar');
const gridContainer = document.querySelector('.grid-container');
const gridItems = document.querySelectorAll('.grid-item');

// Функция для фильтрации ресурсов
function filterResources() {
    const query = searchBar.value.toLowerCase(); // Получаем текст из поисковой строки и переводим в нижний регистр
    gridItems.forEach(item => {
        const itemText = item.textContent.toLowerCase(); // Получаем текст элемента и переводим в нижний регистр
        if (itemText.includes(query)) { // Проверяем, содержит ли элемент текст запроса
            item.style.display = 'block'; // Если содержит, показываем элемент
        } else {
            item.style.display = 'none'; // Если не содержит, скрываем элемент
        }
    });
}

// Добавляем обработчик события для поисковой строки
searchBar.addEventListener('input', filterResources);

// Функция для перехода на страницу с уникальным названием для каждого ресурса
function openResource(resourceId) {
    // Переход на страницу с уникальным названием для каждого ресурса
    window.location.href = `resource-${resourceId}.html`;
}

// Отображение конкретных деталей ресурса на странице ресурсов
if (window.location.pathname.includes('resource-1.html')) {
    const resourceTitle = document.getElementById('resource-title');
    const resourceDescription = document.getElementById('resource-description');
    resourceTitle.textContent = 'Ресурс 1';
    resourceDescription.textContent = 'Здесь приведено подробное руководство о том, как использовать Ресурс 1. Это может включать шаги, изображения и советы для учителей.';
} else if (window.location.pathname.includes('resource-2.html')) {
    const resourceTitle = document.getElementById('resource-title');
    const resourceDescription = document.getElementById('resource-description');
    resourceTitle.textContent = 'Ресурс 2';
    resourceDescription.textContent = 'Подробные инструкции о том, как использовать Ресурс 2, а также лучшие практики и примеры изображений.';
} else if (window.location.pathname.includes('resource-3.html')) {
    const resourceTitle = document.getElementById('resource-title');
    const resourceDescription = document.getElementById('resource-description');
    resourceTitle.textContent = 'Ресурс 3';
    resourceDescription.textContent = 'Описание Ресурса 3 с информацией о его использовании и преимуществах.';
} else if (window.location.pathname.includes('resource-4.html')) {
    const resourceTitle = document.getElementById('resource-title');
    const resourceDescription = document.getElementById('resource-description');
    resourceTitle.textContent = 'Ресурс 4';
    resourceDescription.textContent = 'Здесь объясняется, как эффективно использовать Ресурс 4 в классе.';
}
// Дополнительные ресурсы могут быть добавлены аналогично

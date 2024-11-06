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

// Функция для перехода на страницу деталей ресурса
function openResource(resourceId) {
    // Переход на страницу деталей ресурса с ID ресурса в качестве URL-параметра
    window.location.href = `resource.html?id=${resourceId}`;
}

// Отображение конкретных деталей ресурса на странице ресурсов
if (window.location.pathname.includes('resource.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const resourceId = urlParams.get('id');
    
    const resourceTitle = document.getElementById('resource-title');
    const resourceDescription = document.getElementById('resource-description');
    
    // Пример данных для каждого ресурса
    if (resourceId === 'resource1') {
        resourceTitle.textContent = 'Ресурс 1';
        resourceDescription.textContent = 'Здесь приведено подробное руководство о том, как использовать Ресурс 1. Это может включать шаги, изображения и советы для учителей.';
    } else if (resourceId === 'resource2') {
        resourceTitle.textContent = 'Ресурс 2';
        resourceDescription.textContent = 'Подробные инструкции о том, как использовать Ресурс 2, а также лучшие практики и примеры изображений.';
    } else if (resourceId === 'resource3') {
        resourceTitle.textContent = 'Ресурс 3';
        resourceDescription.textContent = 'Описание Ресурса 3 с информацией о его использовании и преимуществах.';
    } else if (resourceId === 'resource4') {
        resourceTitle.textContent = 'Ресурс 4';
        resourceDescription.textContent = 'Здесь объясняется, как эффективно использовать Ресурс 4 в классе.';
    }
    // Дополнительные ресурсы могут быть добавлены аналогично
}

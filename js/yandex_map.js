var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [56.007936, 92.839411], // Россия, Красноярск, Красная площадь, 3А
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([56.007936, 92.839411], {
            balloonContent: 'Красная площадь, 3а'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));

}
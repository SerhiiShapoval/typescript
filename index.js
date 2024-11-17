// Типи для елементів DOM
var openModalButton = document.getElementById('openModal');
var closeModalButton = document.getElementById('closeModal');
var modal = document.getElementById('modal');
var loadDataButton = document.getElementById('loadData');
var dataContainer = document.getElementById('dataContainer');
// Перевірка на null перед використанням
if (openModalButton && modal) {
    // Відкриття модального вікна
    openModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });
}
if (closeModalButton && modal) {
    // Закриття модального вікна
    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}
// Закриття модального вікна при натисканні поза ним
if (modal) {
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
// Функція для завантаження та відображення даних
var loadData = function () {
    if (loadDataButton && dataContainer) {
        loadDataButton.addEventListener('click', function () {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dataContainer.innerHTML = '<h3>Fetched Posts</h3>';
                data.forEach(function (post) {
                    var postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = "\n              <h4>".concat(post.title, "</h4>\n              <p>").concat(post.body, "</p>\n            ");
                    dataContainer.appendChild(postElement);
                });
            })
                .catch(function (error) {
                console.error('Error fetching data:', error);
                dataContainer.innerHTML = 'Failed to load data';
            });
        });
    }
};
// Додання інтерактивності до карток (hover ефект)
var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        card.classList.add('hover');
    });
    card.addEventListener('mouseout', function () {
        card.classList.remove('hover');
    });
});
// Запуск функції для завантаження даних
loadData();

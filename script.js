const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.btn__prev');
const nextButton = document.querySelector('.btn__next');
let currentIndex = 0;

function showCards() {
    cards.forEach((card, i) => {
        if (i >= currentIndex && i < currentIndex + 3) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - 3;
    }
    showCards();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showCards();
});

showCards(); // Показываем первые 3 карточки


// объекты dom для тура
const tourFull = document.querySelectorAll('.tour__item'); // Все элементы туров
const inputCity = document.querySelector('.input__city'); // Поле ввода города

function searchCity() {
    const searchText = inputCity.value.trim().toLowerCase(); // Получаем текст из поля ввода

    tourFull.forEach(city => {
        const cityText = city.querySelector('.tour__city-title').textContent.trim().toLowerCase(); // Текст города внутри элемента
        if (cityText.includes(searchText)) {
            city.style.display = 'flex'; // Показываем элемент, если текст совпадает
        } else {
            city.style.display = 'none'; // Скрываем элемент, если текст не совпадает
        }
    });
}

// Добавляем слушатель события на поле ввода
inputCity.addEventListener('input', searchCity);
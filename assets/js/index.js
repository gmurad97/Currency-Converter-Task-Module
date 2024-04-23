
const fromMenuButtons = document.querySelectorAll(".converter__from-menu-btn");

fromMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("converter__to-menu-btn--active");
    })
})


/* document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы, с которыми будем работать
    const fromMenuButtons = document.querySelectorAll(".converter__from-menu-btn");
    const toMenuButtons = document.querySelectorAll(".converter__to-menu-btn");
    const fromReportValue = document.querySelector(".converter__from-report-value");
    const toReportValue = document.querySelector(".converter__to-report-value");

    // Функция для обновления значений валют
    function updateCurrencyValues(fromCurrency, toCurrency) {
        // Формируем URL запроса к API
        const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_eI9vCmHvEFCXiVfhcbN24WpaQAAnz6dKouZw4qsE`;

        // Отправляем GET запрос к API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Получаем значения валют
                const fromValue = data.data[fromCurrency.toUpperCase()];
                const toValue = data.data[toCurrency.toUpperCase()];

                // Обновляем отчеты о значениях валют
                fromReportValue.textContent = fromValue.toFixed(2);
                toReportValue.textContent = toValue.toFixed(2);
            })
            .catch(error => console.error("Ошибка при получении данных о валютах:", error));
    }

    // Функция для удаления класса active у всех кнопок меню валют
    function removeActiveClass(menuButtons) {
        menuButtons.forEach(button => {
            button.classList.remove("converter__from-menu-btn--active", "converter__to-menu-btn--active");
        });
    }

    // Назначаем обработчики событий на кнопки меню
    fromMenuButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Удаляем класс active у всех кнопок в меню "Откуда"
            removeActiveClass(fromMenuButtons);
            // Добавляем класс active к текущей выбранной кнопке
            this.classList.add("converter__from-menu-btn--active");

            const fromCurrency = this.getAttribute("data-from-currency");
            const toCurrency = document.querySelector(".converter__to-menu-btn.converter__to-menu-btn--active").getAttribute("data-to-currency");
            updateCurrencyValues(fromCurrency, toCurrency);
        });
    });

    toMenuButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Удаляем класс active у всех кнопок в меню "Куда"
            removeActiveClass(toMenuButtons);
            // Добавляем класс active к текущей выбранной кнопке
            this.classList.add("converter__to-menu-btn--active");

            const toCurrency = this.getAttribute("data-to-currency");
            const fromCurrency = document.querySelector(".converter__from-menu-btn.converter__from-menu-btn--active").getAttribute("data-from-currency");
            updateCurrencyValues(fromCurrency, toCurrency);
        });
    });

    // При загрузке страницы обновляем значения по умолчанию
    updateCurrencyValues("RUB", "EUR");
});
 */
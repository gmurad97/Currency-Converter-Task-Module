const API_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_eI9vCmHvEFCXiVfhcbN24WpaQAAnz6dKouZw4qsE";
const FROM_CURRENCY_DEFAULT_STATE = "USD";
const TO_CURRENCY_DEFAULT_STATE = "RUB";
const FROM_CURRENCY_DEFAULT_VALUE = 1;
const FLOAT_FIXED_VALUE = 5;


document.addEventListener("DOMContentLoaded", function () {
    const FROM_CURRENCY_BUTTONS = document.querySelectorAll("[data-from-currency]");
    const TO_CURRENCY_BUTTONS = document.querySelectorAll("[data-to-currency]");

    const FROM_REPORT_VALUE = document.querySelector("#from_report_value");
    const TO_REPORT_VALUE = document.querySelector("#to_report_value");

    const FROM_REPORT_CURRENT_RATE = document.querySelector("#from_report_current_rate");
    const TO_REPORT_CURRENT_RATE = document.querySelector("#to_report_current_rate");



    FROM_CURRENCY_BUTTONS.forEach((from_button) => {
        if (from_button.getAttribute("data-from-currency") === FROM_CURRENCY_DEFAULT_STATE.toLowerCase()) {
            from_button.classList.add("converter__from-menu-btn--active");
        }
        from_button.addEventListener("click", function () {
            FROM_CURRENCY_BUTTONS.forEach((from_btn) => {
                from_btn.classList.remove("converter__from-menu-btn--active");
            });
            this.classList.add("converter__from-menu-btn--active");
        });
    });

    TO_CURRENCY_BUTTONS.forEach((to_button) => {
        if (to_button.getAttribute("data-to-currency").toUpperCase() === TO_CURRENCY_DEFAULT_STATE.toUpperCase()) {
            to_button.classList.add("converter__to-menu-btn--active");
        }
        to_button.addEventListener("click", function () {
            TO_CURRENCY_BUTTONS.forEach((to_btn) => {
                to_btn.classList.remove("converter__to-menu-btn--active");
            });
            this.classList.add("converter__to-menu-btn--active");
        });
    });

    async function getCurrencyRate(from_currency = FROM_CURRENCY_DEFAULT_STATE, to_currency = TO_CURRENCY_DEFAULT_STATE) {
        try {
            const response = await fetch(`${API_URL}&base_currency=${from_currency.toUpperCase()}&currencies=${to_currency.toUpperCase()}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const resp_json = await response.json();
            return parseFloat(resp_json.data[to_currency.toUpperCase()]).toFixed(FLOAT_FIXED_VALUE);
        }
        catch (throwedError) {
            console.error("Error fetching currency rate:", throwedError);
            return null;
        }
    }

    getCurrencyRate(FROM_CURRENCY_DEFAULT_STATE, TO_CURRENCY_DEFAULT_STATE).then((response) => {
        TO_REPORT_VALUE.value = response;
    });

    f
});
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

const stocks = [
    { symbol: "AAPL", name: "APPLE INC." },
    { symbol: "XAUUSD", name: "GOLD" },
    { symbol: "BTCUSDT", name: "BITCOIN / TETHERUS" },
    { symbol: "BTCUSD", name: "BITCOIN / U.S. DOLLAR" },
    { symbol: "SPY", name: "SPDR S&P 500 ETF TRUST" },
    { symbol: "NVDA", name: "NVIDIA CORPORATION" },
    { symbol: "TSLA", name: "TESLA, INC." },
    { symbol: "EURUSD", name: "EURO FX/U.S. DOLLAR" },
    { symbol: "NQ", name: "E-MINI NASDAQ-100 FUTURES" },
    { symbol: "SPX", name: "S&P 500" },
    { symbol: "DXY", name: "U.S. DOLLAR CURRENCY INDEX" },
    { symbol: "ES", name: "E-MINI S&P 500 FUTURES" },
    { symbol: "QQQ", name: "INVESCO QQQ TRUST, SERIES 1" },
];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const suggestionsContainer = document.getElementById("suggestions");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toUpperCase();
        suggestionsContainer.innerHTML = ""; // Clear previous suggestions

        if (query) {
            const filteredStocks = stocks.filter(stock =>
                stock.symbol.includes(query) || stock.name.toUpperCase().includes(query)
            );

            filteredStocks.forEach(stock => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.textContent = `${stock.symbol} - ${stock.name}`;
                suggestionItem.addEventListener("click", () => {
                    searchInput.value = stock.symbol;
                    suggestionsContainer.innerHTML = "";
                    suggestionsContainer.classList.add("hidden");
                });
                suggestionsContainer.appendChild(suggestionItem);
            });

            suggestionsContainer.classList.remove("hidden");
        } else {
            suggestionsContainer.classList.add("hidden");
        }
    });

    searchInput.addEventListener("focus", () => {
        if (searchInput.value) {
            suggestionsContainer.classList.remove("hidden");
        }
    });

    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.classList.add("hidden");
        }
    });
});
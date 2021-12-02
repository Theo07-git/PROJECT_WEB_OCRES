export const CoinGeckoToPCap = () =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const FearAndGreed = () =>
    `https://api.alternative.me/fng/`;

export const HistoricalChart = (id, days = 365) =>
    //
    //'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365';
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

export const SingleCoin = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}`;

export const NewsApi = () =>
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=38c2c9f8531b42ef873a6664bf0ccf98";
// Url API
const API_URL = "https://api.alternative.me/fng/";

class API_FearAndGreed {
    constructor() {
    }

    fetchTodayFear() {
        return axios.get(`${API_URL}`);
    }
}
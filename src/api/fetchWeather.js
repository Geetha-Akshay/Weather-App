import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = '59d809981f55f407cbfb8894a75a8420';

export const fetchWeather = async (query) => {
    try {
        console.log('Fetching weather data for:', query);
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
        });
        console.log('Weather data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}

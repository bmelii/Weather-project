const API_KEY = "7fdafe54a68ece1f65dba94766704fae";
const units = 'metric';
const locale = 'ro';

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?lang=${locale}&q=${city}&appid=${API_KEY}&units=${units}`;
}

function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?lang=${locale}&q=${city}&appid=${API_KEY}&units=${units}`;
}

function getCurrentWeatherIconCode(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

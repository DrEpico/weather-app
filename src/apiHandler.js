const body = document.querySelector('body');
export let weatherData;

export async function getWeather(searchContent){
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=195157837b034a1d883103942240706&q=${searchContent}&days=3&aqi=yes&alerts=yes`, {mode: 'cors'});
        weatherData = await response.json();//parse to js object from json
        console.log(weatherData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export function appendCurrentWeather(parent){
    let currentWeatherElement;
    let tempretureElement;
    let isDayElement;
    if (weatherData.current) {
        currentWeatherElement = document.createElement('span');
        tempretureElement = document.createElement('span');
        isDayElement = document.createElement('span');
        let currentWeather = weatherData.current.condition.text;
        let tempreture = weatherData.current.temp_c;
        let isDay = weatherData.current.is_day;

        currentWeatherElement.textContent = currentWeather;
        tempretureElement.textContent = tempreture;
        isDayElement.textContent = isDay;
        let cwElement = document.querySelector('#currentWeather');
        cwElement.appendChild(currentWeatherElement);
        cwElement.appendChild(tempretureElement);
        cwElement.appendChild(isDayElement);
    } else {
        console.log('No data found for the search keyword.');
    }
}

export async function appendDailyForecast(parent){
    if (weatherData.current) {//TODO: loop this for 3 days and append info
        for(let i = 0; i < 3; i++){
            console.log(weatherData.forecast.forecastday[i].day.condition.text);
            console.log(weatherData.forecast.forecastday[i].day.avgtemp_c);
        }
    } else {
        console.log('No data found for the search keyword.');
    }
}

export function appendDetails(parent){
    if (weatherData.current) {//TODO: loop this for 3 days and append info
        //wind
        let windSpeed = weatherData.current.wind_kph;
        let windDirection = weatherData.current.wind_dir;
        //precip
        let precipitation = weatherData.current.precip_mm;
        let forecastedPP = weatherData.forecast.forecastday[0].day.totalprecip_mm;
        //humidity
        let humidity = weatherData.current.humidity;
        //UV
        let uv = weatherData.current.uv;
        //temp
        let maxTemp = weatherData.forecast.forecastday[0].day.maxtemp_c;
        let avgTemp = weatherData.forecast.forecastday[0].day.avgtemp_c;
        let minTemp = weatherData.forecast.forecastday[0].day.mintemp_c;
        //astro
        let sunriseTime = weatherData.forecast.forecastday[0].astro.sunrise;
        let sunset = weatherData.forecast.forecastday[0].astro.sunset;
    } else {
        console.log('No data found for the search keyword.');
    }
}


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
        parent.appendChild(currentWeatherElement);
        parent.appendChild(tempretureElement);
        parent.appendChild(isDayElement);
    } else {
        console.log('No data found for the search keyword.');
    }
}

export async function appendDailyForecast(){
    try {
        // const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=195157837b034a1d883103942240706&q=${searchContent}&days=3&aqi=yes&alerts=yes`, {mode: 'cors'});
        // const weatherData = await response.json();//parse to js object from json
        if (weatherData.current) {//TODO: loop this for 3 days and append info
            for(let i = 0; i < weatherData.forecast.forecastday.length; i++){
                console.log(weatherData.forecast.forecastday[i].day.condition.text);
                console.log(weatherData.forecast.forecastday[i].day.avgtemp_c);
            }
            
        } else {
            console.log('No data found for the search keyword.');
        }
    } catch (error){
        console.error('An error occurred:', error);
    }
}


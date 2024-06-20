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

export function appendCurrentWeather(){
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

export async function appendDailyForecast(){
    if (weatherData.current) {//TODO: loop this for 3 days and append info
        for(let i = 0; i < 3; i++){
            let dayn = document.querySelector(`#day${i+1}`);
            let condition = weatherData.forecast.forecastday[i].day.condition.text;
            let tempreture = weatherData.forecast.forecastday[i].day.avgtemp_c;
            dayn.textContent = condition + " " + tempreture;
        }
    } else {
        console.log('No data found for the search keyword.');
    }
}

export function appendDetails(){
    if (weatherData.current) {//TODO: loop this for 3 days and append info
        //wind
        let windSpeed = weatherData.current.wind_kph;
        let windDirection = weatherData.current.wind_dir;
        let windElement = document.querySelector('#wind');
        windElement.textContent = windSpeed + " " + windDirection;
        //precip
        let precipitation = weatherData.current.precip_mm;
        let forecastedPP = weatherData.forecast.forecastday[0].day.totalprecip_mm;
        let percipElement = document.querySelector('#precipitation');
        percipElement.textContent = precipitation + " " + forecastedPP;
        //humidity
        let humidity = weatherData.current.humidity;
        let humidityElement = document.querySelector('#humidity');
        humidityElement.textContent = humidity;
        //UV
        let uv = weatherData.current.uv;
        let uvElement = document.querySelector('#uv');
        uvElement.textContent = uv;
        //temp
        let maxTemp = weatherData.forecast.forecastday[0].day.maxtemp_c;
        let avgTemp = weatherData.forecast.forecastday[0].day.avgtemp_c;
        let minTemp = weatherData.forecast.forecastday[0].day.mintemp_c;
        let tempreture = document.querySelector('#tempreture');
        tempreture.textContent = maxTemp + " " + avgTemp + " " + minTemp;
        //astro
        let sunriseTime = weatherData.forecast.forecastday[0].astro.sunrise;
        let sunset = weatherData.forecast.forecastday[0].astro.sunset;
        let astro = document.querySelector('#astro');
        astro.textContent = sunriseTime + " " + sunset;
    } else {
        console.log('No data found for the search keyword.');
    }
}

const now = new Date();

export function appendHourlyForecast(){
    let currentTime = now.getHours();
    console.log(currentTime);
    for(let i = 0; i < 10; i++){
        console.log(weatherData.forecast.forecastday[0].hour[currentTime+i]);
    }
}


const body = document.querySelector('body');

export async function getCurrentWeather(searchContent){
    let currentWeatherElement;
    let tempretureElement;
    let isDayElement;
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=195157837b034a1d883103942240706&q=${searchContent}&days=1&aqi=yes&alerts=yes`, {mode: 'cors'});
        const weatherData = await response.json();//parse to js object from json

        if (weatherData.current) {
            currentWeatherElement = document.createElement('span');
            tempretureElement = document.createElement('span');
            isDayElement = document.createElement('span');
            let currentWeather = weatherData.current.condition.text;
            let tempreture = weatherData.current.tempC;
            let isDay = weatherData.current.is_day;
    
            currentWeatherElement.textContent = currentWeather;
            tempretureElement.textContent = tempreture;
            isDayElement.textContent = isDay;
            body.appendChild(currentWeatherElement);
            body.appendChild(tempretureElement);
            body.appendChild(isDayElement);
        } else {
            // Handle case where no GIFs are found
            // img.src = 'https://via.placeholder.com/150?text=No+GIF+Found';
            console.log('No data found for the search keyword.');
        }
    } catch (error) {
        // Handle network errors or other fetch-related errors
        // img.src = 'https://via.placeholder.com/150?text=Error';
        console.error('An error occurred:', error);
        // currentConditionElement.textContent = "Network error"
    }
    
}


import { addMainPane, addInfoPane } from "./pageElements";

const body = document.querySelector('body');

addMainPane(body);
addInfoPane(body);

async function getCurrentWeather(searchContent){
    let currentConditionElement;
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=195157837b034a1d883103942240706&q=${searchContent}&aqi=no`, {mode: 'cors'});
        const weatherData = await response.json();//parse to js object from json

        if (weatherData.current) {
            let currentConditionText = weatherData.current.condition.text;
            currentConditionElement = document.createElement('span');
            currentConditionElement.textContent = currentConditionText;
            body.appendChild(currentConditionElement);
        } else {
            // Handle case where no GIFs are found
            // img.src = 'https://via.placeholder.com/150?text=No+GIF+Found';
            console.log('No data found for the search keyword.');
            currentConditionElement.textContent = "No weather data was found"
            body.appendChild(currentConditionElement);
        }
    } catch (error) {
        // Handle network errors or other fetch-related errors
        // img.src = 'https://via.placeholder.com/150?text=Error';
        console.error('An error occurred:', error);
        // currentConditionElement.textContent = "Network error"
    }
    
}

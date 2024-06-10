const body = document.querySelector('body');
let searchDiv = document.createElement('div');
let searchBox = document.createElement('input');
let searchButton = document.createElement('button');
searchButton.textContent = "Search";
searchDiv.appendChild(searchBox);
searchDiv.appendChild(searchButton);
body.appendChild(searchDiv);

searchButton.addEventListener('click', function(){
    searchContent = searchBox.value.trim();
    getCurrentWeather(searchContent);
});

// let img = document.createElement('span');
// img.setAttribute('src', '#');

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

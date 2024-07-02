import { getWeather, appendCurrentWeather, appendDailyForecast, appendDetails, appendHourlyForecast} from './apiHandler';

const body = document.querySelector('body');

export function addMainPane(parent){
    let mainPane = document.createElement('div');
    mainPane.id = "mainPane";

    let currentWeather = document.createElement('div');
    currentWeather.id = "currentWeather";

    let search = document.createElement('div');
    search.id = "search";

    mainPane.appendChild(currentWeather); 
    mainPane.appendChild(search);// This needs to be before addSearchBox to avoid null
    addSearchBox(search);

    let animation = document.createElement('img');
    animation.id = "animation";
    let threeDaysFC = document.createElement('div');
    threeDaysFC.id = "forecast";
        let tomorrow = document.createElement('div');
        let dayTwo = document.createElement('div');
        let dayThree = document.createElement('div');
        tomorrow.classList.add('day');
        tomorrow.id = "day1";
        dayTwo.classList.add('day');
        dayTwo.id = "day2";
        dayThree.classList.add('day');
        dayThree.id = "day3";
        threeDaysFC.appendChild(tomorrow);
        threeDaysFC.appendChild(dayTwo);
        threeDaysFC.appendChild(dayThree);

    mainPane.appendChild(animation);
    mainPane.appendChild(threeDaysFC);
    parent.appendChild(mainPane);
}

function addSearchBox(parent){
    let searchBox = document.createElement('input');
    searchBox.id = "searchBox"; // Add an id to the search box for easier selection later if needed
    let searchButton = document.createElement('button');
    searchButton.id = 'searchBtn';
    searchButton.textContent = "Search";
    
    parent.appendChild(searchBox);
    parent.appendChild(searchButton);

    searchButton.addEventListener('click', async function(){
        let searchContent = searchBox.value.trim();
        await getWeather(searchContent);
        appendCurrentWeather();
        appendDailyForecast();
        appendDetails();
        appendHourlyForecast();
    });
}

export function addInfoPane(parent) {
    let detailsPane = document.createElement('div');
    detailsPane.id = "details";

    let info = document.createElement('div');
    info.id = "info";

    let infoIds = ['wind', 'humidity', 'precipitation', 'tempreture', 'uv', 'astro'];
    infoIds.forEach(id => {
        let div = document.createElement('div');
        div.id = id;
        div.classList.add('info-card');
        info.appendChild(div);
    });

    let hourly = document.createElement('div');
    hourly.id = "hourly";

    for (let i = 1; i <= 10; i++) {
        let hour = document.createElement('div');
        hour.classList.add('hour');
        hour.id = `hour${i}`;
        hourly.appendChild(hour);

        let condition = document.createElement('div');
        condition.classList.add('condition');
        let icon = document.createElement('img');
        icon.classList.add('icon');
        let temperature = document.createElement('div');
        temperature.classList.add('temperature');
        hour.appendChild(condition);
        hour.appendChild(icon);
        hour.appendChild(temperature);
    }

    detailsPane.appendChild(info);
    detailsPane.appendChild(hourly);

    parent.appendChild(detailsPane);
}

const body = document.querySelector('body');

export function addMainPane(parent){
    let mainPane = document.createElement('div');
    mainPane.id = "mainPane"
    let currentWeather = document.createElement('div');
    currentWeather.id = "currentWeather";
    let search = document.createElement('div');
    search.id = "search";
    addSearchBox(search);
    let animation = document.createElement('div');
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
    mainPane.appendChild(currentWeather);
    mainPane.appendChild(search);
    mainPane.appendChild(animation);
    mainPane.appendChild(threeDaysFC);
    parent.appendChild(mainPane);
}

function addSearchBox(parent){
    let searchDiv = document.createElement('form');
    let searchBox = document.createElement('input');
    let searchButton = document.createElement('button');
    searchButton.textContent = "Search";
    searchDiv.appendChild(searchBox);
    searchDiv.appendChild(searchButton);
    parent.appendChild(searchDiv);

    searchButton.addEventListener('click', function(){
        searchContent = searchBox.value.trim();
        getCurrentWeather(searchContent);
    });
}

export function addInfoPane(parent){
    let detailsPane = document.createElement('div');
    detailsPane.id = "details";
    let info = document.createElement('div');
    info.id = "info";
    let hourly = document.createElement('div');
    hourly.id = "hourly";

    let wind = document.createElement('div');
    let humidity = document.createElement('div');
    let precipitation = document.createElement('div');
    let pressure= document.createElement('div');
    let feelsLike = document.createElement('div');
    let uv = document.createElement('div');
    let astro1 = document.createElement('div');
    let astro2 = document.createElement('div');
    let astro3 = document.createElement('div');
    info.appendChild(wind);
    info.appendChild(humidity);
    info.appendChild(precipitation);
    info.appendChild(pressure);
    info.appendChild(feelsLike);
    info.appendChild(uv);
    info.appendChild(astro1);
    info.appendChild(astro2);
    info.appendChild(astro3);
    
    //9 children 
    let hour1 = document.createElement('div');
    hour1.classList.add('hour');
    let hour2 = document.createElement('div');
    hour2.classList.add('hour');
    let hour3 = document.createElement('div');
    hour3.classList.add('hour');
    let hour4 = document.createElement('div');
    hour4.classList.add('hour');
    let hour5 = document.createElement('div');
    hour5.classList.add('hour');
    let hour6 = document.createElement('div');
    hour6.classList.add('hour');
    let hour7 = document.createElement('div');
    hour7.classList.add('hour');
    let hour8 = document.createElement('div');
    hour8.classList.add('hour');
    let hour9 = document.createElement('div');
    hour9.classList.add('hour');
    let hour10 = document.createElement('div');
    hour10.classList.add('hour');
    hourly.appendChild(hour1);
    hourly.appendChild(hour2);
    hourly.appendChild(hour3);
    hourly.appendChild(hour4);
    hourly.appendChild(hour5);
    hourly.appendChild(hour6);
    hourly.appendChild(hour7);
    hourly.appendChild(hour8);
    hourly.appendChild(hour9);
    hourly.appendChild(hour10);

    detailsPane.appendChild(info);
    detailsPane.appendChild(hourly);

    parent.appendChild(detailsPane);
}
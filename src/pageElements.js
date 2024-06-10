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
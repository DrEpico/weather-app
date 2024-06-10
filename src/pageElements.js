const body = document.querySelector('body');

export function addMainPane(parent){
    let mainPane = document.createElement('div');
    let currentWeather = document.createElement('div');
    let search = document.createElement('div');
    addSearchBox(search);
    let animation = document.createElement('div');
    let threeDaysFC = document.createElement('div');
        let tomorrow = document.createElement('div');
        let dayTwo = document.createElement('div');
        let dayThree = document.createElement('div');
        threeDaysFC.appendChild(tomorrow, dayTwo, dayThree);
    mainPane.appendChild(currentWeather, search, animation, threeDaysFC);
    parent.appendChild(mainPane);
}

function addSearchBox(parent){
    let searchDiv = document.createElement('div');
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
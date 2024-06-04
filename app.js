const tempRef = document.querySelector(".temp");
const cityRef = document.querySelector(".city");
const humidityRef = document.querySelector(".humidity");
const windRef = document.querySelector(".wind");
const searchBtnRef = document.querySelector(".search button");
const searchBoxRef = document.querySelector(".search input");
const weatherImgRef = document.querySelector(".weather-icon")

searchBtnRef.addEventListener("click", onSearch);

const key = "9737bb4d652704152f7b625b748fd943";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function weatherCheck(city) {
    const response = await fetch(url + city + `&appid=${key}`);
    const data = await response.json();

    tempRef.textContent = `${Math.round(data.main.temp) + "°C"}`;
    cityRef.textContent = data.name;
    humidityRef.textContent = `${data.main.humidity + "%"}`;
    windRef.textContent = `${data.wind.speed + " km/h"}`;
    weatherImgRef.src = weatherIcon(data.weather[0].main)

    console.log(data.weather[0].main);
}

function onSearch(event) {
    weatherCheck(searchBoxRef.value);
    searchBoxRef.value = "";
}

function weatherIcon(weather) {
    let result = "";

    switch (weather) {
        case "Clear": result = "/images/clear.png"; break;
        case "Clouds": result = "/images/clouds.png"; break;
        case "Dizzle": result = "/images/dizzle.png"; break;
        case "Mist": result = "/images/mist.png"; break;
        case "Rain": result = "/images/rain.png"; break;
        case "Snow": result = "/images/snow.png"; break;
    };

    return result;
}

weatherCheck("sofia")

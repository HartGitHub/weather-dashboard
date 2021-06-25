const btn_Search = document.querySelector("#searchBtn");
const input_City = document.querySelector("#inputCity");
const ul_CityList = document.querySelector("#eachCityList");
const tempElement = document.querySelector("#tempDegree");
btn_Search.addEventListener("click", formSubmit);
const tempHolder = document.querySelector("#tempHolder");
let cityName;
const eachCityList = document.querySelector("#eachCityList");



function processWeatherData(weatherData) {
  // console.log(weatherData)
  //getCityName
  //  const cityName = {city}
  //  cityName.innerHTML=input_City;
 const getTemperature = weatherData.current.temp
tempElement.textContent = getTemperature
for (let i = 0; i <5; i++){
 const  temperatureForecast =  weatherData.daily[i].temp.max
 var div = document.createElement("div");
 div.textContent =temperatureForecast;
 tempHolder.appendChild(div);
    console.log(temperatureForecast)
}
var btn = document.createElement("button");
btn.textContent = cityName;
eachCityList.appendChild(btn);
  //getHumidity,
  //getWeatherIcon
  //get futureConditions
  //get uvIndex
  //get date
  //get windSpeed
  //update HTML
  //update current and future weather
  console.log(weatherData);
}
function formSubmit() {
    tempHolder.innerHTML = "";
    cityName =input_City.value;
  console.log(cityName);
  getCoords(cityName);
  
}
function getCoords(cityName) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=7551bc2f9ddedf143c9612b73b901427`
  )
    .then((response) => response.json())
    .then((data) => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      console.log(lat, lon);
      cityData(lat, lon);
    
    }
    ).catch((err)=> alert("Please type a valid city name"))
    
}
function cityData(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=7551bc2f9ddedf143c9612b73b901427`
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            processWeatherData(data);
        })
        .catch((err)=> alert(err))
}
//API KEY **** 7551bc2f9ddedf143c9612b73b901427
//find how to translate city to lat/lon || figure out how to ask for city
// AS A traveler
// I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly

// Acceptance Criteria

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

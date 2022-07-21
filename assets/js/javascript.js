var citySearch = document.querySelector(".citysearch");
var searchbtn = document.querySelector(".searchbtn");
var weatherInput = document.querySelector("#weatherinput")
var date = document.querySelector(".date");
var currentConditions = document.querySelector(".currentconditions");
var cityname = document.querySelector("#cityname");
var date = document.querySelector(".date");
var temperature = document.querySelector("#temperature");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var uvindex = document.querySelector("#uvindex");

let btn = document.querySelector('button').addEventListener('click', () => 
searchAPI(),
console.log("#weatherinput"));

//API Call
function searchAPI() {
    var weatherInput = document.querySelector("#weatherInput");
    console.log(weatherInput);
    var inputValue = weatherInput.value;
    var apiKey = "c107fd0ee983a34881f3573465d57ca5";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&appid=" +
      apiKey;

  fetch(queryURL).then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);
    searchCoordinate(data.coord.lon, data.coord.lat);
  });
}

function searchCoordinate(lon , lat) {
    var apiKey = "c107fd0ee983a34881f3573465d57ca5";
    var weatherInput = document.querySelector("#weatherInput");
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial")
    .then(function (response) {
      return response.json();
    })
  
    .then(function (data) {
      console.log(data);
      document.querySelector("#temperature").textContent = "Temp: " ;data.current.temp + "°F";
      document.querySelector("#wind").textContent = "Wind: " + data.current.wind_speed + " mph ";
      document.querySelector("#humidity").textContent = "Humidity: " + data.current.humidity + "%" ;
      document.querySelector("#uvindex").textContent = "UV Index: " + data.current.uvi;
      
  
      for (var i = 1; i < 6; i++) {
        document.querySelector("#temp" + i).textContent = data.daily[i].temp.day;
        // Forecast with Moment JS
        var forecast = moment().add(1, "days").calendar();
        console.log("forecast");
        forecastdaily.innerHTML = forecastdaily
   
      }
    });
  }

//Moment JS
// var currentDay =moment().subtract(10, 'days').calendar();
// console.log("currentDay");
// date.innerHTML = currentDay;
// searchAPI();


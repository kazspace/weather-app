function refreshWeather(response) {
  let temperatureElement = document.querySelector("#weather-current-temp");
  let temperature = response.data.temperature.current;

  let mainCity = document.querySelector("#weather-city");
  mainCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);

  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  humidityElement.innerHTML = `${humidity}%`;

  let windElement = document.querySelector("#wind");
  let windSpeed = response.data.wind.speed;
  windElement.innerHTML = `${windSpeed}km/h`;

  let description = document.querySelector("#weather-description");
  let weatherDescription = response.data.condition.description;
  description.innerHTML = weatherDescription;
}

function searchingCity(city) {
  let apiKey = "73f0d06a58bdbf0dee0944t7de9b9o05";
  let siteURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(siteURL).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#search-city-input");

  searchingCity(searchedCity.value);
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);

searchForm.addEventListener("submit", handleSearch);

// default city on load

searchingCity("London");

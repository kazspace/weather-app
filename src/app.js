function handleSearch(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#search-city-input");
  let mainCity = document.querySelector("#weather-city");

  mainCity.innerHTML = searchedCity.value;
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);

searchForm.addEventListener("submit", handleSearch);

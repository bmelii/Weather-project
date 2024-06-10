const timisoara = document.querySelector(".dropdown-menu .timisoara");
const bucharest = document.querySelector(".dropdown-menu .bucharest");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const oradea = document.querySelector(".dropdown-menu .oradea");

const dropdownItems = document.querySelectorAll('.city');
const currentSelectedCity = document.querySelector('.city-btn');

dropdownItems.forEach(item => {
  item.addEventListener('click', (event) => {
    const city = event.target.innerText;
    currentSelectedCity.innerText = city;
    displayCurrentWeather(city);
    displayForecast(city);
    localStorage.setItem('selectedCity', city);
  });
});

function updateSelectedCity(city) {
  const currentSelectedCity = document.querySelector('.city-btn');
  currentSelectedCity.innerText = city;
}

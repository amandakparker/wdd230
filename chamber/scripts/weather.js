// select HTML elements in the document
const currentIcon = document.querySelector(".weatherIcon");
const currentTemp = document.querySelector(".weatherTemp");
const currentStat = document.querySelector(".weatherStatus");
const cwindSpeed = document.querySelector(".windSpeed");
const cwindChill = document.querySelector(".windChill");

// get the weather data from the API - openweathermap.org
const url = "https://api.openweathermap.org/data/2.5/weather?q=norfolk,va,us&units=imperial&appid=29c21970c19ed5753969f95e774018e3";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const weatherdata = await response.json();
      displayResults(weatherdata);
    } else {
      throw Error(`Response not ok: ${await response.text()}`);
    }
  } catch (error) {}
}

apiFetch();

// capitalize the first letter in each description word using a for loop
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = `${str[i].charAt(0).toUpperCase()}${str[i].slice(1)}`;
  }
  return str.join(" ");
}

// calculate wind chill using temp and wind speed, mark "N/A" if not applicable
function calcWindChill(weatherdata) {
  if (weatherdata.wind.speed > 3.0 && weatherdata.main.temp <= 50) {
    let t = weatherdata.main.temp;
    let s = weatherdata.wind.speed;
    let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    return `${f.toFixed(1)}&deg;F`;
  } else {
    return `N/A`;
  }
}

// display the results
function displayResults(weatherdata) {
  // display the current temperature as an integer, formatted as a bold number
  currentTemp.innerHTML = `${weatherdata.main.temp.toFixed(0)}&deg;F`;

  // set variables to the icon source and the weather description
  const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  const desc = titleCase(weatherdata.weather[0].description);

  // insert current weather icon attributes and other weather details
  currentIcon.src = iconsrc;
  currentIcon.alt = `Icon of current weather condition in Virginia Beach, VA which is ${desc}`;
  currentStat.textContent = `${desc}`;
  cwindSpeed.textContent = weatherdata.wind.speed.toFixed(1);
  cwindChill.innerHTML = calcWindChill(weatherdata);
}

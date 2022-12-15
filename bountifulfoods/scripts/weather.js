// select HTML elements in the document
const currentIcon = document.querySelector(".weatherIcon");
const currentTemp = document.querySelector(".weatherTemp");
const currentStat = document.querySelector(".weatherStatus");

// ********* get the CURRENT weather data from the API - openweathermap.org *********
const urlcurrent = "https://api.openweathermap.org/data/2.5/weather?lat=33.160390&lon=-117.349680&units=imperial&appid=29c21970c19ed5753969f95e774018e3";

async function apiFetch() {
  try {
    const response = await fetch(urlcurrent);
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

// display the results
function displayResults(weatherdata) {
  // display the current temperature as an integer, formatted as a bold number
  currentTemp.innerHTML = `${weatherdata.main.temp.toFixed(0)}&deg;F`;

  // set variables to the icon source and the weather description
  const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  const desc = titleCase(weatherdata.weather[0].description);

  // insert current weather icon attributes and other weather details
  currentIcon.src = iconsrc;
  currentIcon.alt = `Icon of current weather condition in Carlsbad, CA which is ${desc}`;
  currentStat.textContent = `${desc}`;
}

// ********* get the FUTURE forecast weather data from the API - openweathermap.org *********
// const urlforecast = "https://api.openweathermap.org/data/2.5/forecast?lat=33.160390&lon=-117.349680&units=imperial&appid=29c21970c19ed5753969f95e774018e3";

// async function fetchForecast() {
//   try {
//     const response1 = await fetch(urlforecast);
//     if (response1.ok) {
//       const forecastdata = await response1.json();
//       displayResults(forecastdata);
//       console.log(forecastdata);
//     } else {
//       throw Error(`Response not okay: ${await response1.text()}`);
//     }
//   } catch (error) {}
// }

// function displayResults(forecastdata) {
//   var fday = "";
//   forecastdata.daily.forEach((value, index) => {
//     if (index > 0) {
//       var dayname = new Date(value.dt * 1000).toLocaleDateString("en", { weekday: "long" });
//       var icon = value.weather[0].icon;
//       var temp = value.temp.day.toFixed(0);
//       fday = `<div class="forecast-day">
//                     <p>${dayname}</p>
//                     <p><span class="ico-${icon}" title="${icon}"></span></p>
//                     <div class="forecast-day--temp">${temp}&deg;F</div>
//                     </div>`;
//       forecastE1[0].insertAdjacentHTML("beforeend", fday);
//     }
//   });
// }

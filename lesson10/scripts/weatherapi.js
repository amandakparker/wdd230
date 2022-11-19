// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// get the weather data from the API - openweathermap.org
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=29c21970c19ed5753969f95e774018e3";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const weatherdata = await response.json();
      console.log(weatherdata); //this is for testing the call
      displayResults(weatherdata);
    } else {
      throw Error(`Response not ok: ${await response.text()}`);
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

apiFetch();

// capitalize
function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// display the results
function displayResults(weatherdata) {
  // display the current temperature as an integer, formatted as a bold number
  currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;

  // set variables the icon source and the weather description
  const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
  const desc = capitalize(weatherdata.weather[0].description);

  captionDesc.textContent = desc;
  weatherIcon.src = iconsrc;
  weatherIcon.setAttribute("alt", `Icon of current weather condition at Fairbanks which is ${desc}`);
}

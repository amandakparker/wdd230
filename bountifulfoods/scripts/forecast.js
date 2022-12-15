// ********* get the FUTURE forecast weather data from the API - openweathermap.org *********
const urlforecast = "https://api.openweathermap.org/data/2.5/forecast?lat=33.160390&lon=-117.349680&units=imperial&appid=29c21970c19ed5753969f95e774018e3";

async function fetchForecast() {
  try {
    const response1 = await fetch(urlforecast);
    if (response1.ok) {
      const futureweatherdata = await response1.json();
      displayResults(futureweatherdata);
    } else {
      throw Error(`Response not okay: ${await response1.text()}`);
    }
  } catch (error) {}
}

function displayResults(futureweatherdata) {
  var fday = "";
  data.daily.forEach((value, index) => {
    if (index > 0) {
      var dayname = new Date(value.dt * 1000).toLocaleDateString("en", { weekday: "long" });
      var icon = value.weather[0].icon;
      var temp = value.temp.day.toFixed(0);
      fday = `<div class="forecast-day">
                    <p>${dayname}</p>
                    <p><span class="ico-${icon}" title="${icon}"></span></p>
                    <div class="forecast-day--temp">${temp}&deg;F</div>
                    </div>`;
      forecastE1[0].insertAdjacentHTML("beforeend", fday);
    }
  });
}

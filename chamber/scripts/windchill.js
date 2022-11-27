const ct = document.querySelector(".weatherTemp");
const cws = document.querySelector(".windSpeed");

const cwindChill = document.querySelector(".windChill");
const currentTemp = ct.textContent;
const cwindSpeed = cws.textContent;

function calcWindChill(currentTemp, cwindSpeed) {
  if (cwindSpeed > 3.0 && currentTemp <= 50) {
    let t = currentTemp;
    let s = cwindSpeed;
    let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    return `${f.toFixed(1)}&deg;F`;
  } else {
    return `N/A`;
  }
}

cwindChill.innerHTML = calcWindChill(currentTemp, cwindSpeed);

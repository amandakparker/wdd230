//Display the current date: Weekday, Day Month Year
const datefieldUK = document.querySelector("#lastUpdated");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;

//Get and display the current year
let year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

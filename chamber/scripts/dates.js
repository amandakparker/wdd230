//Display the current date: Weekday, Day Month Year
const today = new Date();
document.querySelector("#currentDate").textContent = today;

//Get and display the current year
let year = new Date().getFullYear();
document.querySelector("#year").textContent = year;

//Display the last updated date and time
document.querySelector("#lastUpdated").textContent = document.lastModified;

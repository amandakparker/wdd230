// store the PerformanceResourceTiming, the URL of the JSON file into a const variable
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

// more robust method from Virtual Lab
async function getProphets() {
  let response = await fetch(requestURL);
  let data = await response.json();
  let prophets = data.prophets;
  prophets.forEach((prophet) => {
    displayProphets(prophet);
  });
}

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let birthDate = document.createElement("p");
  let birthPlace = document.createElement("p");
  let portrait = document.createElement("img");

  // change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  // add birth date component
  birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

  // add birth place component
  birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

  // build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable.)
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - Latter-day Prophet #${prophet.order}`);
  portrait.setAttribute("loading", "lazy");

  // add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(birthDate);
  card.appendChild(birthPlace);
  card.appendChild(portrait);

  // add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

const prophets = getProphets();

// JSON functionality (lines 2 through 70)
const requestData = "./data.json";
const directory = document.querySelector(".directory");

async function getBusinesses() {
  let response = await fetch(requestData);
  let data = await response.json();
  let businesses = data;
  businesses.forEach((business) => {
    displayBusinesses(business);
  });
}

function displayBusinesses(business) {
  // create the elements for each business
  let card = document.createElement("section");
  let bname = document.createElement("p");
  let address = document.createElement("p");
  let phone = document.createElement("a");
  let email = document.createElement("a");
  let website = document.createElement("a");
  let additional = document.createElement("p");
  let logo = document.createElement("img");

  // textContent for business name
  bname.textContent = `${business.businessname}`;
  bname.setAttribute("class", "bname");

  // textContent for address
  address.textContent = `${business.streetaddress} ${business.citystatezip}`;

  // textContent for clickable phone number
  phone.textContent = `${business.phone} \n`;
  phone.setAttribute("href", `tel:${business.phone}`);

  // create element for clickable email
  email.textContent = `${business.email} `;
  email.setAttribute("href", `mailto:${business.email}`);
  email.setAttribute("class", "email");

  // textContent for website URL
  website.textContent = `${business.website} `;
  website.setAttribute("href", business.websiteurl);
  website.setAttribute("target", "_blank");

  // textConent for regional level and training offerings
  additional.textContent = `Regional Level: ${business.regionallvl} | Training Offered? ${business.training}`;
  additional.setAttribute("class", "additional");

  // image attributes for logos
  logo.setAttribute("src", business.imageurl);
  logo.setAttribute("alt", `Logo for ${business.businessname}`);
  logo.setAttribute("loading", "lazy");

  // build each business card
  card.setAttribute("class", "businesscard");
  card.appendChild(logo);
  card.appendChild(bname);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(email);
  card.appendChild(website);
  card.appendChild(additional);

  // add this card to the existing HTML div class="directory"
  directory.appendChild(card);
}

const businesses = getBusinesses();

// grid/list button functionality (lines 73 through 83)
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
});

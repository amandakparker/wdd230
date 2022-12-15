// 1st fruit selection
let dropdown1 = document.getElementById("fruit1");
dropdown1.length = 0;

let defaultOption1 = document.createElement("option");
defaultOption1.text = "Select a Fruit";

dropdown1.add(defaultOption1);
dropdown1.selectedIndex = 0;

//2nd fruit selection
let dropdown2 = document.getElementById("fruit2");
dropdown2.length = 0;

let defaultOption2 = document.createElement("option");
defaultOption2.text = "Select a Fruit";

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

// 3rd fruit selection
let dropdown3 = document.getElementById("fruit3");
dropdown3.length = 0;

let defaultOption3 = document.createElement("option");
defaultOption3.text = "Select a Fruit";

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

// fetch json and add to dropdown list
const url = "fruit.json";

fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.warn(`Looks like there is problem. Status Code: ${response.status}`);
      return;
    }

    response.json().then(function (data) {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].name;
        option.value = data[i].id;
        dropdown1.add(option);
      }

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].name;
        option.value = data[i].id;
        dropdown2.add(option);
      }

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].name;
        option.value = data[i].id;
        dropdown3.add(option);
      }
    });
  })
  .catch(function (err) {
    console.error("Fetch Error -", err);
  });

// Original: https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json

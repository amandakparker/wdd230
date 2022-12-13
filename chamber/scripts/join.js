// Check if the position title contains only alpha characters, hyphens, and spaces

document.querySelector("#postitle").addEventListener("keypress", validation);

const postitle = document.querySelector("#postitle");

function validation(postitle) {
  console.log(postitle); // remove when functionality is working
  var regEx = /[a-z][a-z\s]*$/;
  if (postitle.value.match(regEx)) {
    return true;
  } else {
    alert("Please enter letters and space only.");
    return false;
  }
}

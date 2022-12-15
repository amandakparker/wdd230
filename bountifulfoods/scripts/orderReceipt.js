let fname = document.getElementById("name").value;
console.log(fname);

let email = document.getElementById("email").value;
console.log(email);

let phone = document.getElementById("phone").value;
console.log(phone);

let fruits = [];
let dropdown1 = document.getElementsByName("fruits1");
for (let i = 0; i < dropdowns1.length; i++) {
  if (dropdowns1[i].selected) {
    fruits.push(dropdowns1[i].value);
  }
}

let dropdown2 = document.getElementsByName("fruits2");
for (let i = 0; i < dropdowns2.length; i++) {
  if (dropdowns2[i].selected) {
    fruits.push(dropdowns2[i].value);
  }
}

let dropdown3 = document.getElementsByName("fruits3");
for (let i = 0; i < dropdowns3.length; i++) {
  if (dropdowns3[i].selected) {
    fruits.push(dropdowns3[i].value);
  }
}

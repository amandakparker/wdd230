function printReceipt() {
  var firstname = document.getElementById("firstName").value;
  var homeemail = document.getElementById("homeEmail").value;
  var cellPhone = document.getElementById("cellPhone").value;
  // var fruit1 = document.getElementById("fruit1").value;
  // var fruit2 = document.getElementById("fruit2").value;
  // var fruit3 = document.getElementById("fruit3").value;

  console.log(firstname);

  var result = `Name: ${firstname}; Email: ${homeemail}; Phone: ${cellPhone} `;
  console.log(result);
  document.getElementById("receipt").innerHTML = result;
}

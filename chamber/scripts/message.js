const alertmsg = document.querySelector(".message");
var currentDate = new Date();
var day = currentDate.getDay();

if (day == 1 || day == 2) {
  alertmsg.classList.toggle("show");
} else {
  alertmsg.classList.toggle("hide");
}

const alertmsg = document.querySelector(".message");
var currentDate = new Date();
var day = currentDate.getDay();

if (day == 1) {
  alertmsg.classList.toggle("show");
} else if (day == 2) {
  alertmsg.classList.toggle("show");
} else {
  alertmsg.classList.toggle("hide");
}

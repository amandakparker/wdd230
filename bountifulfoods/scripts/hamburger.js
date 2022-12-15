const hambutton = document.querySelector(".menuBtn");
const mainnav = document.querySelector("nav");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 1024) mainnav.classList.remove("responsive");
};

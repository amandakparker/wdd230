// Define list time variables
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const myChap = input.value;
  input.value = "";

  const listChap = document.createElement("li");
  const listText = document.createElement("span");
  const listDBtn = document.createElement("button");

  listChap.appendChild(listText);
  listText.textContent = myChap;
  listChap.appendChild(listDBtn);
  listDBtn.textContent = "❌";
  list.appendChild(listChap);

  listDBtn.addEventListener("click", () => {
    list.removeChild(listChap);
  });

  input.focus();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => createBoxes(input.value));
buttonDestroy.addEventListener("click", destroyBoxes);

let size = 30;

function createBoxes(amount) {
  let amountNumber = Number(amount);

  if (isNaN(amountNumber) || amountNumber <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  for (let i = 0; i < amountNumber; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    size += 10;

    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  size = 30;
}

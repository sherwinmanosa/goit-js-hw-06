let initialValue = 0;
let value = document.getElementById("value");
value.innerText = initialValue;
let incBtn = document.querySelector('[data-action="increment"]');
let decBtn = document.querySelector('[data-action="decrement"]');

incBtn.onclick = function () {
  initialValue += 1;
  value.innerText = initialValue;
};
decBtn.onclick = function () {
  initialValue -= 1;
  value.innerText = initialValue;
};

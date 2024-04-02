const textInput = document.querySelector("#validation-input");
const dataInput = textInput.getAttribute(`data-length`);
// console.log(dataInput);

textInput.addEventListener("blur", () => {
  if (textInput.value.length == dataInput) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});

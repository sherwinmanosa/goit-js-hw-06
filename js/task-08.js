const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("All fields must be filled in!");
  } else {
    const obj = { email: email.value, password: password.value };
    console.log(obj);
  }
  event.target.reset();
});

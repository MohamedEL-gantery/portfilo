let userName = document.querySelector("[name='name']");
let userEmail = document.querySelector("[name='email']");
let userMsg = document.querySelector("[name='message']");

document.forms[0].onsubmit = function (e) {
  let nameValid = false;
  let emailValid = false;
  let msgValid = false;

  if (userName.value !== "" && userName.value.length <= 15) {
    nameValid = true;
  }

  if (userEmail.value !== "") {
    emailValid = true;
  }
  if (userMsg.value !== "") {
    msgValid = true;
  }

  if (nameValid === false || emailValid === false || msgValid === false) {
    e.preventDefault();
    alert("Please enter your name, email and message");
  } else {
    alert("Form submitted sucessfully!");
  }
};

let myButton = document.getElementById("myBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
};

myButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

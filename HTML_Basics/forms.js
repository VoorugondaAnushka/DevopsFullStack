let form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "") {
    alert("Username not entered. Please enter your username.");
    return;
  }

  if (email === "") {
    alert("Email not entered. Please enter your email.");
    return;
  }

  if (password === "") {
    alert("Password not entered. Please enter your password.");
    return;
  }

  alert("Login successful!");
});

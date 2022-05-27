const btnSignUp = document.getElementById("btn-signup");
btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const cfpassword = document.getElementById("cfpassword");
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
    cfpass: cfpassword.value,
  };
  const json = JSON.stringify(user);
  if (password.value === cfpassword.value) {
    localStorage.setItem(username.value, json);
    alert("Sign Up Success");
    window.location.href = "login.html";
  } else {
    alert("Passwords are not the same");
  }
});

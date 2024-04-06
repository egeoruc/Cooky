const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  loginUser(username, password);
});

function loginUser(username, password) {
  const userData = localStorage.getItem(username);
  if (userData) {
    const userDetails = JSON.parse(userData);
    if (userDetails.password === password) {
      window.location.href = "/pages/restaurant.html";
    } else {
      alert("Incorrect password.");
    }
  } else {
    alert("Username does not exist.");
  }
}

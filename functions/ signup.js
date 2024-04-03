const form = document.getElementById("signupForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = getFormData(form);
  saveFormDataToLocalStorage(data);
});

function getFormData(form) {
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  const regex = /^[a-zA-Z0-9_]+$/;
  if (!regex.test(data.username)) {
    alert("Username can only contain alphanumeric characters and underscores!");
    return;
  }

  return data;
}

function saveFormDataToLocalStorage(data) {
  if (localStorage.getItem(data.username)) {
    alert("Username already exists!");
  } else {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(data.username, jsonData);
  }
}


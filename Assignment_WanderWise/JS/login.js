document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
});

// const form = document.getElementById('loginform');
const popup = document.getElementById('popup');
const dialog = document.getElementById('popup');

// form.addEventListener('submit', function (event) {
//   dialogPopup = !dialogPopup;

//   event.preventDefault();
//   dialogPopup
//     ? (dialog.style.display = 'block')
//     : (dialog.style.display = 'none');
//   console.log('hello im clicked');
// });

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  const users = JSON.parse(localStorage.getItem('profiles') || '[]');

  const user = users.filter((user) => {
    return user.email === email && password === user.password;
  });

  if (user.length == 0) {
    alert('Invalid credentials.');
    return;
  }
  localStorage.setItem('loggedInUser', JSON.stringify(user[0]));
  alert('Logged in successfully.');
  window.location.assign('../index.html');
});

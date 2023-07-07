// Get the form element
const signUpForm = document.getElementById('signUpForm');

// Add event listener for form submission
signUpForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Perform form validation
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  var users = JSON.parse(localStorage.getItem('profiles'));
  users = users === null ? [] : users;
  // Create an object with the form data
  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  const existingUser = users.filter((user) => email === user.email);
  if (existingUser.length > 0) {
    alert('Email already registered.');
    return;
  }
  users.push(newUser);

  // Save the user data to Local Storage
  localStorage.setItem('profiles', JSON.stringify(users));

  // Display a success message
  alert('Sign up successful! You can now login.');

  // Reset the form
  signUpForm.reset();
  window.location.assign('../index.html');
});

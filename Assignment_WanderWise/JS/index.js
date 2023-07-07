document.addEventListener('DOMContentLoaded', function () {
  const bookNowBtn = document.getElementById('bookNowBtn');
  const bookBtnNav = document.getElementById('booking-btn');
  const loginBtn = document.getElementById('loginbutton');
  const signupBtn = document.getElementById('signupBtn');
  const loginModal = document.getElementById('loginModal');
  const loginForm = document.getElementById('loginForm');
  const signUpForm = document.getElementById('signUpForm');
  const logoutBtn = document.getElementById('logoutbutton');
  const username = document.getElementById('naveUser');
  const aboutLink = document.getElementById('about-link');

  function changeElements() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      loginBtn.classList.add('hidden');
      logoutBtn.classList.replace('hidden', 'block');
      username.innerText = loggedInUser.name;
      bookBtnNav.classList.replace('hidden', 'block');
      bookNowBtn.classList.replace('hidden', 'block');
    }
  }
  changeElements();

  function logout() {
    localStorage.removeItem('loggedInUser');
    logoutBtn.classList.add('hidden');
    username.innerText = '';
    loginBtn.classList.replace('hidden', 'block');
    bookBtnNav.classList.replace('block', 'hidden');
    bookNowBtn.classList.replace('block', 'hidden');
  }
  logoutBtn.addEventListener('click', () => {
    logout();
  });

  function scrollToAbout() {
    const aboutSection = document.getElementById('about');

    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToAbout();
  });
});

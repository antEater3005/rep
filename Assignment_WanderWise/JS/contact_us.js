document.addEventListener('DOMContentLoaded', function() {
    // Get the contact details elements
    const nameElement = document.getElementById('name');
    const phoneElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');
    
  
    // Add event listener to phone element
    phoneElement.addEventListener('click', function() {
      alert('Please call us at +91 9984173213 for assistance.');
    });
  
    // Add event listener to email element
    emailElement.addEventListener('click', function() {
      alert('You can reach us via email at info@example.com.');
    });
  });
  
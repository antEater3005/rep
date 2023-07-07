function saveBooking() {
  var destination = document.getElementById('destination').value;
  var departure = document.getElementById('departure').value;
  var returndate = document.getElementById('return').value;
  const message = document.getElementById('confirmation');
  const currDate = new Date();
  if (destination === '' || departure === '' || returndate === '') {
    message.textContent = 'Please fill all details.';
    message.style.color = 'red';
    return;
  }
  const departureDate = new Date(departure);
  const returnDate = new Date(returndate);

  if (
    departureDate < currDate ||
    returnDate < currDate ||
    returnDate < departureDate
  ) {
    message.textContent = 'Please enter valid dates.';
    message.style.color = 'red';
    return;
  }

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  var newBookingData = {
    name: loggedInUser.name,
    email: loggedInUser.email,
    destination: destination,
    departure: departure,
    returnDate: returnDate,
  };
  //   retrieve previous bookings
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

  // add new booking
  bookings.push(newBookingData);
  // Save the booking data in local storage
  localStorage.setItem('booking', JSON.stringify(bookings));

  // Display a confirmation message
  message.style.color = 'green';
  var confirmationMessage = `Thank you, ${loggedInUser.name}! Your booking for ${destination} from ${departure} to ${returndate} has been saved.`;
  message.textContent = confirmationMessage;
}

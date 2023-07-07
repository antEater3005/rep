<script>
    // Get the button and popup elements
    const subscribeBtn = document.getElementById('subscribeBtn');
    const popup = document.getElementById('popup');

    // Add event listener to the button
    subscribeBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Show the popup
      popup.style.display = 'block';
    });
  </script>
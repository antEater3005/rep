document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");
});


  const form = document.getElementById('feedbackForm');
  const popup = document.getElementById('popup');
   const dialog=document.getElementById("popup");

   
   var dialogPopup=false;

  form.addEventListener('submit', function(event) {
    
    dialogPopup=!dialogPopup;
    
    event.preventDefault();
    dialogPopup?dialog.style.display="block":dialog.style.display="none";
     console.log("hello im clicked");
  });




  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

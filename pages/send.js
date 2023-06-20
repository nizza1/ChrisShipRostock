// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contact-form');

  
    // Add event listener to the form submit event
    contactForm.addEventListener('submit', function(event) {
      // Prevent form submission
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(contactForm);
      console.log(formData);
  
      // Create a new XMLHttpRequest object
      const xhr = new XMLHttpRequest();
  
      // Configure the request
      xhr.open('POST', 'send-email.php', true);
  
      // Set the response type
      xhr.responseType = 'text';
  
      // Handle request load event
      xhr.onload = function() {
        if (xhr.status === 200) {
          // Request successful
          console.log(xhr.responseText);
          alert('Email sent successfully.');
          contactForm.reset();
        } else {
          // Request failed
          console.error('Email sending failed.');
          alert('Oops! Something went wrong.');
        }
      };
  
      // Send the request
      xhr.send(formData);
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  // Handle form validation
  const uploadForm = document.querySelector('form');
  const fileInput = document.querySelector('input[type="file"]');
  
  uploadForm.addEventListener('submit', function(event) {
    if (fileInput.files.length === 0) {
      event.preventDefault(); // Prevent the form from submitting
      alert('Please select a file before uploading.');
    } else {
      alert('File uploaded successfully!');
    }
  });

  // Page fade-in animation
  const body = document.querySelector('body');
  body.style.opacity = 0;
  body.style.transition = 'opacity 1s';
  
  setTimeout(function() {document.addEventListener('DOMContentLoaded', function() {
  // Handle form validation
  const uploadForm = document.querySelector('form');
  const fileInput = document.querySelector('input[type="file"]');
  
  uploadForm.addEventListener('submit', function(event) {
    if (fileInput.files.length === 0) {
      event.preventDefault(); // Prevent the form from submitting
      alert('Please select a file before uploading.');
    } else {
      alert('File uploaded successfully!');
    }
  });

  // Page fade-in animation
  const body = document.querySelector('body');
  body.style.opacity = 0;
  body.style.transition = 'opacity 1s';
  
  setTimeout(function() {
    body.style.opacity = 1;
  }, 100);
});

    body.style.opacity = 1;
  }, 100);
});

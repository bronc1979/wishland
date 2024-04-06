const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const phoneNumber = document.getElementById('signup-phone').value; 
    const zipCode = document.getElementById('signup-zipcode').value;

    const usernameErrorMessage = document.querySelector('#signup-username + .error-message');
    const emailErrorMessage = document.querySelector('#signup-email + .error-message');
    const passwordErrorMessage = document.querySelector('#signup-password + .error-message');
    // ... Add similar lines for phone and zip code error messages ... 

    let isValid = true; 

    // Username validation
    if (username.trim() === '') {
        usernameErrorMessage.textContent = 'Please enter a username';
        isValid = false;
    } else {
        usernameErrorMessage.textContent = ''; 
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailErrorMessage.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailErrorMessage.textContent = ''; 
    }

    // Password validation
    if (password.trim() === '') {
        // ... 
    } else if (password.length < 8) { 
        // ...
    } else {
        // Clear the error message if all validations pass 
        passwordErrorMessage.textContent = ''; 
    }
    

   // ... (add phone and zip code validation) ...

    if (isValid) { 
        alert('Form is valid! (For now, this is a simulation)'); 
    }
});

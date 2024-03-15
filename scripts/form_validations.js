// Function to validate the phone number input
function validatePhoneNumberInput() {
    var phoneNumberInput = document.getElementById('inputPhoneNumber');
    
    phoneNumberInput.addEventListener('input', function(e) {
    // Regular expression for matching only numbers
    var numberOnlyRegex = /^[0-9]*$/;
    
    // If the current value contains non-numeric characters, alert and remove them
    if (!numberOnlyRegex.test(this.value)) {
    // Alert the user
    alert('Only numeric values are allowed in the phone number field.');
    
    // Remove the non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');
    }
    });
    }
    
    // Call the function to attach the event listener to the phone number input
    validatePhoneNumberInput();
    // Function to validate input to ensure only letters are allowed
    function validateTextInputs() {
    // Select the input elements for first name and surname
    var inputFirstName = document.getElementById('inputFirstName');
    var inputSurname = document.getElementById('inputSurname');
    
    // Function to check input against a regular expression that allows only letters
    function checkForLetters(input) {
    var lettersOnlyRegex = /^[A-Za-z]+$/;
    if (!lettersOnlyRegex.test(input.value)) {
    alert('Only letters are allowed in the ' + input.name + ' field.');
    // Remove non-letter characters
    input.value = input.value.replace(/[^A-Za-z]/g, '');
    }
    }
    
    // Event listener for first name input
    inputFirstName.addEventListener('input', function() {
        checkForLetters(inputFirstName);
    });
    
    // Event listener for surname input
    inputSurname.addEventListener('input', function() {
        checkForLetters(inputSurname);
    });
    }
    
    // Call the function to attach the event listeners
    validateTextInputs();

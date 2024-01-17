// Select the button element from the HTML document by its ID
var generateBtn = document.querySelector("#generate");

// Define the character sets for password generation
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[];?><,./-=";

// Function to generate a password based on user input
function generatePassword() {
    // Prompt the user for the desired length of the password
    var passwordLength = Number(prompt("How many characters would you like your password to contain?"));

    // Confirm whether to include various types of characters in the password
    var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");
    var lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");
    var numericCharacters = confirm("Click OK to confirm including numeric characters.");
    var specialSymbols = confirm("Click OK to confirm including special characters.");

    // Check if the provided password length is a valid number within the specified range
    if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
        // Store user choices in an object
        var passwordOptions = {
            passwordLength: passwordLength,
            uppercase: uppercaseCharacters,
            lowercase: lowercaseCharacters,
            numbers: numericCharacters,
            specialSymbols: specialSymbols
        };

        // Accumulate possible characters for the password based on user choices
        var possiblePassword = "";
        if (passwordOptions.uppercase) {
            possiblePassword += uppercase;
        }
        if (passwordOptions.lowercase) {
            possiblePassword += lowercase;
        }
        if (passwordOptions.numbers) {
            possiblePassword += numbers;
        }
        if (passwordOptions.specialSymbols) {
            possiblePassword += symbols;
        }

        // Generate the actual password
        var realPassword = "";
        for (var i = 0; i < passwordOptions.passwordLength; i++) {
            realPassword += possiblePassword.charAt(Math.floor(Math.random() * possiblePassword.length));
        }
        return realPassword;
    } else {
        // Alert the user if the input is invalid and return an empty string
        alert("Please enter a valid number between 8 and 128.");
        return "";
    }
}

// Function to write the generated password to the password input field in the HTML document
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add an event listener to the button to trigger the password generation process when clicked
generateBtn.addEventListener("click", writePassword);
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[];?><,./-=";
function generatePassword() {
var passwordLength = Number(prompt("How many characters would you like your password to contain?"));
var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");
var lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");
var numericCharacters = confirm("Click OK to confirm including numeric characters.");
var specialSymbols = confirm("Click OK to confirm including special characters.");
if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
  var passwordOptions = {
    passwordLength: passwordLength,
    uppercase: uppercaseCharacters,
    lowercase: lowercaseCharacters,
    numbers: numericCharacters,
    specialSymbols: specialSymbols
  }
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
 var realPassword = "";
 for (var i = 0; i < passwordOptions.passwordLength; i++) {
    realPassword += possiblePassword.charAt(Math.floor(Math.random() * possiblePassword.length));
 }
 return realPassword;
} else {
  alert("Please enter a valid number between 8 and 128.");
  return "";
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

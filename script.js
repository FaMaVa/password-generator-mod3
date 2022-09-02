// Assignment code here
var characters = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var charChoice = prompt("How many characters would you like your password to contain?");
  characterChoice = parseInt(charChoice, 10);
  if (!characterChoice) {
    return;
  };
  if (characterChoice >= 8 && characterChoice <= 128) {
    var amount = characterChoice;
    console.log("has " + amount + " characters.");
  } else if (characterChoice < 8) {
    alert("Not enough characters!");
    return;
  } else {
    alert("Too many characters!");
    return;
  };

  var specialChoice = confirm("Click OK to confirm including special characters.");
  if (specialChoice === true) {
    characters.push(" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
    console.log("has special characters.");
  };

  var numericChoice = confirm("Click OK to confirm numeric numeric characters.");
  if (numericChoice === true) {
    characters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    console.log("has numbers.");
  };

  var lowercaseChoice = confirm("Click OK to confirm including lowercase characters.");
  if (lowercaseChoice === true) {
    characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    console.log("has lowercase letters.");
  };

  var uppercaseChoice = confirm("Click OK to confirm including uppercase characters.");
  if (uppercaseChoice === true) {
    characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    console.log("has uppercase letters.");
  };

  function generatePassword(length) {        // found how to at: https://openjavascript.info/2022/03/14random-password-generator-using-javascript/
    let password = '';
    let passwordLength = length;

    const array = new Uint32Array(length); // Create 'unsigned' array
    window.crypto.getRandomValues(array); // Assign random values to new array

    for (let i = 0; i < passwordLength; i++) {
      password += characters[array[i] % characters.length]; // % operator returns remainder of division
    };

    const msg = `Your new password is: "${password}"`;
    console.log(msg);
    return password;
  };
  var password = generatePassword(amount);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "1234567890";
var lowers = "qwertyuiopasdfghjklzxcvbnm";
var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
var specials = "~!@#$%^&*()_+-";
var promptInput = prompt;

var generatePassword = function () {
  // your code goes here
  // get the user data how long do you want nums, lowers, uppers, specials
  var promptInput = parseInt(
    prompt("How long would you like the password to be?")
  );

  console.log("promptInput", promptInput);

  var wantNumbers = confirm("Do you want numbers?");
  var wantLowers = confirm("Do you want lowercase letters?");
  var wantUppers = confirm("Do you want uppercase letters?");
  var wantSpecials = confirm("Do you want special characters?");

  // build array of possibilities
  var possibilities = "";
  if (wantNumbers) {
    possibilities += numbers;
  }
  if (wantLowers) {
    possibilities += lowers;
  }
  if (wantUppers) {
    possibilities += uppers;
  }
  if (wantSpecials) {
    possibilities += specials;
  }

  console.log("possibilities", possibilities, possibilities.length);

  // randomly pick from array of possibilities and then build password - hint use a for loop and Math.floor/random
  var password = "";
  for (var i = 0; i < possibilities.length; i++) {
    var rand = Math.floor(Math.random() * possibilities.length);
    password += possibilities[rand];
  }

  // return the password
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

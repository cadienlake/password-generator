// global variables
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
let password = [];
let allChoices = [];


// Assignment Code
let generateBtn = document.querySelector("#generate");
``
// Write password to the #password input

function generatePassword() {
  // Ask user how long the password should be
  let passwordLength = window.prompt("Please choose a number between 8-20 for your password length.");
  // TODO: Validate that they entered a number between 8-20
  // Ask user if they want numbers
  let isNumbers = window.confirm("Do you want to include numbers?");
  // ask user if they want upper case letters
  let isUpper = window.confirm("Do you want to include upper case letters?");
  // ask user if they want lower case letters
  let isLower = window.confirm("Do you want to include lower case letters?");
  // ask uers if they want special characters
  let isSpecial = window.confirm("Do you want to include special characters?");
  // password is an empty array
  password = [];
  // loops through the index of 
  if (isNumbers === true) {
    // TODO: pick one random number and push it into password
    allChoices = allChoices.concat(number);
  }
  if (isUpper === true) {
    allChoices = allChoices.concat(upper);
  }
  if (isLower === true) {
    allChoices = allChoices.concat(lower);
  }
  if (isSpecial === true) {
    allChoices = allChoices.concat(special);
  }
  for (let i = 0; i < passwordLength; i++) {
    let = maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
  }
}

function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
``
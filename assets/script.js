// global variables
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let special = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
let password = [];
let allChoices = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input

function generatePassword() {
  // password is an empty array
  password = [];
  // Ask user how long the password should be
  let passwordLength = window.prompt("Please choose a number between 4-20 for your password length.");
  // TODO: Validate that they entered a number between 8-20
  if (passwordLength < 4 || passwordLength > 20 || isNaN(passwordLength)) {
    window.alert("You must chose a number between 4 and 20.");
    return null;
  }
  // Ask user if they want numbers
  let isNumbers = window.confirm("Do you want to include numbers?");
  // ask user if they want upper case letters
  let isUpper = window.confirm("Do you want to include upper case letters?");
  // ask user if they want lower case letters
  let isLower = window.confirm("Do you want to include lower case letters?");
  // ask uers if they want special characters
  let isSpecial = window.confirm("Do you want to include special characters?");
  // Check that they've selected at least one input
  if (isNumbers === false && isUpper === false && isLower === false && isSpecial === false) {
    window.alert("You must chose at least one character type.");
    return null;
  }
  // loops through the index of
  if (isNumbers === true) {
    allChoices = allChoices.concat(number);
    let maximum = number.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(number[rnd]);
    passwordLength--;
  }
  if (isUpper === true) {
    ``;
    allChoices = allChoices.concat(upper);
    let maximum = upper.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(upper[rnd]);
    passwordLength--;
  }
  if (isLower === true) {
    allChoices = allChoices.concat(lower);
    let maximum = lower.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(lower[rnd]);
    passwordLength--;
  }
  if (isSpecial === true) {
    allChoices = allChoices.concat(special);
    let maximum = special.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(special[rnd]);
    passwordLength--;
  }
  for (let i = 0; i < passwordLength; i++) {
    let maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
  }
}

function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
  // let playAgain = confirm("Do you want to generate another password?");
  // if (playAgain === true) {
  //   generatePassword();
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

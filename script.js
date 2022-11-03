// global variables
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let passwordLength = 8;
let password = [];


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  // password is an empty array
  password = [];
  // loops through the index of 
  for (let i = 0; i < passwordLength + 1; i++) {
    let = maximum = number.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(number[rnd]);
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
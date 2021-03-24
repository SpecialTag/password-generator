var generateBtn = document.querySelector("#generate");
var enter;
var confirmLowercase;
var ConfirmUppercase;
var confirmNumber;
var confirmSymbol;

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//random generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()-_=+{}[],./?<>";
  return symbols[Math.floor(Math.Random() * symbols.length)];
}

//ask user prompts
function askUser(enter){
  enter = prompt("How many characters do you need? not lower than 4 and not higher than 30")
  if(!enter){
    alert("this needs a value")
  } else if (enter < 4 || enter > 30){
    enter = prompt ("you have to choose something not lower than 4 and not higher than 30")
  } else {
    confirmLowercase = confirm("Do you need lowercase letters?")
    confirmNumber = confirm("Do you need numbers?")
    confirmsymbol = confirm("Do you need symbols?")
    ConfirmUppercase = confirm("Do you need uppercase letters?")
  }
}

//validate the prompts
function validate(){
  if (confirmLowercase == true){
    getRandomLower();
  }
  if(ConfirmUppercase == true){
    getRandomUpper();
  }
  if(confirmNumber == true){
    getRandomNumber();
  }
  if(confirmSymbol == true){
    getRandomSymbol();
  }
  return randomFunc;
}
//here should be a function in wich i combine every other function i made
//but im not really sure how 
function generatePassword(){

}

//and then i got lost, i really should get a tutor, social anxiety aint good for you


generateBtn.addEventListener("click", writePassword);
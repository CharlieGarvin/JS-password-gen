var number = 8;
var choiceArr = [];

var specialCharArr = ['[',')','(','*','&','%','$','#','@','!'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','r','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','R','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var rightPrompts = promptCollector();
  var passwordText = document.querySelector("#password");

  if (rightPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
}

function generatePassword() { 
  var password = "";
  for (var i = 0; i < number; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
    }
    return password;
  }

function promptCollector() {
  choiceArr = [];

  number = parseInt(prompt("Enter a password length from 8-128"));

  if (number < 8 || number > 128) {
    alert("Not a valid input, please try again.");
    return false;
  } 
  if (window.confirm("Do you want to include lowercase?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (window.confirm("Do you want to include uppercase?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (window.confirm("Do you want to include numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
    }
  if (window.confirm("Do you want to include special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}

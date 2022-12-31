
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  var number = prompt("enter a password length from 8-128");
  if (number >= 8 && number <= 128) {
    console.log(number);
  } else {
    return "Not valid input";
  }
  
  do { window.confirm
   } while (window.confirm === true);
   window.confirm("Do you want to include lowercase?");
   window.confirm("Do you want to include uppercase?");
   window.confirm("Do you want to include numbers?");
   window.confirm("Do you want to include special characters?");


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

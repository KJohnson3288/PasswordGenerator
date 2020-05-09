// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Make prompt to appear to confirm variables

function generatePassword() {

  const getLength = prompt("What will be the length of your password? (Must containe a length between 8-126 characters)");

  var getSpecial = confirm("Include special characters?");
  var getLower = confirm("Include lower case letters?");
  var getUpper = confirm("include upper case letters?");
  var getNumber = confirm("include numbers?");


  //An array for all options available
  //An array to double check that all characters needed are used
  //An array to hold the final results and return them to the textbox
  var allOptions = [];
  var neededCharacters = []
  var final = [];


  if (getLength < 8) {
    return "Must be at least 8 characters!"
  } else if (getLength > 126) {
    return "The max character length is 126!"
  }

  //Filtering characters needed to be used

  if (getSpecial) {
    neededCharacters.push(randomSpecial());
  }
  if (getLower) {
    neededCharacters.push(randomLower());
  }
  if (getUpper) {
    neededCharacters.push(randomUpper());
  }
  if (getNumber) {
    neededCharacters.push(randomNumber());
  }


  //Generating the password based on results
  //Need to loop  based on true statements until i = getlength
  //Need another loop to check that all requested characters are used

  for (var i = 0; i < getLength; i++) {
    var randomCharacter =
      allOptions[Math.floor(Math.random() * allOptions.length)];
    final.push(randomCharacter)

  };

  for (var j = 0; j < neededCharacters.length; j++) {
    final[j] = neededCharacters[j];
  };
    
 return final.join("");


  // Create fucntions for each confirmed variable to create a random character/number
  // Confirmed booleans will be combined in the allOption array
  function randomSpecial() {
    const specials = "!@#$%^&*()<>{}[]/-+=/";
    allOptions = allOptions.concat(specials.split(""));
    return specials[Math.floor(Math.random() * specials.length)];
  }

  function randomLower() {
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    allOptions = allOptions.concat(lowers.split(""));
    return lowers[Math.floor(Math.random() * lowers.length)];
  };

  function randomUpper() {
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    allOptions = allOptions.concat(uppers.split(""));
    return uppers[Math.floor(Math.random() * uppers.length)];
  };

  function randomNumber() {
    const numbers = '1234567890';
    allOptions = allOptions.concat(numbers.split(""));
    return numbers[Math.floor(Math.random() * numbers.length)];
  };



};
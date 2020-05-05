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

generateBtn.onclick = generatePassword();

function generatePassword() {

var getCount = [
   getLength = prompt("What will be the length of your password? (Must containe a length between 8-126 characters)"),
   getSpecial = confirm("Include special characters?"),
   getLower = confirm("Include lower case letters?"),
   getUpper = confirm("include upper case letters?"),
   getNumber = confirm("include numbers?")
];

if(getLength < 8) {
  return "Must be at least 8 characters!"
} else if( getLength > 126) {
  return "The max character length is 126!"
}

  //Filtering only true statements from the array

  var trueCount = getCount.filter(Boolean)

  if (trueCount === 0) {
    return "must select one charater type!"
  }

  //Generating the password based on results
  //Need to loop randomFunc based on true statements until x = getlength
 var x = trueCount
 
 while(x < getLength) {
   
  var passwordChar = randomFunc[Math.floor(Math.random() * randomFunc.getlength)]();

    return passwordChar
 };
  



  // Create fucntions for each confirmed variable to create a random character/number
  
    function randomSpecial() {
      const specials = '!@#$%^&*()<>{}[]/-+=/';
      return specials[Math.floor(Math.random() * specials.length)];
    };
    
    function randomLower() {
      const lowers = 'abcdefghijklmnopqrstuvwxyz';
      return lowers[Math.floor(Math.random() * lowers.length)];
    };
    
    function randomUpper() {
      const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return uppers[Math.floor(Math.random() * uppers.length)];
    };
    
    function randomNumber() {
      const numbers = '1234567890';
      return numbers[Math.floor(Math.random() * numbers.length)];
    };

    //Which function will be called based on the booleans that return true
    
    const randomFunc = {
      getspecial: randomSpecial,
      getLower: randomLower,
      getUpper: randomUpper,
      getNumber: randomNumber
    };

   






  };
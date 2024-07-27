// Code Wars
// https://www.codewars.com/kata/57a06b07cf1fa58b2b000252

function isItLetter(character) {
  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for(let i=0; i < letters.length; i++) {
    if(character == letters[i]) {
      return true;
    }
  }
  
  return false;
}

// function isItLetter(character) {
//   return /[a-zA-Z]/.test(character);
// }

// function isItLetter(character) {
//   return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(character);
// }

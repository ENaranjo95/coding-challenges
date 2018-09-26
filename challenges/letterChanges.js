 /*
 Have the function letterChanges take the str parameter being passed and
 modify it using the following algorithm. Replace every letter in the string
 with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 return this modified string.
 */

let letterChanges = function (str) {
  let change = str.replace(/[a-z]/gi, (char) => {
    return char === ('z' || 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1)
  });
  let capitalize = change.replace(/[aeiou]/gi, (vowel) => {
    return vowel.toUpperCase()
  });
  return capitalize
}

module.exports = letterChanges


// Original Method


// // Split method stores all letters in an array and stores it in the variable words
// let words = str.split('')
// // Loops through the words array
// for(let x = 0; x < words.length; x++){
//   // Checks if the letter is equal to z or Z
//   if(words[x] === 'z' || words[x] === 'Z'){
//     // Splice mutates the array (index of the array, 1 means replace current element, what we are replace it with)
//     // In this example if the letter is equal to z or Z then with splice we take the current index number (x)
//     // replace it (represented by the number: 1) with the letter (a)
//     words.splice(x, 1, 'a')
//   }else if(words[x] === ' '){
//     // Same method as explained above except replaced with empty string with a space
//     words.splice(x, 1, ' ')
//   }else{
//     // Same method expected replace with these methods (String.fromCharCode(words[x].charCodeAt() + 1))
//     // String is a a global object with a constructor
//     // The method fromCharCode returns a string created by using the specified sequence of Unicode values.
//     // charCodeAt returns the sequence of unicode values
//     // + 1 increases the sequence of unicode values by 1
//     words.splice(x, 1, String.fromCharCode(words[x].charCodeAt() + 1))
//   }
// }
// // This takes the word array and joins to form a text of string then uses the replace method
// // The replace method checks for vowels declared in the first parameter and then runs an anonomynous function
// // that replaces every lower case vowel to upper case with the toUpperCase method
// return words.join('').replace(/[aeiou]/gi, (vowel) =>{
//   return vowel.toUpperCase()
// })

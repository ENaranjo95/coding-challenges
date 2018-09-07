 /*
 Have the function letterChanges take the str parameter being passed and
 modify it using the following algorithm. Replace every letter in the string
 with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 return this modified string.
 */

let letterChanges = function (str) {
  let final = []
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const letters = str.split(' ')
  for(let x = 0; x < letters.length; x++){
    for(let y = 0; y < alpha.length; y++){
      if(letters[x] === alpha[y]){

      }
    }
  }
  return final.join(' ').replace(/'aeiou'/gi, 'AEIOU')
}

module.exports = letterChanges

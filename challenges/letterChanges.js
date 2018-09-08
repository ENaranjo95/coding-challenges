 /*
 Have the function letterChanges take the str parameter being passed and
 modify it using the following algorithm. Replace every letter in the string
 with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 return this modified string.
 */

let letterChanges = function (str) {
  let words = str.split('')
  for(let x = 0; x < words.length; x++){
    if(words[x] === 'z' || words[x] === 'Z'){
      words.splice(x, 1, 'a')
    }else if(words[x] === ' '){
      words.splice(x, 1, ' ')
    }else{
      words.splice(x, 1, String.fromCharCode(words[x].charCodeAt() + 1))
    }
  }
  return words.join('').replace(/[aeiou]/gi, (vowel) =>{
    return vowel.toUpperCase()
  })
}

module.exports = letterChanges

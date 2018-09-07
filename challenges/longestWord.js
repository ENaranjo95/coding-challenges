/*
Have the function longestWord take the sen parameter being passed and
return the largest word in the string.

If there are two or more words that are the same length, return the first word
from the string with that length. Ignore punctuation and assume sen will not be
empty.
*/

let longestWord = function (sen) {
  const words = sen.split(' ')
  let long = 0
  let word = ''
  for(let x = 0; x < words.length; x++){
    if( long < words[x].length ){
      long = words[x].length
      word = words[x]
    }
  }
  return word
}

module.exports = longestWord

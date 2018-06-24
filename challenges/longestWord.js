// Using the JavaScript language, have the function LongestWord(sen) take the sen
// parameter being passed and return the largest word in the string. If there are
// two or more words that are the same length, return the first word from the
// string with that length. Ignore punctuation and assume sen will not be empty.

let longestWord = function (sen) {

  let splat = sen.split(' ')
  
  let sorty = splat.sort(function (a, b) {
    return b.length - a.length
  })[0]
  
  return sorty
         
}

module.exports = longestWord

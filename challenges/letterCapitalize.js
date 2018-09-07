/*
Have the function letterCapitalize take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one
space.
*/

let letterCapitalize = function (str) {
  const words = str.split(' ')
  let final = []
  for(let x = 0; x < words.length; x++){
    let word = words[x].split('')
    word.splice(0, 1, word[0].toUpperCase())
    final.push(word.join(''))
  }
  return final.join(' ')
}

module.exports = letterCapitalize

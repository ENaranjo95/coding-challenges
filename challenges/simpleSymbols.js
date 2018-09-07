/*
Have the function simpleSymbols take the str parameter being passed and
determine if it is an acceptable sequence by either returning the string true
or false. The str parameter will be composed of + and = symbols with several
letters between them (ie. ++d+===+c++==a) and for the string to be true each
letter must be surrounded by a + symbol. So the string to the left would be
false. The string will not be empty and will have at least one letter.
*/

let simpleSymbols = function (str) {
  for(let x = 0; x < str.length; x++){
    if(str[x] !== '+' && str[x] !== '='){
      if(str[x - 1] !== '+' && str[x + 1] !== '+'){
        return false
      }
    }
  }
  return true
}

module.exports = simpleSymbols

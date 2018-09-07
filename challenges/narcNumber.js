/*
A Narcissistic Number is a number which is the sum of its own digits, each
raised to the power of the number of digits.

Have the function narcNumber take in a number as a parameter and determine if it
is a Narcissistic Number. Your code must return true or false depending upon
whether the given number is a Narcissistic number.

Examples:
153:  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 ... True
1634: 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634 ... True
*/


let narcNumber = (value) => {
  const num = value.toString()
  const power = num.length
  let final = []
  let sum = 0
  for(let x = 0; x < num.length; x++){
    final.push( Math.pow(parseInt(num[x]), power) )
  }
  for(let i = 0; i < final.length; i++){
    sum += final[i]
  }
  if(value === sum){
    return true
  }
  return false
}

module.exports = narcNumber

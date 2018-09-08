/*
Have the function distNum take 3 numbers as parameters and return the distinct
number. 2 of the 3 parameters will always be the same.
*/


let distNum = function (num1, num2, num3) {
  if(num1 === num2){
    return num3
  }
  if(num1 === num3){
    return num2
  }
  if(num2 === num3){
    return num1
  }
}

module.exports = distNum

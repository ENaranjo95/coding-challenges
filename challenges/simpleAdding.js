/*
Have the function simpleAdding add up all the numbers from 1 to num. For
example: if the input is 4 then your program should return 10 because
1 + 2 + 3 + 4 = 10.
*/

let simpleAdding = function (num) {
  if(num === 0){
    return 0
  }else{
    return num + simpleAdding(num - 1)
  }
}

module.exports = simpleAdding

/*
A digital root is the recursive sum of all the digits in a number.

Have the function digitalRoot take a number as an argument and return the sum.
If that value has two digits, continue reducing in this way until a single-digit
number is produced. This is only applicable to the natural numbers.

Examples:
16 =
1 + 6
7

942 =
= 9 + 4 + 2
= 15 ...
= 1 + 5
6
*/


let digitalRoot = (n) => {
  if(n >= 10){
    const num = n.toString()
    let sum = 0
    for(let x = 0; x < num.length; x++){
      sum += parseInt(num.charAt(x))
    }
    return digitalRoot(sum)
  }
  return n
}

module.exports = digitalRoot

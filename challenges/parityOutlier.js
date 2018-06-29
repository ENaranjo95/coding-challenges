/*
You are given an array (which will have a length of at least 3, but could be
very large) containing integers. The array is either entirely comprised of odd
integers or entirely comprised of even integers except for a single integer N.
Have the function parityOutlier take the array as an argument and return this
"outlier" N.
*/

let parityOutlier = function (nums) {
    let evenArr = []
    let oddArr = []
    
    nums.forEach((i) => {
      if (i % 2 == 0) {
        evenArr.push(i)
      } else if (i % 2 != 0) {
        oddArr.push(i)
      }
    })
    
    if (evenArr.length == 1) {
      return evenArr[0]
    } else {
      return oddArr[0]
    }
}

module.exports = parityOutlier

/*
You are given an array (which will have a length of at least 3, but could be
very large) containing integers. The array is either entirely comprised of odd
integers or entirely comprised of even integers except for a single integer N.
Have the function parityOutlier take the array as an argument and return this
"outlier" N.
*/

let parityOutlier = function (arr) {
  let evenCount = 0;
  let even = []
  let oddCount = 0
  let odd = []
  for(let x = 0; x < arr.length; x++){
    if(arr[x] % 2 == 0){
      evenCount++
      even.push(arr[x])
    }else{
      oddCount++
      odd.push(arr[x])
    }
  }
  if(evenCount === 1){
    return even[0]
  }else{
    return odd[0]
  }
}

module.exports = parityOutlier

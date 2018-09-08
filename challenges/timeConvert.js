/*
Have the function timeConvert take the num parameter being passed and return
the number of hours and minutes the parameter converts to
(ie. if num = 63 then the output should be 1:3). Separate the number of hours
and minutes with a colon.
*/

let timeConvert = function (num) {
  return `${ Math.floor(num / 60) }:${ num % 60 }`
}

module.exports = timeConvert

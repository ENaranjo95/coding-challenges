/*
Have the function timeConvert take the num parameter being passed and return
the number of hours and minutes the parameter converts to
(ie. if num = 63 then the output should be 1:3). Separate the number of hours
and minutes with a colon.
*/

let timeConvert = function (num) {
  let hour = num / 60
  let minutes = num % 60
  return `${Math.floor(hour)}:${minutes}`

}

module.exports = timeConvert

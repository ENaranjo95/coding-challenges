/*
Have the function smileyCount count take the arr parameter being passed and
count the number of valid smileys in the array.

Rules for a smiling face:
  - Each smiley face must contain a valid pair of eyes. Eyes can be marked
  as : or ;
  - A smiley face can have a nose but it does not have to. Valid characters for
  a nose are - or ~
  - Every smiling face must have a smiling mouth that should be marked with
  either ) or D.
  - No additional characters are allowed except for those mentioned.
*/
// Valid smiley face examples:
let valid = [':)', ':D', ';-D', ':~)']
// Invalid smiley faces:
let invalid = [';(', ':>', ':}', ':]']
// _____________________________________________________________________________

let smileyCount = function (arr) {
  let smile = 0;
  for(let x = 0; x < arr.length; x++){
    if(arr[x][0] === ':' || arr[x][0] === ';'){
      if(arr[x][1] === ')' || arr[x][1] === 'D'){
        smile++
      }else if(arr[x][1] === '-' || arr[x][1] === '~'){
        if(arr[x][2] === ')' || arr[x][2] === 'D'){
          smile++
        }
      }
    }
  }
  return smile
}

module.exports = smileyCount

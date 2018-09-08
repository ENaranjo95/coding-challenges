/*
Have the function towerBuilder take n number of floors and return n number of
of tower blocks. The argument will always be an integer greater than zero.

For example, a tower of 3 floors looks like below:
*/
[
  '  *  ',
  ' *** ',
  '*****'
]
// and a tower of 6 floors looks like below:
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
// _____________________________________________________________________________

// Stuck
let towerBuilder = (nFloors) => {
  let tower = [];
  let space = ' ';
  let piece = '*';
  for(let x = 0; x < nFloors; x++){
    tower.push(`${space.repeat(nFloors - x - 1)}${piece.repeat(x * 2 + 1)}${space.repeat(nFloors - x - 1)}`)
  }
  return tower
}

module.exports = towerBuilder

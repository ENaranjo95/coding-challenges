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
  for(let x = 0; x < nFloors; x++){
    tower.push(`${ ' '.repeat(nFloors - x - 1) }${ '*'.repeat(x * 2 + 1) }${ ' '.repeat(nFloors - x - 1) }`)
  }
  return tower
}

module.exports = towerBuilder

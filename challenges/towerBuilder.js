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

let towerBuilder = (nFloors) => {
  let tower = [];
  let build = [];
  for(let x = 0; x < nFloors; x++){
    for(let y = 0; y < (x * 2) + 1; y++){
      build.push('*')
    }
    tower.push(build.join(''))
    build = []
  }
  return tower
}

module.exports = towerBuilder

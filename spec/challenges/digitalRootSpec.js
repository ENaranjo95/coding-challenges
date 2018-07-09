describe('Digital root:', function () {
  const digitalRoot = require('../../challenges/digitalRoot')
  
  it('Number passed, 16, should add 1 + 6',
    function () {
    expect(digitalRoot(16)).toEqual(7)
  })
  
  it('Number passed, 76, should add 7 + 6, then 1 + 3',
    function () {
    expect(digitalRoot(76)).toEqual(4)
  })
})

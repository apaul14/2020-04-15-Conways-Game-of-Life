

const gridCreator = (row, col) => {
  let grid = []

  for (let i = 0; i < row; i++) {
    grid.push(new Array())
  }

  grid.forEach(row => {
    for (let i = 0; i < col; i++) {
      row.push(0)
    }
  })

  return grid
}

console.log(gridCreator(5,5))


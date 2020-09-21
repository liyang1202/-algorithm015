var updateBoard = function (board, click) {
  let m = board.length
  let n = board[0].length
  let row = click[0]
  let col = click[1]
  if (board[row][col] == 'M') {
    board[row][col] = 'X'
  } else {
    let count = 0
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i == 0 && j == 0) {
          continue
        }
        let r = row + i
        let c = col + j
        if (r < 0 || r >= m || c < 0 || c >= n) {
          continue
        }
        if (board[r][c] == 'M' || board[r][c] == 'X') {
          count++
        }
      }
    }
    if (count > 0) {
      board[row][col] = count + ''
    } else {
      board[row][col] = 'B'
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i == 0 && j == 0) {
            continue
          }
          let r = row + i
          let c = col + j
          if (r < 0 || r >= m || c < 0 || c >= n) {
            continue
          }
          if (board[r][c] == 'E') {
            updateBoard(board, [r, c])
          }
        }
      }
    }
  }
  return board
}

function solution(keyinput, board) {
  const position = [0, 0];
  const colMax = Math.trunc(board[0] / 2);
  const lowMax = Math.trunc(board[1] / 2);

  const movements = {
    "up": [0, 1],
    "down": [0, -1],
    "left": [-1, 0],
    "right": [1, 0]
  };

  for (let input of keyinput) {
    const [dx, dy] = movements[input];
    const newX = position[0] + dx;
    const newY = position[1] + dy;

    // 이동 가능한 범위를 초과하지 않도록 체크 후 이동
    if (-colMax <= newX && newX <= colMax) position[0] = newX;
    if (-lowMax <= newY && newY <= lowMax) position[1] = newY;
  }

  return position;
}
const input = prompt(
  "which game do you want to play? \n 1.tictactoe \n 2.5mok"
);

const game = input === "1" || input === "tic" || input === "tictactoe" ? 3 : 20;

const boxes = { row: game, column: game };

const data = [];

for (let i = 0; i < boxes.column; i++) {
  data.push([]);
  for (let j = 0; j < boxes.row; j++) {
    data[i].push([]);
  }
}

export { data };

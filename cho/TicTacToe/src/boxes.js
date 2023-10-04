const boxes = { row: 3, column: 3 };

const data = [];

for (let i = 0; i < boxes.column; i++) {
  data.push([]);
  for (let j = 0; j < boxes.row; j++) {
    data[i].push([]);
  }
}

export { data };

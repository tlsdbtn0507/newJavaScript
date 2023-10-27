import { data } from "./boxes.js";

const checkOver = (id, con) => {
  //con =  돌 색 (o or x)
  //id = 클릭한 칸 좌표
  const [row, col] = id.split("-").map((e) => +e);
  data[row][col] = con;


  if (data.length !== 3) {
    //5mok logic

    const holderToCheck = {
      row: [],
      col: [],
      rightDiag: [],
      leftDiag: [],
    };

    //가로줄돌 판명
    for (let i = -5; i < 6; i++) {
      console.log(data[row + i][col]);
      holderToCheck.col.push(data[row + i][col]);
      holderToCheck.row.push(data[row][col + i]);
    }
    console.log(
      holderToCheck.row.every((e) => e === con),
      holderToCheck.row
    );
    if (holderToCheck.row.every((e) => e === con)) return true;
  } else {
    //ttt logic
    for (let i = 0; i < data.length; i++) {
      if ((data[0][0] === con && data[1][1]) === con && data[2][2] === con)
        return true;
      if ((data[0][2] === con && data[1][1]) === con && data[2][0] === con)
        return true;
      if (data[i].every((e) => e === con)) return true;
      if (data.every((e) => e[i] === con)) return true;
    }
  }
};

export { checkOver };

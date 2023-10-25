import { data } from "./boxes.js";

const checkOver = (id, con) => {
  //con =  돌 색 (o or x)
  //id = 클릭한 칸 좌표
  const [row, col] = id.split("-");
  //5mok logic

  if (data.length !== 3) {
    console.log(row, col);
  } else {
    data[row][col] = con;

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

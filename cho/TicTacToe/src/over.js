import { data } from "./boxes.js";

const checkOver = (id, con) => {
  //con =  돌 색 (o or x)
  //id = 클릭한 칸 좌표
  const [row, col] = id.split("-").map((e) => +e);

  const datas = data()
  datas[row][col] = con;


  if (datas.length !== 3) {
    //5mok logic

    const holderToCheck = {
      row: [],
      col: [],
      rightDiag: [],
      leftDiag: [],
    };

    const dolArr = {
      // i:row < 4 ? row : -5,
      // j:row < 4 ? row + 5 : 6
      i:-5,
      j:6
    }



    //가로줄돌 판명
    for (let i = -5; i < 6; i++) {
    // for (let i = dolArr.i; i < dolArr.j; i++) {
      // console.log(datas[row + i][col]);
      holderToCheck.col.push(datas[row + i][col]);
      holderToCheck.row.push(datas[row][col + i]);
    }
    console.log(holderToCheck.col, holderToCheck.row)


    if (holderToCheck.row.every((e) => e === con)) return true;
  } else {
    //ttt logic
    for (let i = 0; i < datas.length; i++) {
      if ((datas[0][0] === con && datas[1][1]) === con && datas[2][2] === con)
        return true;
      if ((datas[0][2] === con && datas[1][1]) === con && datas[2][0] === con)
        return true;
      if (datas[i].every((e) => e === con)) return true;
      if (datas.every((e) => e[i] === con)) return true;
    }
  }
};

export { checkOver };

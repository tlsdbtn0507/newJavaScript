import { checkOver } from "./over.js";

let turn = true;

const click = (e) => {
  //이미 클릭된 칸 클릭 방지
  //   if (e.target.textContent !== "") return;

  console.log(e);

  e.target.textContent = turn ? "o" : "x";

  turn = !turn;

  //   checkOver(e.target.id, e.target.innerHTML) &&
  //     alert(`${!turn ? "o" : "x"} Win!`);

  //   //Draw handler
  //   const drawCheck = [];

  //   document.querySelectorAll("td").forEach((e) => drawCheck.push(e.innerHTML));

  //   if (drawCheck.every((e) => e !== "")) return alert("Draw!");
};

export { click };

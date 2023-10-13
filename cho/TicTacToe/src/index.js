import { data } from "./boxes.js";
import { checkOver } from "./over.js";

const table = document.createElement("table");
let turn = true;

//table 생성
data.forEach((e) => {
  const tr = document.createElement("tr");
  table.append(tr);
  //칸 생성
  e.forEach((i) => {
    const td = document.createElement("td");
    td.id = `${data.indexOf(e)}-${e.indexOf(i)}`;
    tr.append(td);

    //hover
    //td.addEventListener("mouseover", (e) => {
    //  e.target.textContent = turn ? "o" : "x";
    //});
    //td.addEventListener("mouseout", (e) => {
    //  e.target.textContent = "";
    //});

    td.addEventListener("click", (e) => {
      //이미 클릭된 칸 클릭 방지
      if (e.target.textContent !== "") return;

      e.target.textContent = turn ? "o" : "x";

      turn = !turn;

      checkOver(e.target.id, e.target.innerHTML) &&
        alert(`${!turn ? "o" : "x"} Win!`);

      //Draw handler
      const drawCheck = [];

      document
        .querySelectorAll("td")
        .forEach((e) => drawCheck.push(e.innerHTML));

      if (drawCheck.every((e) => e !== "")) return alert("Draw!");
    });
  });
});

document.body.append(table);

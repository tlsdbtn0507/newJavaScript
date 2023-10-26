import { data } from "./boxes.js";
import { click } from "./click.js";
import { checkOver } from "./over.js";

const tbody = document.querySelector(".table tbody");

const tableMaker = () => {
  //table 생성
  const cells = data();
  cells.forEach((e) => {
    const tr = document.createElement("tr");
    //칸 생성
    e.forEach((i) => {
      const td = document.createElement("td");
      td.classList = `${cells.indexOf(e)}-${e.indexOf(i)}`;
      tr.append(td);
    });
    tbody.append(tr);
    tbody.addEventListener('click',(event)=>{click(event)})
  });

};
tableMaker();

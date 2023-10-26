import { data } from "./boxes.js";
import { click } from "./click.js";
import { checkOver } from "./over.js";

const table = document.createElement("table");
const tbody = document.createElement("tbody");

const tableMaker = () => {
  //table 생성
  const cells = data();
  // console.log(data());
  cells.forEach((e) => {
    const tr = document.createElement("tr");
    //칸 생성
    e.forEach((i) => {
      const td = document.createElement("td");
      td.classList = `${cells.indexOf(e)}-${e.indexOf(i)}`;
      // td.textContent = "a";
      td.addEventListener("click", (event) => {
        console.log(event);
        // click(event);
      });
      tr.append(td);
    });
    tbody.append(tr);
  });
  table.appendChild(tbody);

  document.body.appendChild(table);
};
tableMaker();
// // table.addEventListener("click", click);
// document.querySelectorAll("td").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     console.log(e);
//   });
//   // e.onclick = function (e) {
//   console.log(el);
//   // };
// });

// const tds = document.querySelectorAll("td");
// tds.forEach((e) => {
//   console.log(e);
//   e.addEventListener("click", (ev) => {
//     console.log(ev.target);
//   });
// });

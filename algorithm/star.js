let str = "";
for (let i = 0; i < 10; i++) {
  if (i < 6) {
    for (let k = 0; k <= i; k++) {
      str += "x";
    }
  } else {
    for (let j = 5; j > 0; j--) {
      str[i] = "";
    }
  }
  str += "\n";
}
console.log(str);

// let str2 = "x";
// console.log(str2.pop());

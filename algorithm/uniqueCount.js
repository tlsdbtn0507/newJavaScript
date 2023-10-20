const countUniqueValues = (arr) => {
  const toReturn = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) toReturn.push(arr[i + 1]);
    else continue;
  }
  return toReturn.length;
};

countUniqueValues([1, 1, 1, 1, 1, 2]);
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

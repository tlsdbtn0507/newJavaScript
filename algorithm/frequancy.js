function same(first, sec) {
  if (first.length !== sec.length) return false;

  //첫번쨰 배열 모든 요소 제곱화한 배열 만들기
  const toCompare = first.map((e) => e ** 2);

  //   console.log(toCompare.reduce((a, b) => a + b, 0));
  if (toCompare.reduce((a, b) => a + b, 0) !== sec.reduce((a, b) => a + b, 0))
    return false;
  return true;
}

// console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [9, 4, 1]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));
// console.log(same([1, 2, 1, 2, 5], [25, 4, 4, 1, 1]));
// same([1, 2, 3], [1, 4, 9]);
// same([1, 2, 3], [9, 4, 1]);
// same([1, 2, 3], [1, 9]);
// same([1, 2, 1], [4, 4, 1]);

function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.length === 0) return true;
    let toChange = arr2.indexOf(arr1[i]);
    if (toChange === -1) return false;

    arr2 = arr2.replace(arr2[toChange], "").trim();
  }
  return true;
}
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("qwerty", "qeywrt"); // true

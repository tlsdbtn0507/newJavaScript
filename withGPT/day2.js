// function mostFrequentChar(s) {
//   // 구현
//   const strMap = new Map();

//   for (const element of s) {
//     if (strMap.has(element)) {
//       let existed = strMap.get(element);
//       strMap.set(element, existed += 1);
//     }
//     else strMap.set(element, 1);
//   }
//   let maxChar = '';
//   let maxCount = 0;

//   for (const [char, count] of strMap) {
//     if (count > maxCount || (count === maxCount && maxChar > char)) {
//       maxChar = char;
//       maxCount = count;
//     }
//   }
//   return { char: maxChar, count: maxCount };

// }

// console.log(mostFrequentChar("apple"));        // → { char: "p", count: 2 }
// console.log(mostFrequentChar("banana"));      // → { char: "a", count: 3 }
// console.log(mostFrequentChar("zxyxzyz"));     // → { char: "z", count: 3 }
// console.log(mostFrequentChar("aabbcc"));      // → { char: "a", count: 2 } (a가 사전순 가장 빠름)

function twoSum(nums, target) {
  // 구현
  const sumMap = new Map();

  let existed;
  let findIndex;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    const complement = target - element;

    if (sumMap.has(complement)) {
      existed = sumMap.get(complement);
      findIndex = index
    }
    else sumMap.set(element, index);

  }
  return [existed, findIndex];
}


console.log(twoSum([2, 7, 11, 15], 9));     // → [0, 1]
console.log(twoSum([3, 2, 4], 6));          // → [1, 2]
console.log(twoSum([3, 3], 6));             // → [0, 1]
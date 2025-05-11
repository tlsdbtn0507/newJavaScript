// function countPairsWithSum(arr, target) {
//   const answers = []
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (arr[i] + arr[j] === target) answers.push([arr[i], arr[j]])
//     }
//   }
//   console.log(answers);

// }


// countPairsWithSum([1, 2, 3, 4, 5, 6, 7], 8); // 출력: 3  → (1,7), (2,6), (3,5)

// function countPairsWithSumWithMap(arr, target) {
//   const freq = new Map();  // 숫자별 등장 빈도
//   let count = 0;

//   for (const num of arr) {
//     const complement = target - num;
//     // 1) 지금 값의 보완(complement)이 이미 나왔었으면, 
//     //    그만큼 쌍이 생깁니다.
//     if (freq.has(complement)) {
//       count += freq.get(complement);
//     }
//     // 2) 지금 값을 빈도 맵에 추가
//     freq.set(num, (freq.get(num) || 0) + 1);
//   }

//   return count;
// }

// // 예시 실행
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(countPairsWithSumWithMap(arr, 8)); // 3
// // (1+7), (2+6), (3+5)

// function subarraySum(nums, k) {
//   const answer = new Map();
//   let ocasion = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let next = nums[i + 1];
//     if (num === k || num + next === k) {
//       ocasion++
//     }
//     answer.set(num, (answer.has(num) || 0) + 1);
//   }
//   return ocasion
// }

// console.log(subarraySum([1, 1, 1], 2)); // 출력: 2
// console.log(subarraySum([1, 2, 3], 3)); // 출력: 2 → [1,2], [3]
// console.log(subarraySum([-1, -1, 1], 0)); // 출력: 1 → [-1,1]


function prefixSum(start, end, arr) {
  return arr.slice(start - 1, end).reduce((a, b) => a + b);
}

console.log(prefixSum(1, 4, [1, 2, 3, 4, 5, 6, 7, 8])); // 10
console.log(prefixSum(1, 5, [1, 2, 3, 4, 5, 6, 7, 8])); // 15
console.log(prefixSum(3, 5, [1, 2, 3, 4, 5, 6, 7, 8])); // 12
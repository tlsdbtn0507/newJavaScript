function maxSumOfFixedWindow(nums, k) {
  // 구현
  if (nums.length < k) {
    return null;
  }
  let total = nums.slice(0, k).reduce((a, b) => a + b);

  for (let index = k; index < nums.length; index++) {
    const right = nums[index];
    const left = nums[index - k];

    const now = total - left + right
    if (now > total) {
      total = now
    }
  }
  console.log(total)
  return total
}

maxSumOfFixedWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // → 39
// [4,2,10,23]의 합 = 39

maxSumOfFixedWindow([2, 3], 3); // → null (k보다 배열이 짧음)

maxSumOfFixedWindow([5, 5, 5, 5, 5], 2); // → 10
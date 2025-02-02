function solution(array) {
  const freqMap = new Map();

  for (let num of array) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let maxFreq = 0;
  let isMultipleMany = false;
  let mode = -1;


  for (let [num, count] of freqMap) {
    if (count > maxFreq) {
      maxFreq = count
      mode = num
      isMultipleMany = false;
    }
    else if (count === maxFreq) {
      isMultipleMany = true;
    }
  }
  return isMultipleMany ? -1 : mode;
}
function lengthOfLongestSubstring(s) {
  const strSet = new Set();
  let left = 0;
  let max = 0

  for (let right = 0; right < s.length; right++) {
    while (strSet.has(s[right])) {
      strSet.delete(s[left]);
      left++;
    }
    strSet.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  // return max
  return strSet

}

console.log(lengthOfLongestSubstring("abcabcbb")); // → 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // → 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // → 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // → 0
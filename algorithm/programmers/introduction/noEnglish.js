function solution(numbers) {

  const words = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine"
  ]

  const wordsMap = new Map(words.map((e, i) => [e, i]));
  let answer = '';
  let single = '';
  for (let i = 0; i < numbers.length; i++) {
    single += numbers[i];
    if (wordsMap.has(single)) {
      answer += wordsMap.get(single);
      single = '';
    }
  }
  return +answer;
}
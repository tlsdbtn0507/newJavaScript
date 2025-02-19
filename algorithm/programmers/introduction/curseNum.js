function solution(n) {
  const answer = [];

  for (let i = 1; answer.length <= 100; i++) {
    if (
      i % 3 === 0 ||
      `${i}`.includes(3)
    ) continue;
    answer.push(i)
  }

  return answer[n - 1];
}
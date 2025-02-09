function solution(n) {
  let answer = 0;
  const fac = (num) => num === 1 ? 1 : num * fac(num - 1);

  for (let i = 1; i <= 10; i++) {
    if (fac(i) <= n && fac(i + 1) > n) answer = i
  }


  return answer;
}
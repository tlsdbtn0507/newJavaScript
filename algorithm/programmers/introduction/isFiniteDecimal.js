function solution(a, b) {
  const getGcd = (a, b) => b === 0 ? a : getGcd(b, a % b);
  const gcd = getGcd(a, b);

  let [son, mom] = [a, b].map(e => e / gcd);

  while (mom % 2 === 0) mom /= 2;
  while (mom % 5 === 0) mom /= 5;

  return mom === 1 ? 1 : 2;
}
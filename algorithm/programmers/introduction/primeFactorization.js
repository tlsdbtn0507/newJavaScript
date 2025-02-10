function solution(n) {
  let factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  return Array.from(new Set(factors));
}
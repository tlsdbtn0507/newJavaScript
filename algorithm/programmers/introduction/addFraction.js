function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
  // 1. 최소공배수(LCM) 구하기
  const lcm = (denom1 * denom2) / gcd(denom1, denom2);

  // 2. 분자 통분 후 덧셈
  const numerator = (numer1 * (lcm / denom1)) + (numer2 * (lcm / denom2));

  // 3. 기약 분수로 변환하기 위해 GCD 구하기
  const divisor = gcd(numerator, lcm);

  // 4. 분자와 분모를 GCD로 나누어 기약 분수 반환
  return [numerator / divisor, lcm / divisor];
}
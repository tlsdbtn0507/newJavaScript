function solution(numlist, n) {
  const numMap = new Map();

  numlist.forEach(e => {
    numMap.set(e, Math.abs(e - n))
  })

  const result = [...numMap]
    .sort((a, b) => a[1] - b[1] || b[0] - a[0])

  return result.map(e => e[0]);
}
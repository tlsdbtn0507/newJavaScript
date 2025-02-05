function solution(emergency) {
  let i = 1;

  const emerIndex = emergency.map((e, i) => [e, i])
  const sorted = emerIndex.sort((a, b) => b[0] - a[0]);
  const ranked = sorted.map(e => {
    return [i++, e[1]]
  })

  return ranked.sort((a, b) => a[1] - b[1]).map(e => e[0]);
}
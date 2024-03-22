function solution(v) {
  const half = v.slice(0, 2);
  const [toCheck] = v.slice(2);
  const halfx = half.map(e => e[0]);
  const halfy = half.map(e => e[1]);

  const x = halfx.filter(e => e !== toCheck[0]);
  const y = halfy.filter(e => e !== toCheck[1]);

  const answer = [
    x.length > 1 ? toCheck[0] : x,
    y.length > 1 ? toCheck[1] : y,
  ];

  return answer.flat();

};
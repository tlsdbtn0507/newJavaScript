function solution(score) {
  const averages = score
    .map(([eng, math], idx) => [idx, (eng + math) / 2]);

  averages.sort((a, b) => b[1] - a[1]);

  let ranks = new Array(score.length);
  let rank = 1;

  for (let i = 0; i < averages.length; i++) {

    if (i > 0 && averages[i][1] === averages[i - 1][1]) {
      ranks[averages[i][0]] = ranks[averages[i - 1][0]];
    } else {
      ranks[averages[i][0]] = rank;
    }
    rank++;
  }

  return ranks;
}
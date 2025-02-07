function solution(hp) {
  const antAttacks = [5, 3, 1];
  let answer = 0;
  let total = hp
  antAttacks.forEach(e => {
    let ants = Math.trunc(total / e)
    total = total - ants * e;
    answer += ants
  })


  return answer;
}
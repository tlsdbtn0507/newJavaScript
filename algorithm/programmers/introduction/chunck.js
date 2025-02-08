function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    let sl = [...num_list];
    answer.push(sl.slice(i, i + n))
  }

  return answer;
}
function solution(lines) {
  const answer = new Map();

  for (let j = 0; j < lines.length; j++) {
    const [start, end] = lines[j];
    for (let i = start; i < end; i++) {
      if (answer.has(i)) {
        answer.set(i, answer.get(i) + 1)
      }
      else answer.set(i, 1)
    }
  }

  const vals = [...answer.values()];
  if (vals.every(e => e <= 1)) return 0;
  return vals.filter(e => e >= 2).length;
}
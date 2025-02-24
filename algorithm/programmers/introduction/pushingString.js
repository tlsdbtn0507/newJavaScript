function solution(A, B) {
  let answer = 0;

  const a = [...A];
  const b = [...B];

  const checkFunc = (arr1, arr2) => {
    if (answer === arr2.length) return answer = -1
    if (`${arr1}` === `${arr2}`) return
    const pop = arr1.pop();
    const nextArr1 = [pop].concat(arr1)
    answer++;
    checkFunc(nextArr1, arr2)
  }

  checkFunc(a, b)
  return answer;
}
function solution(my_string, queries) {
    
    let string = my_string
    
    for(let i = 0; i < queries.length; i++){
        let index = [queries[i][0],queries[i][1]+1]
        let toChange = string.slice(...index)
    
        string = string.replace(toChange,[...toChange].reverse().join(''))
    }
    return string.trim();
}

//위 문제 해결책
function solution_completed(my_string, queries) {
    let str = my_string.split('');
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join('');
}
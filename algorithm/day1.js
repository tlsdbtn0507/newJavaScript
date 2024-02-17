function solution(num_list, n) {
    let answer 
    
    num_list.forEach(e=>{
        e === n ? answer = true : false
    })
   
    return answer ? 1 :0;
}

function solution2(str) {
  let res = '';

    for(let i = 0 ; i <str.length ; i++){
        str[i] === str[i].toUpperCase() ? 
            res += str[i].toLowerCase() : 
            res += str[i].toUpperCase()
    }

  return res
}
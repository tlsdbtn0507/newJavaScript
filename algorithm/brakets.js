function solution(s){
    let answer = 0;

    for(let i of s){
        i === '(' ? answer++ : answer--
        if(answer < 0) return false
    }
    return answer === 0
}
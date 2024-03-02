function solution(intStrs, k, s, l) {
    var answer = [];
    
    const sliced = intStrs.map(e=>e.slice(s,s+l)).map(e=>+e)
    
    answer = sliced.filter(e=> e > k && e)
    
    return answer;
}

function solution1(my_strings, parts) {
    const arr = []
    for(let i = 0; i < my_strings.length; i++){
        arr.push(my_strings[i].slice(parts[i][0],parts[i][1]+1))
    }

    return arr.join('')
}
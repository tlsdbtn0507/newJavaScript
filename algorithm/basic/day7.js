function solution(my_string, queries) {
    
    let string = my_string
    
    for(let i = 0; i < queries.length; i++){
        let index = [queries[i][0],queries[i][1]+1]
        let toChange = string.slice(...index)
    
        string = string.replace(toChange,[...toChange].reverse().join(''))
    }
    return string.trim();
}
//세로 만들기
function solution(my_string, m, c) {
    let a = []
    for(let i = 0 ; i < my_string.length; i+=m){
        a.push(my_string.slice(i,i+m))
    }
    return a.map(e=>e[c-1]).join('')
}

//큐알코드
function solution(q, r, code) {
    const arr = [...code].map((e,i)=>({index:i,value:e}));

    const answer = arr.filter(e=> e.index%q === r)
    return answer.map(e=>e.value).join('')
}
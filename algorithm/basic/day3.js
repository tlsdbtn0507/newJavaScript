function solution(ineq, eq, n, m) {
    let answer;
    const a = ineq === '<';
    const b = eq === "!";
    
    if(a && b) answer = n < m;
    if(!a && !b) answer = n >= m;
    if(!a && b) answer = n > m;
    if(a && !b) answer = n <= m;
    
    return +answer;
}
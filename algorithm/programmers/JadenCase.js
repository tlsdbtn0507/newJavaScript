function solution(s) {
    
    const arr = s.split(' ');
    
    return arr.map(e=>{
        let s = e.split('')
        if(s[0] > 0) return s.map(e=>e.toLowerCase()).join('')
        else {
            s = s.map((e,i)=> i === 0 ? e.toUpperCase() : e.toLowerCase() );
            return s.join('')
        }
    }).join(' ');
}
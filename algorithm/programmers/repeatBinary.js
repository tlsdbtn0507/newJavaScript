function solution(s) {
    
    const answer = [0,0]
    
    function f(input){

        const arr = input.split('');
        arr.forEach(e=>{
            e === '0' && answer[1]++
        })
        
        const str = arr.filter(e=>e !== '0').join('');
        
        if(str !== '1'){
            answer[0]++;
            f(str.length.toString(2))
        }
        
        return str
    }

    answer[0]++;
    f(s)
    return answer;    

    
}
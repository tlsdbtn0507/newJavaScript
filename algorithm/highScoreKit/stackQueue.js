function programming(progresses, speeds) {
    const answer = [];
    
    let days= []
    for(let i = 0; i < progresses.length; i++){
        let d = 1
        for(let j = +progresses[i]; j+speeds[i] < 100; j+=speeds[i]){
            d++
        }
        days.push(d)
    }
    let c = 1
    for(let i = 1; i <= days.length; i++) {
        
        console.log(days,c,i)
        if(days[0] < days[i]) {
            days.shift()
            answer.push(c);
        }
        if(days[0] > days[i]) {
            c++
        }
        
    }
    
    return answer;
}
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
  let maxDays = days[0];     
    let count = 0;
    for (let i = 0; i < days.length; i++) {
        if (days[i] <= maxDays) {
            count++;
        } else {
            answer.push(count);
            maxDays = days[i];
            count = 1;
        }
    }
    answer.push(count); 
    
    return answer;
}
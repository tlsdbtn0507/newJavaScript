function solution(l, r) {
    var answer = [];
    
    for(let i = l; i <= r; i++){
        let word = [...`${i}`];
        word.every(e=> e ==='5' || e === '0') && answer.push(i);
    }
    

    
    return answer.length ? answer : [-1];
}


function solution2(n){

    const answers = [n];

    function recursion(m){
        if(m!==1){
            let condition
            if(m%2) condition = 3*m+1;
            else condition = m/2;
            
            answers.push(condition);
            recursion(condition)
        }
        if(m === 1) return
    }

    recursion(n)
    return answers
}

function solution3(arr,queries){
    for(let i = 0; i < queries.length; i++){
        for(let j = queries[i][0]; j < queries[i][1]+1; j ++){
            if(j%queries[i][2] === 0) arr[j] += 1;
        }
    }
    return arr
}
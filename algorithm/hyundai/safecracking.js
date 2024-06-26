const readline = require('readline');

(async()=>{
    let rl = readline.createInterface({ input: process.stdin });
    let i = 0;
    let w = 0;
    let bag = 0;
    const metals = [];
    for await (const line of rl){
        let index = line.split(' ').map(e=>+e)
        if(!i){
            w = index[0]    
        }else{
            metals.push(index)
        }   
        i++
    }
    metals.sort((a,b)=>b[1] - a[1], 0);

    const cal = (i=0) => {
        const m = metals[i][0]
        bag += m
        const gap = w - bag;
        if(gap === 0) return  m * metals[i][1]
        if(metals[i+1][0] >= gap){
            return gap * metals[i+1][1] + m * metals[i][1]
        }
        else cal(i+1,m)
    }
    console.log(cal())
})()
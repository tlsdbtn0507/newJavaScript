const readline = require('readline');

(async()=>{
    let rl = readline.createInterface({ input: process.stdin });

    for await (const line of rl){
        const arr = line.split(' ').map(Number)

        const r = arr.map((e,i)=>{
            if( i < arr.length - 1) return e < arr[i+1]
            
        })
        r.pop()
        const c = r[0]
        console.log(r.every(e=> e === c) ? c ? 'ascending' : 'descending' : 'mixed')
    }
})()
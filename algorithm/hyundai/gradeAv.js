// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
    const average = [0];
    const range = []
	for await (const line of rl) {
        const inputs = line.split(' ')
        
        if(inputs.length !== 2){ 
            average.push(inputs.map(e=>+e));
            continue
        }
        const [i,s] = line.split(' ');
        range.push([i,s])
	}
    range.shift()

    range.forEach(e=>{
        const a = average.flat()
        const [start,end] = e;
        const arr = a.slice(start,+end+1)
        console.log((arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2))
    })

	
	process.exit();
})();

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
  range.forEach((e,i)=>{
      if(i) {
        const [start,end] = e;
        const arr = average[1].slice(+start-1,+end)
        console.log((arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(2))    
      }
  })
process.exit();
})();
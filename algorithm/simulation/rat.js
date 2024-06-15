// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = [];
	let total
	for await (const line of rl) {
		const l = line.split(' ').map(e=>+e);
		
		if(l.length  === 1){ 
			total = l[0]
			continue
		};
		
		arr.push(l)
		rl.close();
	}
	
	const [clean,dirty] = arr

	const getMostVal = (arr)=>{
		const result = [];
		
		const arr2 = arr.sort((a,b)=>a-b,0)
		const [start] = arr.sort((a,b)=>a-b,0);
		const [end] = arr.sort((a,b)=>b-a,0);
		
		for(let i = start; i<= end; i++){
			result.push([arr.filter(e=> (i >= e-2 && i <= e+2 ) && e).length,i]);
		}
		const [toRet] = result.sort((a,b)=>b[0]-a[0],0);
		return toRet[1]
	}
	const cleanRes = getMostVal(clean);
	const dirtyRes = getMostVal(dirty);
	console.log(cleanRes,dirtyRes)
	console.log(cleanRes > dirtyRes ? 'good' : 'bad')
	
	process.exit();
})();

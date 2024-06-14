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
		
		// arr.push(l.sort((a,b)=>a-b,0))
		arr.push(l)
		rl.close();
	}
	
	
	
	// let mostVals = [];
	const [clean,dirty] = arr
	// console.log(clean,dirty)

	const getMostVal = (arr)=>{
		const result = []
		for(let i = 0; i< arr.length; i++){
			result.push([arr.filter(e=> (arr[i] >= e-2 && arr[i] <= e+2 ) && e).length,i])
		}
		return result.sort((a,b)=>a[0]-b[0],0)
		// return result
	}
	console.log(getMostVal(clean))
	
	process.exit();
})();

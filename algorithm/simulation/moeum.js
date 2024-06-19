// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const MOEUM = ['a','A','e','i','I','E','o','O','u','U'];
	
	for await (const line of rl) {
		if(Number(line)) continue;
		let arr = [...line	]
		let result = ''
	
		arr.forEach(e=>{
			MOEUM.includes(e) ? result += e  : ''
		})
		console.log(result || '???')
		rl.close();
	}
	
	process.exit();
})();

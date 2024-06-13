// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let total
	for await (const line of rl) {
		const l = line.split(' ').map(e=>+e);
		
		if(l.length  === 1) {
			total = l[0];
			continue;
		}
		
		console.log(total,l);
		rl.close();
	}
	
	process.exit();
})();

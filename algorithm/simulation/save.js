// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });

	let balance = 0;
	let success = true;

	for await (const line of rl) {
		if(line.length === 1) continue;
		
		const [type, amount] = line.split(' ');

		const money = parseInt(amount,10);
		
		if(type === 'in') balance += money
		else if(type === 'out') balance -= money;
		
		if(balance < 0) {
			success = false;
			break
		}
		
		rl.close();
	}
	console.log(success ? 'success' : 'fail');
	
	process.exit();
})();

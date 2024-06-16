// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const snake = '#';
	const none = '.';
	let result = '';
	
	let c
	let r
	for await (const line of rl) {

		[c,r] = line.split(' ')

		rl.close();
	}
	
	let turn = true
	for(let i = 0; i < c; i++){
		const con = i%4;
		for(let j = 0; j < r; j++){
			if(con %2 === 0) result = result + snake;
			if(con === 1){ 
				if(j === r-1) result = result + snake;
				else result = result + none;
			}
			if(con === 3){
				if(j === 0) result = result + snake;
				else result = result + none;
			}
		}
		result = result + '\n'
	}
	console.log(result)
	
	process.exit();
})();

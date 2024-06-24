// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
    const x = ['x','X'];
	let answer = '';
	for await (const line of rl) {
        if(line.split(' ').length === 1) continue
        const [first,second] = line.split(' ');
        const index = first.indexOf('x') < 0 ? first.indexOf('X') : first.indexOf('x')
        answer += second[index].toUpperCase()
	}

    console.log(answer)
	
	process.exit();
})();

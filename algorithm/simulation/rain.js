const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    const inputLines = [];
    for await (const line of rl) {
        inputLines.push(line);
    }
    
    rl.close();

    const [N, house, ...scope] = inputLines;
    const houses = house.split(' ').map(e => +e);
    const rainedScope = scope.map(e => e.split(' ').map(Number));
    let drainDays = [];

    rainedScope.forEach((range, index) => {
        const [start, end] = range;
        
        for (let i = start - 1; i < end; i++) {
            houses[i] += 1;
        }
        
        if ((index + 1) % 3 === 0) {
            drainDays.push(index);
        }
    });

    drainDays.forEach(day => {
        const drainRange = rainedScope.slice(day - 2, day + 1);
        const affected = new Set();
        
        drainRange.forEach(([start, end]) => {
            for (let i = start - 1; i < end; i++) {
                affected.add(i);
            }
        });
        
        affected.forEach(index => {
            houses[index] -= 1;
        });
    });

    console.log(houses.join(' '));
    
    process.exit();
})();

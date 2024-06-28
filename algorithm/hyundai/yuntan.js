const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const input = [];

    rl.on('line', function(line) {
        input.push(line);
    }).on('close', function() {
        const n = parseInt(input[0]);
        const radii = input[1].split(' ').map(Number);

        const maxHouses = (radii) => {
            const counts = {};
            radii.forEach(radius => {
                for (let r = 2; r <= radius; r++) {
                    if (radius % r === 0) {
                        if (!counts[r]) counts[r] = 0;
                        counts[r]++;
                    }
                }
            });

            let maxCount = 0;
            for (const count in counts) {
                if (counts[count] > maxCount) {
                    maxCount = counts[count];
                }
            }

            return maxCount;
        };

        console.log(maxHouses(radii));
        process.exit();
    });
})();

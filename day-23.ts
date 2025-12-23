function minStepsToDeliver(map: string[][]): number {
    const moves: number[][] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    const indexSY = map.findIndex(line => line.includes('S'));
    if (indexSY === -1) return 0;
    const indexSX = map[indexSY].indexOf('S');

    let totalG = 0;
    for (const row of map) {
        for (const cell of row) {
            if (cell === 'G') totalG++;
        }
    }

    const queue: [number, number, number][] = [[indexSY, indexSX, 0]];
    const visited: boolean[][] = Array.from(
        { length: map.length },
        () => Array(map[0].length).fill(false)
    );
    visited[indexSY][indexSX] = true;

    let suma = 0;
    let foundG = 0;
    while (queue.length > 0) {
        const node = queue.shift();
        if (!node) break;

        const [topY, topX, dist] = node;

        const value = map[topY][topX];
        if (value === 'G') {
            suma += dist;
            foundG++;
        }

        for (const [moveY, moveX] of moves) {
            const newPosY = topY + moveY;
            const newPosX = topX + moveX;


            if (newPosY < 0 || newPosY >= map.length || newPosX < 0 || newPosX >= map[newPosY].length || map[newPosY][newPosX] === '#') continue;
            if (visited[newPosY][newPosX]) continue;

            visited[newPosY][newPosX] = true;
            queue.push([newPosY, newPosX, dist + 1])
        }
    }

    return foundG === totalG ? suma : -1;
}


console.log(
    minStepsToDeliver([
        ['S', '.', 'G'],
        ['.', '#', '.'],
        ['G', '.', '.']
    ])
)


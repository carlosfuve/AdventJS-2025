function canEscape(maze: string[][]): boolean {
    const moves: number[][] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    const indexSY = maze.findIndex(line => line.includes('S'));
    if (indexSY === -1) return false;
    const indexSX = maze[indexSY].indexOf('S');

    const queue: number[][] = [[indexSY, indexSX]];
    const visited: boolean[][] = Array.from(
        { length: maze.length },
        () => Array(maze[0].length).fill(false)
    );
    visited[indexSY][indexSX] = true;


    while (queue.length > 0) {
        const node = queue.shift();
        if (!node) break;

        const [topY, topX] = node;

        const value = maze[topY][topX];
        if (value === 'E') return true;

        for (const [moveY, moveX] of moves) {
            const newPosY = topY + moveY;
            const newPosX = topX + moveX;


            if (newPosY < 0 || newPosY >= maze.length || newPosX < 0 || newPosX >= maze[newPosY].length || maze[newPosY][newPosX] === '#') continue;
            if (visited[newPosY][newPosX]) continue;

            visited[newPosY][newPosX] = true;
            queue.push([newPosY, newPosX])
        }
    }


    return false
}


/*console.log(canEscape([
    ['S', '.', '#', '.'],
    ['#', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['#', '#', '#', 'E']
]))*/
// → true

console.log(canEscape([
    ['S', '#', '#'],
    ['.', '#', '.'],
    ['.', '#', 'E']
]))
// → false
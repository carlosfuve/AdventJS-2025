function hasFourInARow(board: string[][]): boolean {

    const directions = [
        [0, 1],
        [1, 0],
        [1, 1],
        [1, -1]
    ];

    function checkDirection(color: string, posY: number, posX: number, vertical: number, horizon: number): boolean {
        for (let step = 1; step < 4; step++) {
            const newY = posY + vertical * step;
            const newX = posX + horizon * step;

            if (board?.[newY]?.[newX] !== color) return false;
        }
        return true;
    }


    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            const ligth = board[y][x];
            if (ligth === '.') continue;

            if (directions.some(([dy, dx]) => checkDirection(ligth, y, x, dy, dx))) return true;

        }
    }
    return false
}


hasFourInARow([
    ['.', '.', '.', 'G'],
    ['.', '.', 'G', '.'],
    ['.', 'G', '.', '.'],
    ['G', '.', '.', '.']
])
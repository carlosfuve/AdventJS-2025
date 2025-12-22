function hasFourLights(board: string[][]): boolean {

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

            if (checkDirection(ligth, y, x, 0, 1)) return true;

            if (checkDirection(ligth, y, x, 1, 0)) return true;
        }
    }
    return false
}

hasFourLights([
    ['.', '.', '.', '.', '.'],
    ['R', 'R', 'R', 'R', '.'],
    ['G', 'G', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourLights([
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.']
])
// true → hay 4 luces verdes en vertical

hasFourLights([
    ['R', 'G', 'R'],
    ['G', 'R', 'G'],
    ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas
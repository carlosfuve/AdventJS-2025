type Board = string;
type Moves = string;
type Result = 'fail' | 'crash' | 'success';

function moveReno(board: Board, moves: Moves): Result {

    const indexMoves: Record<string, number[]> =
    {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    }


    const lines = board.split('\n');
    const boardSplit = lines.slice(1, lines.length - 1);

    let iniY = boardSplit.findIndex(row => row.includes('@'));
    if (iniY === -1) return 'fail';

    let iniX = boardSplit[iniY].indexOf('@');

    for (const move of moves) {
        const [moveY, moveX] = indexMoves[move];

        const indexY = moveY + iniY;
        const indexX = moveX + iniX;

        if (indexY < 0 || indexY >= boardSplit.length || indexX < 0 || indexX >= boardSplit[indexY].length) return 'crash';

        const objectNextPosition = boardSplit[indexY][indexX];
        if (objectNextPosition === '*') return 'success';
        if (objectNextPosition === '#') return 'crash';

        iniY = indexY;
        iniX = indexX;
    }


    return 'fail';
}



const board = `
.....
.*#.*
.@...
.....
`

//moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

//moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

//moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

//moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

//moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

//moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada
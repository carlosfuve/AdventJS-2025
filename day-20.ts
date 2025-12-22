function dropGifts(warehouse: string[][], drops: number[]): string[][] {
    for (const columnName of drops) {
        for (let y = warehouse.length - 1; y >= 0; y--) {
            if (warehouse[y][columnName] === '.') {
                warehouse[y][columnName] = '#';
                break;
            }

        }
    }

    return warehouse;
}


dropGifts(
    [
        ['.', '.', '.'],
        ['.', '#', '.'],
        ['#', '#', '.']
    ],
    [0]
)
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

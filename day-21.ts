function clearGifts(warehouse: string[][], drops: number[]): string[][] {
    for (const columnName of drops) {
        for (let y = warehouse.length - 1; y >= 0; y--) {
            if (warehouse[y][columnName] === '.') {
                warehouse[y][columnName] = '#';

                const indexToClean = warehouse.findIndex(row => row.every(object => object === '#'));
                if (indexToClean !== -1) {
                    const cleanRow = Array(warehouse[0].length).fill('.');

                    warehouse.splice(indexToClean, 1);
                    warehouse.unshift(cleanRow);
                }


                break;
            }
        }

    }

    return warehouse;
}


clearGifts(
    [
        ['.', '.', '#'],
        ['#', '.', '#'],
        ['#', '.', '#']
    ],
    [0, 1, 2]
)
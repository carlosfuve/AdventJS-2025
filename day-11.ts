function findUnsafeGifts(warehouse: string[]): number {
    const maxY = warehouse.length;
    if (maxY === 0) return 0;
    const maxX = warehouse[0].length;

    function hasNotCamera(y: number, x: number, table: string[]): boolean {
        return table?.[y]?.[x] !== '#';
    }

    let unsafeGifts = 0;
    for (let y = 0; y < maxY; y++) {
        for (let x = 0; x < maxX; x++) {
            if (warehouse[y][x] === '*') {
                if (hasNotCamera(y - 1, x, warehouse) && hasNotCamera(y + 1, x, warehouse)
                    && hasNotCamera(y, x - 1, warehouse) && hasNotCamera(y, x + 1, warehouse)) unsafeGifts++;
            }
        }
    }

    return unsafeGifts
}


findUnsafeGifts([
    '.*.',
    '*#*',
    '.*.'
]) // ➞ 0

// Todos los regalos están junto a una cámara

findUnsafeGifts([
    '...',
    '.*.',
    '...'
]) // ➞ 1

// Este regalo no tiene cámaras alrededor

findUnsafeGifts([
    '*.*',
    '...',
    '*#*'
]) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

findUnsafeGifts([
    '.....',
    '.*.*.',
    '..#..',
    '.*.*.',
    '.....'
]) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
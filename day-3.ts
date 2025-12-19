function drawGift(size: number, symbol: string): string {
    if (size < 2) return '';

    const firstAndLastLine: string = symbol.repeat(size);
    const middleLines: string = symbol + ' '.repeat(size - 2) + symbol + "\n";
    const body: string = middleLines.repeat(size - 2);

    return (firstAndLastLine + "\n") + body + firstAndLastLine
}

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…
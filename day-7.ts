function drawTree(height: number, ornament: string, frequency: number): string {

    let suma = 1;
    const resultChain: string[] = [];
    for (let i = 0; i < height; i++) {

        const bodyTree = Array.from(
            { length: 2 * i + 1 },
            (_, index) => ((suma + index) % frequency) === 0 ? ornament : '*'
        );

        const body = ' '.repeat(height - 1 - i) + bodyTree.join('');
        resultChain.push(body);

        suma += 2 * i + 1
    }

    const spacesBaseTree = ' '.repeat(height - 1);
    const baseTree = spacesBaseTree + '#';

    return [...resultChain, baseTree].join("\n")
}

console.log(drawTree(5, 'o', 2))
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

//drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

//drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #
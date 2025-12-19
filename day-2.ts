function manufactureGifts(giftsToProduce: Array<{ toy: string, quantity: number }>): string[] {
    return giftsToProduce.map(gTp => {
        if (gTp.quantity <= 0) return []
        return Array(gTp.quantity).fill(gTp.toy);
    }).flat()
}



const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
    { toy: 'train', quantity: 0 }, // no se fabrica
    { toy: 'bear', quantity: -2 }, // tampoco
    { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3: Array<{ toy: string, quantity: number }> = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []
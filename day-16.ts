type Gifts = number[]
type MaxWeight = number
type Result = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result {
    let numberTrineos = 0;
    let acc = 0;
    for (const gift of gifts) {
        if (gift > maxWeight) return null;

        if (acc + gift >= maxWeight) {
            numberTrineos++;
            acc = acc + gift === maxWeight ? 0 : gift;
        }
        else acc += gift;

    }

    return numberTrineos + (acc > 0 ? 1 : 0)
}

//console.log(packGifts([2, 3, 4, 1], 5))
// 2 trineos
// Trineo 1: 2 + 3 = 5
// Trineo 2: 4 + 1 = 5

//console.log(packGifts([2, 3, 4, 1], 5))
console.log(packGifts([3, 3, 3], 5))

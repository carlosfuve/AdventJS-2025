type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
    const mapCountGloves: Record<string, { L: number; R: number }> = {};
    const listGlovesResult: string[] = [];

    for (const { color, hand } of gloves) {
        if (!mapCountGloves[color]) mapCountGloves[color] = { L: 0, R: 0 };


        const opposite = hand === 'L' ? 'R' : 'L';

        if (mapCountGloves[color][opposite] > 0) {
            mapCountGloves[color][opposite]--;
            listGlovesResult.push(color);
        } else {
            mapCountGloves[color][hand]++;
        }
    }

    return listGlovesResult;
}

const gloves: Glove[] = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' }
]

console.log(matchGloves(gloves))
// ["red", "green"]

const gloves2: Glove[] = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' }
]

console.log(matchGloves(gloves2))
// ["gold", "gold"]

const gloves3: Glove[] = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' }
]

console.log(matchGloves(gloves3))
// []

const gloves4: Glove[] = [
    { hand: 'L', color: 'green' },
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' }
]

console.log(matchGloves(gloves4))
// ['red', 'green']
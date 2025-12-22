type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {

    function findGitfPathDepth(workshopObject: Workshop, depth: number): Path {
        if (depth > 3 || typeof workshopObject !== 'object' || workshopObject === null || Object.keys(workshopObject).length === 0) {
            return [];
        }

        for (const [key, value] of Object.entries(workshopObject)) {

            if (value === gift) return [key];

            if (typeof value === 'object' && value !== null) {
                const subPath = findGitfPathDepth(value, depth + 1);

                if (subPath.length > 0) return [key, ...subPath];
            }
        }

        return [];
    }

    return findGitfPathDepth(workshop, 1);
}



const workshop = {
    storage: {
        shelf: {
            box1: 'train',
            box2: 'switch'
        },
        box: 'car'
    },
    gift: 'doll'
}

//console.log(findGiftPath(workshop, 'train'))
// ➜ ['storage', 'shelf', 'box1']

//console.log(findGiftPath(workshop, 'switch'))
// ➜ ['storage', 'shelf', 'box2']

console.log(findGiftPath(workshop, 'car'))
// ➜ ['storage', 'box']

//findGiftPath(workshop, 'doll')
// ➜ ['gift']

//findGiftPath(workshop, 'plane')
// ➜ []
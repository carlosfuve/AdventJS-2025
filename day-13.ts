type Factory = string[]
type ResultFactory = 'completed' | 'broken' | 'loop'

function runFactory(factory: Factory): ResultFactory {
    const indexMoves: Record<string, number[]> =
    {
        '^': [-1, 0],
        'v': [1, 0],
        '<': [0, -1],
        '>': [0, 1]
    }

    const maxY = factory.length;
    const maxX = factory?.[0]?.length;
    let [posY, posX] = [0, 0]

    const matrixVisited = Array.from({ length: maxY }, () => Array(maxX).fill(false));
    matrixVisited[posY][posX] = true;


    let finalPoint = false;

    while (!finalPoint) {
        const currentPosition = factory[posY][posX];

        if (currentPosition === '.') finalPoint = true;
        else {
            const [moveY, moveX] = indexMoves[currentPosition];
            const [nextPointY, nexPointX] = [posY + moveY, posX + moveX];

            if (nextPointY < 0 || nexPointX < 0 || nextPointY >= maxY || nexPointX >= factory[nextPointY].length) return 'broken';
            if (matrixVisited[nextPointY][nexPointX]) return 'loop';

            matrixVisited[nextPointY][nexPointX] = true;
            posX = nexPointX;
            posY = nextPointY;
        }


    }

    return 'completed'
}


console.log(runFactory([
    'v.',
    '^.'
]))
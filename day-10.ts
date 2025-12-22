function maxDepth(s: string): number {
    let currentDepth = 0;
    let maxDepth = 0;

    for (const char of s) {
        if (char === '[') {
            currentDepth++;
            if (currentDepth > maxDepth) maxDepth = currentDepth;
        } else if (char === ']') {
            currentDepth--;
            if (currentDepth < 0) return -1;
        }
    }

    return currentDepth === 0 ? maxDepth : -1;
}



//console.log(maxDepth('[]')) // -> 1
console.log(maxDepth('[[]]')) // -> 2
//maxDepth('[][]') // -> 1
console.log(maxDepth('[[][]]')) // -> 2
//maxDepth('[[[]]]') // -> 3
//maxDepth('[][[]][]') // -> 2

//maxDepth('][') // -> -1 (cierra antes de abrir)
//maxDepth('[[[') // -> -1 (faltan cierres)
//maxDepth('[]]]') // -> -1 (sobran cierres)
//maxDepth('[][][') // -> -1 (queda uno sin cerrar)
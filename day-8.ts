function findUniqueToy(toy: string): string {
    const count: Record<string, number> = {};

    for (const letter of toy) {
        const lower = letter.toLowerCase();
        count[lower] = (count[lower] || 0) + 1;
    }

    for (const letter of toy) {
        if (count[letter.toLowerCase()] === 1) {
            return letter;
        }
    }

    return '';
}



console.log(findUniqueToy('Gift')) // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

console.log(findUniqueToy('sS')) // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

console.log(console.log(findUniqueToy('reindeeR'))) // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
//findUniqueToy('AaBbCc') // ''
//findUniqueToy('abcDEF') // 'a'
//findUniqueToy('aAaAaAF') // 'F'
//findUniqueToy('sTreSS') // 'T'
//findUniqueToy('z') // 'z'
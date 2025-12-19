function decodeSantaPin(code: string): string | null {
    let decodedPin = '';

    while (code !== '') {

        if (!code.startsWith('[')) return null;

        const end = code.indexOf(']');
        if (end === -1) return null;
        const contentBlock = code.slice(1, end)

        if (contentBlock === '<') {
            if (decodedPin.length === 0) return null;
            decodedPin = decodedPin + decodedPin[decodedPin.length - 1];
            code = code.slice(end + 1);
            continue;
        }
        else {

            const insideBlock: string | undefined = code.match(/\[(.*?)\]/)?.[1];
            if (insideBlock === undefined) return null;

            const numberBase = Number(insideBlock[0]);
            if (Number.isNaN(numberBase)) return null;

            let number = numberBase;

            const operations = contentBlock.slice(1);
            for (const operation of operations) {
                if (operation === '+') number++;
                else if (operation === '-') number--;
                else return null;
            }

            number = (number + 10) % 10;
            decodedPin += number.toString();

            code = code.slice(end + 1);

        }

    }

    return decodedPin.length < 4 ? null : decodedPin;
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'))
// "0944"

console.log(decodeSantaPin('[1+][2-]'))
// null (solo 2 dígitos)

console.log(decodeSantaPin('[][][][]'))

type Data = Array<Record<string, string | number>>
type SortBy = string
type Grouped = Record<string, (string | number)[]>;

function drawTable(data: Data, sortBy: SortBy): string {
    function sortByFunction<T extends Record<string, string | number>>(arr: T[], key: keyof T, ascending = true) {
        return [...arr].sort((a, b) => {
            const valA = a[key];
            const valB = b[key];

            if (typeof valA === 'number' && typeof valB === 'number') {
                return ascending ? valA - valB : valB - valA;
            }
            return ascending ? String(valA).localeCompare(String(valB)) : String(valB).localeCompare(String(valA));
        });
    }

    const grouped = sortByFunction(data, sortBy).reduce<Grouped>((acc, obj) => {
        for (const [key, value] of Object.entries(obj)) {
            if (!acc[key]) acc[key] = [value];
            else acc[key].push(value);
        }
        return acc;
    }, {});

    const listMaxChar: number[] = Object.values(grouped).map(p => Math.max(...p.map(value => String(value).length)));


    const topBottom = '+' + listMaxChar.map(maxNumber => '-'.repeat(maxNumber + 2)).join('+') + '+';
    let header = '| ' + listMaxChar.map((maxNumber, index) => String.fromCharCode('A'.charCodeAt(0) + index) + ' '.repeat(maxNumber)).join('| ') + '|'

    let body = '';

    const lists = Object.values(grouped);

    const numberRows = lists.length;
    const numberColumns = lists[0].length ?? 0;
    for (let i = 0; i < numberColumns; i++) {
        let letterRow = '| '
        for (let y = 0; y < numberRows; y++) {

            letterRow += lists[y][i] + ' '.repeat(listMaxChar[y] - String(lists[y][i]).length)
            if (y !== numberRows - 1) letterRow += ' | '
        }


        body += letterRow + ' |';
        if (i !== numberColumns - 1) body += "\n";
    }

    return [topBottom, header, topBottom, body, topBottom].join("\n");
}


console.log(drawTable(
    [
        { name: 'Charlie', city: 'New York' },
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' }
    ],
    'name'
))
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

/*drawTable(
    [
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 },
        { gift: 'Doll', quantity: 10 }
    ],
    'quantity'
)*/
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+
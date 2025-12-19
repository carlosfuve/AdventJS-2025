type ElfDateTime = `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(fromTime: ElfDateTime, takeOffTime: ElfDateTime): number {

    function elfTimeToDate(time: string): Date {
        const newTime = time.replaceAll('*', '-').replace('@', 'T').replace(' NP', '').replaceAll('|', ':');
        const date = new Date(newTime);
        return date
    }

    const fromDate = elfTimeToDate(fromTime);
    const takeOffDate = elfTimeToDate(takeOffTime);

    const diffMs = (takeOffDate.getTime() - fromDate.getTime()) / 1000;

    return Math.floor(diffMs);
}


const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))
// 30

// justo en el momento exacto
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 segundos después del despegue
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12
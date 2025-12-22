function elfBattle(elf1: string, elf2: string): number {

    let lifeElf1 = 3;
    let lifeElf2 = 3;

    function damage(attack: string, opponent: string): number {
        if (attack === 'F') return 2;
        if (attack === 'A') return opponent === 'B' ? 0 : 1;
        return 0;
    }

    const maxTurns = Math.max(elf1.length, elf2.length);

    for (let i = 0; i < maxTurns; i++) {
        const attack1 = elf1[i] ?? '';
        const attack2 = elf2[i] ?? '';

        lifeElf1 -= damage(attack2, attack1);
        lifeElf2 -= damage(attack1, attack2);

        const elf1Dead = lifeElf1 <= 0;
        const elf2Dead = lifeElf2 <= 0;

        if (elf1Dead && elf2Dead) return 0;
        if (elf1Dead) return 2;
        if (elf2Dead) return 1;
    }

    return lifeElf1 == lifeElf2 ? 0 : lifeElf1 > lifeElf2 ? 1 : 2;

}

//console.log(elfBattle('A', 'B'))
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

//elfBattle('F', 'B')
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

//elfBattle('AAB', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

//elfBattle('AFA', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

elfBattle('AFAB', 'BBAF')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

//elfBattle('AA', 'FF')
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2
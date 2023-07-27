const generators = {
    g_tier: _typesafe.e('gen.g')
}

function buy_generator(index: number): boolean {
    if (available(index)) {
        const gen = data.generators[index]
        data.simulons -= gen.cost
        gen.cost *= gen.boost
        gen.amount += 1
        return true
    } else {
        console.info("> Skill Issue")
        return false
    }
}
function calculate_income() {
    data.income = 0
    data.generators.forEach(element => {
        data.income += element.pertick * element.amount
    });
}

generators.g_tier.onclick = () => {
    buy_generator(GeneratorIndex.g_tier)
}

_typesafe.e('gen.max').onclick = () => {
    while (available(GeneratorIndex.g_tier)) {
        buy_generator(GeneratorIndex.g_tier)
    }
}

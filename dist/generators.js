var generators = {
    g_tier: _typesafe.e('gen.g')
};
function buy_generator(index) {
    var gen = data.generators[index];
    data.simulons -= gen.cost;
    gen.cost *= gen.boost;
    gen.amount += 1;
}
function calculate_income() {
    data.income = 0;
    data.generators.forEach(function (element) {
        data.income += element.pertick * element.amount;
    });
}
generators.g_tier.onclick = function () {
    if (available(GeneratorIndex.g_tier)) {
        buy_generator(GeneratorIndex.g_tier);
    }
    else {
        console.info("> Skill Issue");
    }
};

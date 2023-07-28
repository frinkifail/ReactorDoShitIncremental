var generators = {
    g_tier: _typesafe.e('gen.g'),
    cat_meme: _typesafe.e('gen.cat')
};
function buy_generator(index) {
    if (available(index)) {
        var gen = data.generators[index];
        data.simulons -= gen.cost;
        gen.cost *= gen.boost;
        gen.amount += 1;
        return true;
    }
    else {
        console.info("> Skill Issue");
        return false;
    }
}
function calculate_income() {
    data.income = 0;
    data.generators.forEach(function (element) {
        data.income += element.pertick * element.amount;
    });
}
generators.g_tier.onclick = function () {
    buy_generator(GeneratorIndex.g_tier);
};
generators.cat_meme.onclick = function () {
    buy_generator(GeneratorIndex.cat_meme);
};
_typesafe.e('gen.max').onclick = function () {
    while (available(GeneratorIndex.g_tier)) {
        buy_generator(GeneratorIndex.g_tier);
    }
};

const _VERSION = "1.0.0 | Rewriting the entire thing"

function e(name: string) {
    return document.getElementById(name)
}
const _typesafe = {
    el(element: HTMLElement | null) {
        if (element) {return element} else {return document.createElement('div')}
    },
    e(name: string) {
        return _typesafe.el(e(name))
    }
}
const GeneratorIndex = {
    passive: 0,
    g_tier: 1
}

window.onload = () => {
    console.info("> Deltatime is 1 frame slower :staring_cat:")
    _typesafe.e('i.ver').textContent = _VERSION;
}

function draw() {
    _typesafe.e('d.sim').textContent = data.simulons.toLocaleString();
    _typesafe.e('d.sim.ps').textContent = data.income.toLocaleString();

    _typesafe.e('gens.g.amount').textContent = data.generators[1].amount.toLocaleString();
    _typesafe.e('gens.g.cost').textContent = data.generators[1].cost.toLocaleString();

    draw_gen_availability(available(GeneratorIndex.g_tier), _typesafe.e('gen.g'))
}

function get_dt(): number {
    const now = Date.now()
    const dt = now - data.last_update
    data.last_update = now
    return dt
}

function available(index: number): boolean {
    if (data.simulons >= data.generators[index].cost) {return true;} else {return false;}
}
function draw_gen_availability(available: boolean, element: HTMLElement) {
    if (available) {
        element.className = "generators-buttons canPurchase"
    } else {
        element.className = "generators-buttons cantPurchase"
    }
}

function update(dt: number) {
    data.simulons += data.income * dt/1000
    calculate_income()
    // console.log(dt/1000)
}

setInterval(() => update(get_dt()), data.tickspeed)
setInterval(draw, data.draw_tickspeed)

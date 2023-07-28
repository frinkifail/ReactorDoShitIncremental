const _VERSION = "1.0.0 | Rewriting the entire thing"

function e(name: string) {
    return document.getElementById(name)
}
const _typesafe = {
    el(element: HTMLElement | null, _name: string) {
        if (element) {return element} else {console.error(`>> Element ${_name} not found.`); return document.createElement('div')}
    },
    e(name: string) {
        return _typesafe.el(e(name), name)
    }
}
const GeneratorIndex = {
    passive: 0,
    g_tier: 1,
    cat_meme: 2
}

window.onload = () => {
    console.info("> Deltatime is 1 frame slower :staring_cat:")
    _typesafe.e('i.ver').textContent = _VERSION;
    const localStorageData = localStorage.getItem('saveslot-0')
    if (localStorageData !== null) data = JSON.parse(localStorageData)
    console.info("> Save Loaded")
}

function draw() {
    _typesafe.e('d.sim').textContent = data.simulons.toLocaleString();
    _typesafe.e('d.sim.ps').textContent = data.income.toLocaleString();

    _typesafe.e('gens.g.amount').textContent = data.generators[GeneratorIndex.g_tier].amount.toLocaleString();
    _typesafe.e('gens.g.cost').textContent = data.generators[GeneratorIndex.g_tier].cost.toLocaleString();

    _typesafe.e('gens.cat.amount').textContent = data.generators[GeneratorIndex.cat_meme].amount.toLocaleString();
    _typesafe.e('gens.cat.cost').textContent = data.generators[GeneratorIndex.cat_meme].cost.toLocaleString();

    draw_gen_availability(available(GeneratorIndex.g_tier), _typesafe.e('gen.g'))
    draw_gen_availability(available(GeneratorIndex.cat_meme), _typesafe.e('gen.cat'))
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
}

_typesafe.e('dev.add').onclick = () => {
    data.simulons += 50
}

let update_interval = setInterval(() => update(get_dt()), data.tickspeed)
setInterval(draw, data.draw_tickspeed)

_typesafe.e('set.apply').onclick = () => {
    const tickspeed_textbox = _typesafe.e('set.tickspeed') as HTMLInputElement
    data.tickspeed = parseFloat(tickspeed_textbox.value)
    clearInterval(update_interval)
    update_interval = setInterval(() => update(get_dt()), data.tickspeed)
}

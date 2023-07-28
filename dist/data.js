var data = {
    simulons: 0,
    income: 0.5,
    tickspeed: 150,
    draw_tickspeed: 150,
    power: 0,
    power_generating: 0,
    generators: [
        { pertick: 0.5, amount: 1, boost: 0, cost: 0 },
        { pertick: 1.0, amount: 0, boost: 1.08, cost: 10 },
        { pertick: 1.5, amount: 0, boost: 1.12, cost: 30 }
    ],
    last_update: Date.now()
};
var _typesafe_savebutton = document.getElementById('set.save');
if (!_typesafe_savebutton) {
    _typesafe_savebutton = document.createElement('a');
}
_typesafe_savebutton.onclick = function () {
    localStorage.setItem('saveslot-0', JSON.stringify(data));
};

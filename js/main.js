const ver = "1.2.1.1 | Not much changes";

function perTickCalculate() {
    for (let i = 0; i < data.generators.length; i++) {
        if (data.generators[i].amount) {data.powergenpt += data.generators[i].pertick*data.generators[i].boost;}
        else {}
    }
    perTickCalculated = true;
}

function update() {
    document.getElementById("powerd").innerText = data.power.toLocaleString();
    document.getElementById("powergend").innerText = data.powergenpt.toLocaleString();
    document.getElementById("simd").innerText = data.simulons.toLocaleString();
    document.getElementById("incd").innerText = data.income.toLocaleString();
    document.getElementById("generator1 cost").innerText = data.generators[1].cost.toLocaleString();
    document.getElementById("generator1 amount").innerText = data.generators[1].amount.toLocaleString();
    if (!perTickCalculated) {perTickCalculate()};if (!perTickCalculated) {perTickCalculate()};
    if (data.simulons >= data.generators[1].cost) {document.getElementById("generator1 button").className = 'generators-buttons canPurchase'} else {document.getElementById("generator1 button").className = 'generators-buttons cantPurchase'}
    data.power += data.powergenpt;
    data.simulons += data.income;
}

window.onload = () => {
    document.getElementById("ver").innerText = ver;
}
document.getElementById("debug checkCalc").onclick = function(){
    perTickCalculate();
    console.log("Redone PerTickCalculation!");
}
setInterval(update, 1000/20); // ineffecient +1000 | efficiency -1000
console.log(data.simulons);

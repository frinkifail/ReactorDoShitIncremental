const ver = "1.2.0";

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
    if (!perTickCalculated) {perTickCalculate()};
    data.power += data.powergenpt;
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

const gen1button = document.getElementById("generator1 button")

gen1button.onclick = function(){
    data.simulons -= data.generators[1].cost;
    data.generators[1].amount += 1;
    data.generators[1].boost += 0.01;
}

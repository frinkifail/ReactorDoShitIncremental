const data = {
    // Risher
    simulons: 0,
    income: 0.01, // slower passive income

    // Powah!!
    power: 100,
    power_mul: 1,
    power_pa: 1,
    powergenpt: 0,

    // Generators+
    generators: [
        {pertick: 0.1, amount: 1, boost: 1.08, cost: 0}, // passive gain (get on start)
        {pertick: 1, amount: 0, boost: 1.10, cost: 50}   // Generator 1
    ],

    // Extreme Reactors
    reactorgenpt: 0,
    reactorstats: [
        {
            fuel: 0, // unit in mb
            fuelmax: 0,
            waste: 0, // unit also in mb
            wastemax: null
            
            // mb can be converted into b
            // 1 b == 1000 mb
            // mb = milibuckets
            // b  = buckets
        }
    ],

    // Extra Utilities
    lastUpdate: Date.now()
}
data.reactorstats[0].wastemax = data.reactorstats[0].fuelmax / 2 // from null to half of fuelmax
let perTickCalculated = false;

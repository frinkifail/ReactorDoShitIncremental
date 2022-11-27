const data = {
    // Powah!!
    power: 100,
    power_mul: 1,
    power_pa: 1,
    powergenpt: 0,

    // Generators+
    generators: [
        {pertick: 0.1, amount: 1, boost: 1.08} // passive gain (get on start)
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

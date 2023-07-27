interface IDataGenerator {
    pertick: number,
    amount: number,
    boost: number,
    cost: number
}
interface IData {
    simulons: number,
    income: number,

    tickspeed: number,
    draw_tickspeed: number, // in ms

    power: number,
    power_generating: number,

    generators: Array<IDataGenerator>,

    last_update: number
}
const data: IData = {
    simulons: 0,
    income: 0.5,

    tickspeed: 150,
    draw_tickspeed: 150,

    power: 0,
    power_generating: 0,

    generators: [
        {pertick: 0.5, amount: 1, boost: 0, cost: 0},
        {pertick: 1.5, amount: 0, boost: 1.18, cost: 10} // G-Tier
    ],

    last_update: Date.now()
}

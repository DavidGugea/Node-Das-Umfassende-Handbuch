const { timer }= require("rxjs");
const { combineLatest, map } = require("rxjs/operators");

const randomInt = () => Math.floor(Math.random() * 100)

const timer1 = timer(0, 500).pipe(map(() => randomInt()))
const timer2 = timer(0, 1000).pipe(map(() => randomInt()))
const timer3 = timer(0, 1500).pipe(map(() => randomInt()))

timer1.pipe(combineLatest(timer2, timer3)).subscribe(([t1, t2, t3]) => {
    console.log(`
    ${new Date()}
    Timer1: ${t1}
    Timer2: ${t2}
    Timer3: ${t3}
    `
    );
});
import {
    Observalbe
} from 'rxjs';

const observable = Observalbe.create(observer => {
    let count = 0;

    const interval = setInterval(() => {
        if (count++ < 10) {
            observer.next('Data package ' + count);
        } else {
            observer.complete();
            clearInterval(interval);
        }
    }, 500);
});

observable.subscribe(data => console.log(data));
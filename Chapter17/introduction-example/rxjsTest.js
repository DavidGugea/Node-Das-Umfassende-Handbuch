import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const array = [2, 3, 9, 8, 4, 1, 5, 6, 7];

from(array)
    .pipe(
        filter(element => element % 2 == 0),
        map(element => element * element),
    )
    .subscribe(
        data => console.log(data)
    );
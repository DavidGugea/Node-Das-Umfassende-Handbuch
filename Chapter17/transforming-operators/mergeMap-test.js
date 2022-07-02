import { Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";

const resources = () => {
    return Observable.create(observer => {
        observer.next({
            id: 1,
            name: "Main Resource",
            user: 2
        });
    });
};

const usersForResource = resource => {
    return Observable.create(observer => {
        observer.next({
            ...resource,
            user: {
                id: 2,
                name: "Klaus"
            },
        });
    });
};

resources()
    .pipe(mergeMap(resource => usersForResource(resource)))
    .subscribe(data => console.log(data));
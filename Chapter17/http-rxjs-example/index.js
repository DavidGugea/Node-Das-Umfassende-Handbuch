import { createServer } from 'http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpObservable = Observable.create(observer => {
    createServer(
        (request, response) => observer.next({ request, response })
    ).listen(8080, () => console.log('Server is listening'))
});

const logger = ({ request }) => console.log(`Requesting: ${request.url}`);

httpObservable
    .pipe(tap(logger))
    .subscribe(({ request, response }) => response.end('Hello RxJS'));
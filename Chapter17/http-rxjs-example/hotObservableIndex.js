import { createServer } from 'http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const server = createServer();
server.listen(8080, () => console.log('The server is listening'));

const httpObservable = Observable.create(observer => {
    server.on('request', (request, response) => observer.next({ request, response }))
});

const logger = ({ request }) => console.log(`Requesting: ${request.url}`);

httpObservable
    .pipe(tap(logger))
    .subscribe(({ request, response }) => response.end('Hello RxJS'));
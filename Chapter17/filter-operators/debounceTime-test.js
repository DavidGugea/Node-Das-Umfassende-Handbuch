import { createServer } from 'http';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const server = createServer().listen(8080, () => console.log("Server is listening"));

fromEvent(server, 'request')
    .pipe(debounceTime(5000))
    .subscribe(([, response]) => response.end("Hello RxJS"));
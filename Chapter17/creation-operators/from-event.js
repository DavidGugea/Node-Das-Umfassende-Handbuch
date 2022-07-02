import { createServer } from 'http';
import { fromEvent } from 'rxjs';

const server = createServer().listen(8080, () => {
    console.log("Server is listening");
});

fromEvent(server, 'request').subscribe(([, response]) => {
    response.end("Hello RxJS")
});
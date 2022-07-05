import { createServer } from 'net';

createServer(
    socket => {
        socket.on(
            'readable', 
            () => {
                const data = socket.read();
                console.log(data);
        });

        socket.end("Hello Client");
    }
).listen(4321);
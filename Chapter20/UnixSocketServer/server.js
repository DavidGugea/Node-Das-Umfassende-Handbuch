import { createServer } from 'net';

const server = createServer(
    connection => {
        connection.on('readable', data => {
            console.log(connection.read().toString());
        });

        connection.on('end', () => {
            console.log('connection end');
        });
    }
);

server.listen('/tmp/node.js.sock', () => {
    console.log('Server listening on /tmp/nodejs.sock');
});